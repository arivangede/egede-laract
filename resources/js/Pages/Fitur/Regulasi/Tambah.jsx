import React from "react";

function Tambah() {
    return (
        <div className="flex flex-col h-screen w-full bg-slate-50">
            <div className="entrance w-full flex flex-col items-center p-8">
                <h1>Form ADD Regulasi</h1>
                <div className="flex flex-col w-full">
                    <span>Jenis Regulasi:</span>
                    <select name="jenis" id="jenis">
                        <option value="">Pilih</option>
                        <option value="PERDES">PERDES</option>
                        <option value="PERKEL">PERKEL</option>
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <span>Judul Regulasi:</span>
                    <input
                        type="text"
                        name="judul"
                        id="judul"
                        placeholder="ex: PERDES No. 5 TAHUN 2019"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <span>Tahun Terbit:</span>
                    <input
                        type="text"
                        name="tahun"
                        id="tahun"
                        placeholder="2019"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <span>Deskripsi Singkat:</span>
                    <input
                        type="text"
                        name="deskripsi"
                        id="deskripsi"
                        placeholder="ex: Daftar Kewenangan Desa Berdasarkan Hak Asal Usul Dan Hak Kewenangan Lokal Berskala Desa"
                        className="w-full h-full break-words resize-y"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <span>Status:</span>
                    <select name="jenis" id="jenis">
                        <option value="">Pilih</option>
                        <option value="Berlaku">Berlaku</option>
                        <option value="Tidak Berlaku">Tidak Berlaku</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Tambah;
