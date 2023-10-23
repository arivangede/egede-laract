import { useState } from "react";

function ProfilDesc({ userData }) {
    const [toogleDetail, setToogleDetail] = useState(false);
    return (
        <div className="p-4 w-full flex flex-col items-center gap-4">
            <h1 className="text-xl font-bold text-center">
                {userData.penduduk.nama}
            </h1>
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-full flex flex-col border-b">
                    <h1 className="font-bold">No KK:</h1>
                    <h1>{userData.penduduk.no_kk}</h1>
                </div>
                <div className="w-full flex flex-col border-b">
                    <h1 className="font-bold">Alamat:</h1>
                    <h1>{userData.penduduk.alamat}</h1>
                </div>
                <div className="w-full flex flex-col border-b">
                    <h1 className="font-bold">No Telp:</h1>
                    <h1>{userData.penduduk.no_hp}</h1>
                </div>

                {toogleDetail != false ? (
                    <div className="entrance w-full flex flex-col items-center gap-4">
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Jenis Kelamin:</h1>
                            <h1>{userData.penduduk.jenis_kelamin}</h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Pekerjaan:</h1>
                            <h1>{userData.penduduk.pekerjaan}</h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Suku Bangsa:</h1>
                            <h1>{userData.penduduk.suku_bangsa}</h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">
                                Tempat / Tanggal Lahir:
                            </h1>
                            <h1>
                                {userData.penduduk.tempat_lahir} /{" "}
                                <span> {userData.penduduk.tanggal_lahir}</span>
                            </h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Kewarganegaraan:</h1>
                            <h1>{userData.penduduk.kewarganegaraan}</h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Pendidikan Terakhir:</h1>
                            <h1>{userData.penduduk.pendidikan_terakhir}</h1>
                        </div>
                        <div className="w-full flex flex-col border-b">
                            <h1 className="font-bold">Status Pernikahan:</h1>
                            <h1>{userData.penduduk.stt_nikah}</h1>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <button
                    onClick={() => setToogleDetail(!toogleDetail)}
                    className="bg-[#ff4344] flex justify-center items-center w-full py-2 text-white rounded-xl"
                >
                    {toogleDetail == false ? "Lihat Detail" : "Lihat Sedikit"}
                </button>
            </div>
        </div>
    );
}

export default ProfilDesc;
