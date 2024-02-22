import BackBtn from "@/assets/svg/BackBtn";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { IoAddCircleOutline, IoCheckmark, IoPencil } from "react-icons/io5";

const FormRegulasi = (props) => {
    const { data, setData, post, progress } = useForm({
        status: props.data?.status || "",
        jenis: props.data?.jenis || "",
        noRegulasi: props.data?.no_regulasi || "",
        tahun: props.data?.tahun || "",
        tentang: props.data?.tentang || "",
        filePdf: null,
    });

    const location = window.location.pathname;

    console.log("====================================");
    console.log(location);
    console.log("====================================");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location == "/regulasi-admin/create-regulasi") {
            post("/regulasi-admin/create-regulasi", data);
        } else {
            post(`/regulasi-admin/edit-${props.data?.id}`, data);
        }
    };

    const isAllFilled =
        data.status &&
        data.filePdf &&
        data.jenis &&
        data.noRegulasi &&
        data.tahun &&
        data.tentang;

    console.log("props:", props);
    console.log("formData:", data);

    return (
        <div className="bg-slate-50 min-h-screen w-full">
            <div className="entrance w-full pt-8 flex flex-col items-center">
                <div className="w-full p-4 flex items-center">
                    <Link href="/regulasi-admin" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>
                </div>
                <div className="w-full flex flex-col px-4 gap-4">
                    <h1 className="text-slate-600 text-2xl px-2 pb-4">
                        {location == "/regulasi-admin/create-regulasi"
                            ? "Form Unggah Regulasi"
                            : "Form Edit Regulasi"}
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="text-sm text-slate-600 flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-2">
                            <label className="font-bold">
                                Status Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className=" rounded-full border-none focus:ring-red-500 shadow transition"
                            >
                                <option value="">Pilih</option>
                                <option value="Berlaku">Berlaku</option>
                                <option value="Tidak Berlaku">
                                    Tidak Berlaku
                                </option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="font-bold">
                                Jenis Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <select
                                value={data.jenis}
                                onChange={(e) =>
                                    setData("jenis", e.target.value)
                                }
                                className="rounded-full border-none focus:ring-red-500 shadow transition"
                            >
                                <option value="">Pilih</option>
                                <option value="Perdes">Peraturan Desa</option>
                                <option value="Perkel">
                                    Peraturan Perbekel
                                </option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="font-bold">
                                Nomor Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <input
                                type="text"
                                className="rounded-xl border-slate-300 max-w-[3rem] focus:ring-red-500 focus:border-red-500 transition"
                                placeholder="00"
                                maxLength={2}
                                value={data.noRegulasi}
                                onChange={(e) =>
                                    setData("noRegulasi", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="font-bold">
                                Tahun Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <input
                                type="text"
                                className="rounded-xl border-slate-300 max-w-[4.3rem] focus:ring-red-500 focus:border-red-500 transition"
                                placeholder="2000"
                                maxLength={4}
                                value={data.tahun}
                                onChange={(e) =>
                                    setData("tahun", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold">
                                Tentang Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <textarea
                                className="textarea textarea-bordered focus:border-red-500 focus:ring-red-500"
                                placeholder="Jelaskan secara singkat topik yang diangkat pada regulasi yang diupload"
                                value={data.tentang}
                                onChange={(e) =>
                                    setData("tentang", e.target.value)
                                }
                            />
                        </div>
                        <div
                            className={`flex flex-col gap-2 border border-red-500 rounded ${
                                props.errors.filePdf ? "" : "border-none"
                            }`}
                        >
                            <label
                                className={`font-bold ${
                                    props.errors.filePdf ? "text-red-500" : ""
                                }`}
                            >
                                File Regulasi{" "}
                                <span className="text-red-500">*</span> :
                            </label>
                            <p className="text-xs text-slate-500">
                                pastikan yang akan di upload adalah file '.pdf'
                            </p>

                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .getElementById("inputfile")
                                            .click();
                                    }}
                                    className={`${
                                        data.filePdf?.name
                                            ? "bg-red-500 text-white"
                                            : props.data?.file_path
                                            ? "bg-white text-red-500"
                                            : "bg-white text-red-500"
                                    } p-2 rounded-xl transition duration-500 border shadow`}
                                >
                                    {data.filePdf?.name ? (
                                        <IoCheckmark size={25} />
                                    ) : props.data?.file_path ? (
                                        <IoPencil size={25} />
                                    ) : (
                                        <IoAddCircleOutline size={25} />
                                    )}
                                </button>
                                <p>
                                    {props.data?.file_name
                                        ? props.data?.file_name
                                        : data.filePdf
                                        ? data.filePdf.name
                                        : ""}
                                </p>
                            </div>
                            <input
                                type="file"
                                id="inputfile"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    setData("filePdf", file);
                                }}
                                accept="application/pdf"
                                hidden
                            />
                            {props.errors.filePdf ? (
                                <h1
                                    className={`text-xs ${
                                        props.errors.filePdf
                                            ? "text-red-500"
                                            : ""
                                    }`}
                                >
                                    {props.errors.filePdf}
                                </h1>
                            ) : (
                                ""
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`btn bg-red-500 ${
                                location !== "/regulasi-admin/create-regulasi"
                                    ? "opacity-100"
                                    : isAllFilled
                                    ? "opacity-100"
                                    : "opacity-50"
                            } text-white transition duration-500 hover:bg-red-500 disabled:text-slate-600`}
                            disabled={
                                location !== "/regulasi-admin/create-regulasi"
                                    ? false
                                    : isAllFilled
                                    ? false
                                    : true
                            }
                        >
                            Submit
                        </button>
                        {progress ? (
                            <div className="w-full flex flex-col items-end relative">
                                <progress
                                    value={progress ? progress.percentage : 0}
                                    max={100}
                                    className="progress progress-error w-full"
                                />
                                <h1 className="font-bold ">
                                    {progress ? progress.percentage : 0}%
                                </h1>
                            </div>
                        ) : (
                            ""
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormRegulasi;
