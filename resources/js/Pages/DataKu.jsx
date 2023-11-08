import BackBtn from "@/assets/svg/BackBtn";
import Berkas from "@/assets/svg/Berkas";
import EditUser from "@/assets/svg/EditUser";
import { Head, Link } from "@inertiajs/react";

function DataKu() {
    return (
        <>
            <Head title="BerkasKu" />
            <div className="min-h-screen bg-gradient-to-br from-red-300 from-10% to-slate-50 to-40% py-8 px-4 text-slate-600 flex flex-col items-center gap-8">
                <div className="w-full flex justify-start">
                    <Link href="/profil" className="flex items-center">
                        <div className="h-8 w-8">
                            <BackBtn color={"#1e293b"} />
                        </div>
                        <h1>Kembali</h1>
                    </Link>
                </div>
                <h1 className="w-full px-4 font-bold ">DataKu</h1>
                <div className="entrance w-full flex flex-col items-center gap-6">
                    <Link
                        href="/dataku/editprofil"
                        className={`w-full py-10 rounded-xl shadow-lg bg-white text-slate-600 p-6 flex justify-around items-center gap-4 hover:bg-red-400 transition`}
                    >
                        <h1 className="font-bold text-3xl">Edit Profil</h1>
                        <div className="w-16 h-16">
                            <EditUser color={"#475569"} />
                        </div>
                    </Link>
                    <Link
                        href="/dataku/berkasku"
                        className="w-full py-10 rounded-xl shadow-lg bg-white text-slate-600 p-6 flex justify-around items-center gap-4 hover:bg-red-400 transition"
                    >
                        <h1 className="font-bold text-3xl">Berkas-Ku</h1>
                        <div className="w-16 h-16">
                            <Berkas color={"#475569"} />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default DataKu;
