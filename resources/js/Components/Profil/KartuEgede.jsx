import React from "react";
import cardmaterial from "@/assets/svg/cardmaterial.svg";
import logoicon from "@/assets/icon/logo-egede.png";
import mapicon from "@/assets/svg/map.svg";

function KartuEgede({ userData }) {
    return (
        <>
            <div className="w-full p-4">
                <div className="w-full h-48 rounded-xl shadow-lg bg-white relative overflow-hidden flex flex-col justify-between">
                    <img
                        src={cardmaterial}
                        alt="card"
                        className="absolute z-0 w-full"
                    />
                    <div className="z-10 px-4 p-2 leading-3 flex justify-between">
                        <div className="w-full h-[6.5rem] flex flex-col items-end justify-between pt-3 text-end">
                            <h1 className="w-[100%] text-xl text-white font-bold leading-5">
                                {userData.penduduk.nama}
                            </h1>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h2 className="text-sm text-white font-bold">
                                        {userData.desa.nama_desa}
                                    </h2>
                                    <img src={mapicon} alt="icon" />
                                </div>
                                <span className="text-xs text-white font-bold tracking-widest">
                                    {userData.userclasses.nama_kelas}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex px-2 ">
                        <div className="absolute top-28 w-[50%] p-1 flex justify-center items-center">
                            <img src={logoicon} alt="icon" />
                        </div>
                        <div className="w-full p-1 flex justify-end items-end">
                            <h1 className="text-lg tracking-wider">
                                {userData.penduduk.nik}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KartuEgede;
