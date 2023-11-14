import { Link } from "@inertiajs/react";
import React from "react";

function KeluargaCard({ data }) {
    return (
        <>
            {data.map((item, i) => (
                <div
                    key={i}
                    className="w-32 bg-white flex flex-col items-center rounded-xl shadow"
                >
                    <div className="w-20 h-20 items-center justify-center rounded-full overflow-hidden -mt-12 ">
                        <img
                            src={
                                !item.foto
                                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    : "/storage/" + item.foto
                            }
                            alt="foto"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <h1 className="text-center leading-4 font-bold text-slate-700 pt-3 px-2">
                        {item.nama}
                    </h1>
                    <h1 className="text-center leading-4 text-sm text-slate-500 pb-3 px-2">
                        {item.kepala_keluarga == item.nik
                            ? "Kepala Keluarga"
                            : "Anggota Keluarga"}
                    </h1>
                    <Link
                        href={`/data-desa/analisa-data/show/${item.nik}`}
                        className="w-full p-2 flex justify-center items-center bg-slate-600 text-white rounded-b-xl"
                    >
                        Lihat Detail
                    </Link>
                </div>
            ))}
        </>
    );
}

export default KeluargaCard;
