import { Link } from "@inertiajs/react";

import Enews from "./svg/Enews";
import ProfilDesa from "./svg/ProfilDesa";
import Regulasi from "./svg/Regulasi";
import Pengaduan from "./svg/Pengaduan";
import DataDesa from "./svg/DataDesa";
import LayananPublik from "./svg/LayananPublik";
import Epasar from "./svg/Epasar";

function LainnyaPopup({ trigger, setTrigger }) {
    return trigger ? (
        <div className="menu-popup fade">
            <div className="h-[60%] w-full bg-slate-100 rounded-xl entrance">
                <div className="w-full p-4 flex justify-between items-center">
                    <h1 className="text-slate-500">
                        Satu aplikasi banyak fungsi
                    </h1>
                    <button onClick={() => setTrigger(null)}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                <div className="grid grid-cols-4 grid-flow-row p-4 gap-2">
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <Enews color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">E-News</h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <ProfilDesa color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">
                                ProfilDesa
                            </h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <Regulasi color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">Regulasi</h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <Pengaduan color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">
                                Pengaduan
                            </h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <DataDesa color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">DataDesa</h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <LayananPublik color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">
                                LayananPublik
                            </h1>
                        </div>
                    </Link>
                    <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                            <Epasar color={"#fff"} bgcolor={"#ff4344"} />
                        </div>
                        <div>
                            <h1 className="text-sm text-slate-400">E-Pasar</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

export default LainnyaPopup;
