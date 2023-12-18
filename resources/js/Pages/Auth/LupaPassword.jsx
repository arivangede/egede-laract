import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

function LupaPassword(props) {
    const [formData, setFormData] = useState({
        nama: "",
        nik: "",
    });

    const handleNext = () => {
        console.log("formData:", formData);
        const data = { nama: formData.nama, nik: formData.nik };
        router.post("/lupa-password", data);
    };

    console.log(props);
    return (
        <div
            className={`bg-gradient-to-br from-red-200 from-5% to-slate-50 to-30% min-h-screen flex flex-col ${
                props.flash.message ? "" : "justify-center"
            } items-center`}
        >
            {props.flash.message && (
                <div className="w-full px-4 py-8">
                    <div
                        role="alert"
                        className="alert w-full flex items-center gap-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>{props.flash.message}</span>
                    </div>
                </div>
            )}
            <div className="entrance backdrop-blur border border-slate-200 rounded-xl h-auto w-72 shadow py-12 px-8 flex flex-col items-center gap-4">
                <input
                    type="text"
                    id="nama"
                    className="w-full rounded-xl border-slate-200 bg-transparent"
                    placeholder="Nama Lengkap Sesuai KTP"
                    onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                    }
                    value={formData.nama}
                />

                <input
                    type="text"
                    id="nik"
                    className="w-full rounded-xl border-slate-200 bg-transparent"
                    placeholder="NIK"
                    onChange={(e) =>
                        setFormData({ ...formData, nik: e.target.value })
                    }
                    value={formData.nik}
                />

                <button
                    onClick={handleNext}
                    className="px-4 py-2 transition duration-200 bg-red-400 text-white border border-red-400 rounded-full hover:bg-transparent hover:border-red-400 hover:text-red-400 "
                >
                    Next
                </button>
                <div className="w-full text-center">
                    <h1 className="text-sm">sudah ingat password?</h1>
                    <Link href="/login" className="underline">
                        halaman login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LupaPassword;
