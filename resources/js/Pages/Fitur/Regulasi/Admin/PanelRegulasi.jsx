import StatusCard from "@/Components/Regulasi/StatusCard";
import FilterMenu from "@/Components/Regulasi/admin/FilterMenu";
import SearchRegulasi from "@/Components/Regulasi/admin/SearchRegulasi";
import BackBtn from "@/assets/svg/BackBtn";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { useEffect } from "react";
import { IoAddCircleOutline, IoPencil, IoTrashBin } from "react-icons/io5";

const PanelRegulasi = (props) => {
    const [alert, setAlert] = useState(false);
    const [state, setState] = useState({
        keywords: "",
        sortir: "Terbaru",
        kategori: "",
        status: "",
        value: null,
    });

    useEffect(() => {
        if (props.flash.message || props.errors) {
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 3000);
        }
    }, [props.flash]);

    const handleApply = () => {
        const data = {
            keyword: state.keywords,
            sortir: state.sortir,
            kategori: state.kategori,
            status: state.status,
            tanggal: state.value,
        };
        router.post("/regulasi-admin", data);
        document.getElementById("filter").close();
    };

    const handleDelete = (id) => {
        router.post(`/regulasi-admin/delete-${id}`);
    };

    console.log(props);
    return (
        <div className="min-h-screen w-full bg-slate-50 relative flex flex-col items-center">
            <div className="entrance w-full flex flex-col gap-4 pt-8">
                <div className="w-full p-4 flex items-center">
                    <Link href="/" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>

                    <h1 className="text-bold text-slate-600 text-lg capitalize">
                        Panel Regulasi
                    </h1>
                </div>
                <div className="w-full h-full px-4 flex flex-col gap-4 text-sm text-slate-600">
                    <h1 className="px-4 text-xs text-slate-500 text-justify">
                        Lakukan perubahan terhadap data yang ingin dirubah.
                        Perubahan akan terupdate secara langsung pada sistem.
                        Perubahan dapat dilakukan oleh admin saja.
                    </h1>

                    <StatusCard jumlah={props.jumlah} />

                    <Link
                        href="/regulasi-admin/create-regulasi"
                        className="bg-red-500 w-full flex justify-center items-center py-2 px-4 rounded-xl text-white gap-4"
                    >
                        Tambah Data Regulasi <IoAddCircleOutline size={20} />
                    </Link>

                    <div className="flex flex-row items-center gap-2 w-full justify-between sticky top-4 z-20">
                        <SearchRegulasi
                            state={state}
                            setState={setState}
                            handleapply={handleApply}
                        />
                        <FilterMenu
                            state={state}
                            setState={setState}
                            handleapply={handleApply}
                        />
                    </div>

                    <div className="overflow-x-auto bg-white p-2 rounded-xl">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Kategori</th>
                                    <th>No.</th>
                                    <th>Tahun</th>
                                    <th>Upload</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${
                                            item.status == "Berlaku"
                                                ? "bg-green-200"
                                                : "bg-red-200"
                                        } rounded-xl`}
                                    >
                                        <td>{item.jenis}</td>
                                        <td>{item.no_regulasi}</td>
                                        <td>{item.tahun}</td>
                                        <td>{item.created_at}</td>
                                        <td className="flex flex-col gap-2 items-center">
                                            <Link
                                                href={`/regulasi-admin/edit-${item.id}`}
                                                className="bg-green-400 rounded-2xl p-2 border border-slate-300 hover:bg-transparent transition duration-200"
                                            >
                                                <IoPencil size={20} />
                                            </Link>

                                            <button
                                                className="bg-red-400 rounded-2xl p-2 border border-slate-300 hover:bg-transparent transition duration-200"
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "modal_delete"
                                                        )
                                                        .showModal()
                                                }
                                            >
                                                <IoTrashBin size={20} />
                                            </button>
                                            <dialog
                                                id="modal_delete"
                                                className="modal"
                                            >
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg">
                                                        Perhatian!
                                                    </h3>
                                                    <p className="py-4">
                                                        Apakah anda yakin
                                                        menghapus data regulasi
                                                        ini?
                                                    </p>
                                                    <div className="modal-action">
                                                        <form
                                                            method="dialog"
                                                            className="flex gap-2"
                                                        >
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button
                                                                className="btn btn-error"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                Hapus
                                                            </button>
                                                            <button className="btn">
                                                                Batal
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {props.flash.message && (
                <div
                    className={`absolute top-4 ${
                        alert === true ? "scale-100" : "scale-0"
                    } transition duration-500 origin-top`}
                >
                    <div
                        role="alert"
                        className="alert alert-success flex gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{props.flash.message}</span>
                    </div>
                </div>
            )}
            {props.errors?.file && (
                <div
                    className={`absolute top-4 ${
                        alert === true ? "scale-100" : "scale-0"
                    } transition duration-500 origin-top`}
                >
                    <div role="alert" className="alert alert-error flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{props.errors?.file}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PanelRegulasi;
