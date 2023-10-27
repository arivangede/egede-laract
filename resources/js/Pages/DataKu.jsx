import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function DataKu() {
    return (
        <>
            <Head title="BerkasKu" />
            <div className="min-h-screen bg-slate-50 py-8 px-4 text-slate-600 flex flex-col items-center gap-8">
                <div className="w-full">
                    <Link href="/profil" className="flex items-center">
                        <div className="h-8 w-8">
                            <BackBtn color={"#1e293b"} />
                        </div>
                        <h1>Kembali</h1>
                    </Link>
                </div>
                <h1 className="w-full px-4 font-bold ">DataKu</h1>
                <Link
                    href="/dataku/editprofil"
                    className="w-full py-10 rounded-lg shadow-lg bg-white text-[#ff4344] p-6"
                >
                    <h1 className="font-bold text-2xl tracking-wider">
                        Edit Profil
                    </h1>
                </Link>
                <Link
                    href="/dataku/berkasku"
                    className="w-full py-10 rounded-lg shadow-lg bg-white text-[#ff4344] p-6"
                >
                    <h1 className="font-bold text-2xl tracking-wider">
                        Berkas-Ku
                    </h1>
                </Link>
            </div>
        </>
    );
}

export default DataKu;
