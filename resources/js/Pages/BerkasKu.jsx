import BackBtn from "@/assets/svg/BackBtn";
import Close from "@/assets/svg/Close";
import EditIcon from "@/assets/svg/EditIcon";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState } from "react";

function BerkasKu(props) {
    const [ktp, setKtp] = useState(props.dataKtp.file);
    const [temporaryUrlKtp, setTemporaryUrlKtp] = useState(null);
    const [fileNameKtp, setNameKtp] = useState(props.dataKtp.file_name);

    const [kk, setKk] = useState(props.dataKK.file);
    const [temporaryUrlKk, setTemporaryUrlKk] = useState(null);
    const [fileNameKk, setNameKk] = useState(props.dataKK.file_name);

    const [isKtpChanged, setIsKtpChanged] = useState(false);
    const [ktpPopup, setKtpPopup] = useState(false);
    const [isKkChanged, setIsKkChanged] = useState(false);
    const [kkPopup, setKkPopup] = useState(false);

    const updateKtp = () => {
        const data = { ktp: ktp, ktpName: fileNameKtp };
        router.post("/dataku/berkasku/ktp", data);
        setIsKtpChanged(false);
        setKtpPopup(false);
    };
    const updateKk = () => {
        const data = { kk: kk, kkName: fileNameKk };
        router.post("/dataku/berkasku/kk", data);
        setIsKkChanged(false);
        setKkPopup(false);
    };

    const deleteKtp = () => {
        router.post("/dataku/berkasku/delete-ktp");
        setTemporaryUrlKtp(null);
        setKtp(null);
        setKtpPopup(false);
    };

    const deleteKK = () => {
        router.post("/dataku/berkasku/delete-kk");
        setTemporaryUrlKk(null);
        setKk(null);
        setKkPopup(false);
    };

    console.log(props);
    console.log("ktp :", ktp, fileNameKtp);
    console.log("kk :", kk, fileNameKk);
    return (
        <>
            <Head
                title="BerkasKu
            "
            />
            <div className="min-h-screen bg-slate-50 py-8 px-4 text-slate-600 flex flex-col items-center gap-8">
                <div className="w-full flex justify-start">
                    <Link href="/dataku" className="flex items-center">
                        <div className="h-8 w-8">
                            <BackBtn color={"#1e293b"} />
                        </div>
                        <h1>Kembali</h1>
                    </Link>
                </div>
                {props.flash.message ? (
                    <div
                        className={`${
                            props.flash.message ? "scale-100" : "scale-0"
                        } h-full w-full px-4 transition duration-200 origin-top flex justify-center items-center`}
                    >
                        <div
                            className={`${
                                props.flash.message ? "" : "hidden"
                            } alert alert-success flex text-xs`}
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
                ) : (
                    ""
                )}
                <div className="entrance bg-white p-4 rounded-xl w-full h-full flex flex-col items-center shadow-lg">
                    <div className="flex flex-col w-full h-full gap-2">
                        <div className="w-full flex justify-between items-center">
                            <h1>KTP-Ku</h1>
                            {ktp && props.dataKtp.file ? (
                                <div className="">
                                    <button
                                        onClick={() => setKtpPopup(!ktpPopup)}
                                        className="h-6 w-6 rounded-full flex justify-center items-center shadow border p-1"
                                    >
                                        {ktpPopup == true ? (
                                            <Close color={"#64748b"} />
                                        ) : (
                                            <EditIcon color={"#64748b"} />
                                        )}
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="h-full flex flex-col gap-4 relative">
                            <div
                                className={`absolute top-0 right-0 transition origin-top-right flex flex-col items-end gap-2 z-30 py-2 px-4 bg-slate-100 shadow-lg rounded-lg ${
                                    ktpPopup == false ? "scale-0" : "scale-100"
                                }`}
                            >
                                <button
                                    onClick={() => {
                                        document
                                            .querySelector("#input-ktp")
                                            .click();
                                        setKtpPopup(false);
                                    }}
                                    className={`${
                                        ktpPopup == false ? "absolute" : ""
                                    } whitespace-nowrap `}
                                >
                                    Ganti Data KTP
                                </button>
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById("my_modal_1")
                                            .showModal();
                                        setKtpPopup(false);
                                    }}
                                    className={`${
                                        ktpPopup == false ? "absolute" : ""
                                    } whitespace-nowrap `}
                                >
                                    Hapus KTP
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            Halo,{" "}
                                            {props.auth.user.penduduk.nama}!
                                        </h3>
                                        <p className="py-4">
                                            Apakah kamu yakin untuk menghapus
                                            data KTP kamu?
                                        </p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button
                                                    onClick={deleteKtp}
                                                    className="btn btn-error"
                                                >
                                                    Ya
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setKtpPopup(false)
                                                    }
                                                    className="btn"
                                                >
                                                    Batal
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            <form
                                action="#"
                                onClick={() =>
                                    document.querySelector("#input-ktp").click()
                                }
                                className="w-full h-40 border-2 border-dotted flex flex-col justify-center items-center p-4"
                            >
                                <input
                                    type="file"
                                    id="input-ktp"
                                    name="ktp"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setKtp(file);
                                        setTemporaryUrlKtp(
                                            URL.createObjectURL(file)
                                        );
                                        setNameKtp(file.name);
                                        setIsKtpChanged(true);
                                    }}
                                />
                                {ktp ? (
                                    <>
                                        <img
                                            src={
                                                temporaryUrlKtp
                                                    ? temporaryUrlKtp
                                                    : ktp
                                                    ? "/storage/" + ktp
                                                    : null
                                            }
                                            className="h-full w-full object-center object-contain"
                                            alt={fileNameKtp}
                                        />
                                        <p>{fileNameKtp}</p>
                                    </>
                                ) : (
                                    <p className="select-none">
                                        Klik Untuk Upload KTP
                                    </p>
                                )}
                            </form>
                            {isKtpChanged ? (
                                <div className="w-full flex justify-end gap-4">
                                    <button
                                        onClick={updateKtp}
                                        className="bg-[#ff4344] text-white rounded-lg py-2 px-4 w-full"
                                    >
                                        Simpan
                                    </button>
                                    <button
                                        className="bg-slate-200 rounded-lg py-2 px-4 w-[30%]"
                                        onClick={() => {
                                            setKtp(ktp),
                                                setNameKtp(fileNameKtp);
                                        }}
                                    >
                                        {props.dataKtp ? "Hapus" : "Batal"}
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>

                <div className="entrance bg-white p-4 rounded-xl w-full h-full flex flex-col items-center shadow-lg">
                    <div className="flex flex-col w-full h-full">
                        <div className="w-full flex justify-between items-center">
                            <h1>KK-Ku</h1>
                            {kk && props.dataKK.file ? (
                                <div className="">
                                    <button
                                        onClick={() => setKkPopup(!kkPopup)}
                                        className="h-6 w-6 rounded-full flex justify-center items-center shadow border p-1"
                                    >
                                        {kkPopup == true ? (
                                            <Close color={"#64748b"} />
                                        ) : (
                                            <EditIcon color={"#64748b"} />
                                        )}
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="h-full flex flex-col gap-4 relative">
                            <div
                                className={`absolute top-0 right-0 transition origin-top-right flex flex-col items-end gap-2 z-30 py-2 px-4 bg-slate-100 shadow-lg rounded-lg ${
                                    kkPopup == false ? "scale-0" : "scale-100"
                                }`}
                            >
                                <button
                                    onClick={() => {
                                        document
                                            .querySelector("#input-kk")
                                            .click();
                                        setKkPopup(false);
                                    }}
                                    className={`${
                                        kkPopup == false ? "absolute" : ""
                                    } whitespace-nowrap `}
                                >
                                    Ganti Data KK
                                </button>
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById("my_modal_2")
                                            .showModal();
                                        setKtpPopup(false);
                                    }}
                                    className={`${
                                        kkPopup == false ? "absolute" : ""
                                    } whitespace-nowrap `}
                                >
                                    Hapus KK
                                </button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            Halo,{" "}
                                            {props.auth.user.penduduk.nama}!
                                        </h3>
                                        <p className="py-4">
                                            Apakah kamu yakin untuk menghapus
                                            data KK kamu? <br />
                                            (data kk di keluarga yang memiliki
                                            no kk yang sama akan terhapus juga)
                                        </p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button
                                                    onClick={deleteKK}
                                                    className="btn btn-error"
                                                >
                                                    Ya
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setKkPopup(false)
                                                    }
                                                    className="btn"
                                                >
                                                    Batal
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            <form
                                action="#"
                                onClick={() =>
                                    document.querySelector("#input-kk").click()
                                }
                                className="w-full h-40 border-2 border-dotted flex flex-col justify-center items-center p-4"
                            >
                                <input
                                    type="file"
                                    id="input-kk"
                                    name="kk"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setKk(file);
                                        setTemporaryUrlKk(
                                            URL.createObjectURL(file)
                                        );
                                        setNameKk(file.name);
                                        setIsKkChanged(true);
                                    }}
                                />
                                {kk ? (
                                    <>
                                        <img
                                            src={
                                                temporaryUrlKk
                                                    ? temporaryUrlKk
                                                    : kk
                                                    ? "/storage/" + kk
                                                    : null
                                            }
                                            className="h-full w-full object-center object-contain"
                                            alt={fileNameKk}
                                        />
                                        <p>{fileNameKk}</p>
                                    </>
                                ) : (
                                    <p className="select-none">
                                        Klik Untuk Upload KK
                                    </p>
                                )}
                            </form>
                            {isKkChanged == true ? (
                                <div className="w-full flex justify-end gap-4">
                                    <button
                                        onClick={updateKk}
                                        className="bg-[#ff4344] text-white rounded-lg py-2 px-4 w-full"
                                    >
                                        Simpan
                                    </button>
                                    <button
                                        className="bg-slate-200 rounded-lg py-2 px-4 w-[30%]"
                                        onClick={() => {
                                            setKk(null), setNameKk(null);
                                        }}
                                    >
                                        Hapus
                                    </button>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BerkasKu;
