import { Link } from "@inertiajs/react";
import React from "react";

function PendudukCard({ data }) {
    return (
        <>
            {data.length === 0 ? (
                <h1 className="text-slate-500 font-bold p-12">
                    Data Tidak Ditemukan
                </h1>
            ) : (
                data.map((item, i) => (
                    <div
                        key={i}
                        className="w-full min-h-[8rem] p-4 flex bg-white rounded-lg shadow-sm"
                    >
                        <div className="w-[75%] flex flex-col justify-between gap-4">
                            <div className="w-full flex flex-col">
                                <h1 className="text-slate-700 text-base font-bold">
                                    {item.nama}
                                </h1>
                                <span className="text-slate-500  text-sm">
                                    NIK: {item.nik}
                                </span>
                            </div>
                            <div className="w-full flex flex-col">
                                <span className="text-slate-500 text-sm">
                                    Alamat:
                                </span>
                                <h1 className="text-slate-700 text-sm">
                                    {item.alamat}
                                </h1>
                            </div>
                        </div>
                        <div className="w-[25%]  flex flex-col justify-between items-end">
                            <img
                                src={
                                    item.foto
                                        ? item.foto
                                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                                alt="foto"
                                className="h-16 w-16 rounded-full object-center object-cover"
                            />

                            <Link
                                className="text-indigo-400 text-sm"
                                href={`/data-desa/analisa-data/show/${item.nik}`}
                            >
                                Lihat Detail
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default PendudukCard;
