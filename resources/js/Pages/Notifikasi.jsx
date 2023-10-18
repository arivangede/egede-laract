import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Notifikasi = () => {
    return (
        <>
            <Navbar active={"Notifikasi"} />
            <Head title="Notifikasi" />
            <div className="entrance min-h-screen h-full flex flex-col items-center bg-slate-50">
                <h1 className="text-[#ff4344] font-black text-4xl w-full pt-16 pb-8 px-4">
                    Notifikasi
                </h1>
                <div className="flex flex-col items-center w-full px-6 py-10 pt-52">
                    <h1 className="text-base text-slate-500 font-bold text-center">
                        Belum ada Notifikasi apapun saat ini, Nantikan informasi
                        terkini dari E-Gede!
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Notifikasi;
