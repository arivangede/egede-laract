import { Link } from "@inertiajs/react";

import Enews from "./svg/Enews";
import ProfilDesa from "./svg/ProfilDesa";
import Regulasi from "./svg/Regulasi";
import Pengaduan from "./svg/Pengaduan";
import DataDesa from "./svg/DataDesa";
import LayananPublik from "./svg/LayananPublik";
import Epasar from "./svg/Epasar";
import LainnyaButton from "./LainnyaButton";

function Menu() {
    return (
        <>
            <div className="grid grid-rows-2 grid-flow-col gap-2 pb-4">
                <Link
                    href="/e-news"
                    className="w-20 h-20 rounded flex flex-col justify-around items-center"
                >
                    <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <Enews color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">E-News</h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <ProfilDesa color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">ProfilDesa</h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <Regulasi color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">Regulasi</h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <Pengaduan color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">Pengaduan</h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <DataDesa color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">DataDesa</h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <LayananPublik color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">
                            LayananPublik
                        </h1>
                    </div>
                </Link>
                <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                    <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                        <Epasar color={"#fff"} bgcolor={"#ff4344"} />
                    </div>
                    <div>
                        <h1 className="text-sm text-slate-400">E-Pasar</h1>
                    </div>
                </Link>
                <LainnyaButton />
            </div>
        </>
    );
}

export default Menu;
