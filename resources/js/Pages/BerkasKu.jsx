import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

function BerkasKu() {
    const [ktp, setKtp] = useState(null);
    const [fileNameKtp, setNameKtp] = useState(null);

    const [kk, setKk] = useState(null);
    const [fileNameKk, setNameKk] = useState(null);

    console.log("ktp: ", ktp);
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
                <div className="entrance bg-white p-4 rounded-xl w-full h-full flex flex-col items-center shadow-lg">
                    <div className="flex flex-col w-full h-full">
                        <h1>KTP-Ku</h1>
                        <div className="h-full flex flex-col gap-4">
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
                                    onChange={({ target: { files } }) => {
                                        files[0] && setNameKtp(files[0].name);
                                        console.log(files);
                                        if (files[0]) {
                                            setKtp(
                                                URL.createObjectURL(files[0])
                                            );
                                        }
                                    }}
                                />
                                {ktp ? (
                                    <>
                                        <img
                                            src={ktp}
                                            className="h-full w-full object-center object-contain"
                                            alt={fileNameKtp}
                                        />
                                        <p>{fileNameKtp}</p>
                                    </>
                                ) : (
                                    <p>Klik Untuk Upload KTP</p>
                                )}
                            </form>
                            {ktp ? (
                                <div className="w-full flex justify-end gap-4">
                                    <button className="bg-[#ff4344] text-white rounded-lg py-2 px-4 w-full">
                                        Simpan
                                    </button>
                                    <button
                                        className="bg-slate-200 rounded-lg py-2 px-4 w-[30%]"
                                        onClick={() => {
                                            setKtp(null), setNameKtp(null);
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
                <div className="entrance bg-white p-4 rounded-xl w-full h-full flex flex-col items-center shadow-lg">
                    <div className="flex flex-col w-full h-full">
                        <h1>KK-Ku</h1>
                        <div className="h-full">
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
                                    onChange={({ target: { files } }) => {
                                        files[0] && setNameKk(files[0].name);
                                        console.log(files);
                                        if (files[0]) {
                                            setKk(
                                                URL.createObjectURL(files[0])
                                            );
                                        }
                                    }}
                                />
                                {kk ? (
                                    <>
                                        <img
                                            src={kk}
                                            className="h-full w-full object-center object-contain"
                                            alt={fileNameKk}
                                        />
                                        <p>{fileNameKk}</p>
                                    </>
                                ) : (
                                    <p>Klik Untuk Upload KTP</p>
                                )}
                            </form>
                            {kk ? (
                                <div className="w-full flex justify-end gap-4">
                                    <button className="bg-[#ff4344] text-white rounded-lg py-2 px-4 w-full">
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
