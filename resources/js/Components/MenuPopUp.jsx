import { Link } from "@inertiajs/react";

import enews from "../../assets/icon/menu/enews-icon.png";
import profildesa from "../../assets/icon/menu/profildesa-icon.png";
import regulasi from "../../assets/icon/menu/regulasi-icon.png";
import pengaduan from "../../assets/icon/menu/pengaduan-icon.png";
import datadesa from "../../assets/icon/menu/datadesa-icon.png";
import layananpublik from "../../assets/icon/menu/layananpublik-icon.png";
import keuangandesa from "../../assets/icon/menu/keuangan-icon.png";
import wisatabudaya from "../../assets/icon/menu/wisatabudaya-icon.png";
import epasar from "../../assets/icon/menu/epasar-icon.png";

function MenuPopUp(props) {
    return props.trigger ? (
        <div className="menu-popup fade">
            <div className=" h-96 w-80 bg-white rounded-xl border shadow-md flex flex-col justify-between overflow-hidden entrance">
                <div className="flex justify-between items-center">
                    <h1 className="pl-5">Menu E-Gede</h1>
                    <button
                        className="h-8 w-8 border rounded-lg flex justify-center items-center"
                        onClick={() => props.setTrigger(false)}
                    >
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                <div className="mt-4 w-full h-[95%] border flex justify-center">
                    <div className="grid grid-cols-3 w-full p-2 pb-10 mx-auto gap-x-3 gap-y-7 overflow-auto shadow-inner text-slate-800 text-xs">
                        <Link
                            href="/enews"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={enews}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                E-News
                            </span>
                        </Link>
                        <Link
                            href="/profildesa"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={profildesa}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Profil Desa
                            </span>
                        </Link>
                        <Link
                            href="/regulasi"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={regulasi}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Regulasi
                            </span>
                        </Link>
                        <Link
                            href="/pengaduan"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={pengaduan}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Pengaduan
                            </span>
                        </Link>
                        <Link
                            href="/datadesa"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={datadesa}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Data Desa
                            </span>
                        </Link>
                        <Link
                            href="/layananpublik"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={layananpublik}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Layanan Publik
                            </span>
                        </Link>
                        <Link
                            href="/keuangandesa"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={keuangandesa}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Keuangan Desa
                            </span>
                        </Link>
                        <Link
                            href="/wisatabudaya"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={wisatabudaya}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                Wisata Budaya
                            </span>
                        </Link>
                        <Link
                            href="/epasar"
                            className="h-20 border shadow-md rounded-xl flex flex-col justify-between items-center overflow-hidden"
                        >
                            <img
                                src={epasar}
                                alt="menu"
                                className="h-[70%] p-1"
                            />
                            <span className="w-full text-center text-white bg-red-600 h-[30%] flex justify-center items-center">
                                E-Pasar
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

export default MenuPopUp;
