import React from "react";

function PendudukCard({ data }) {
    console.log(data);
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
                        className="w-full p-4 flex flex-col bg-white rounded-lg shadow-sm"
                    >
                        <div>nik: {item.nik}</div>
                        <div>nama: {item.nama}</div>
                    </div>
                ))
            )}
        </>
    );
}

export default PendudukCard;
