import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import visi from "@/assets/img/profildesa/wilayahdesa/visi.svg";
import misi from "@/assets/img/profildesa/wilayahdesa/misi.svg";

import React, { useState } from "react";

function VisiMisi() {
    const [state, setState] = useState("visi");
    return (
        <div className="w-full min-h-screen bg-red-500 flex flex-col justify-between items-center">
            <div className="w-full flex items-center text-white py-8 px-4">
                <Link href="/profil-desa" className="w-8 h-8">
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-bold text-lg">Visi & Misi</h1>
            </div>
            <div className="w-full bg-slate-50 rounded-t-3xl min-h-[85vh] flex flex-col items-center">
                {state == "visi" ? (
                    <Visi />
                ) : state == "misi" ? (
                    <Misi />
                ) : (
                    setState("visi")
                )}
            </div>
            <div className="w-full flex justify-center items-center fixed bottom-4 text-slate-600">
                <button
                    onClick={() => setState("visi")}
                    className={`px-8 py-4 border shadow font-bold text-lg rounded-l-xl transition duration-500 ${
                        state == "visi" ? "bg-red-500 text-white" : "bg-white"
                    }`}
                >
                    Visi
                </button>
                <button
                    onClick={() => setState("misi")}
                    className={`px-8 py-4 border shadow font-bold text-lg rounded-r-xl transition duration-500 ${
                        state == "misi" ? "bg-red-500 text-white" : "bg-white"
                    }`}
                >
                    Misi
                </button>
            </div>
        </div>
    );
}

function Visi() {
    return (
        <div className="flex flex-col w-full items-center entrance gap-4 py-8 px-4 pb-28">
            <img src={visi} alt="img" />
            <div className="flex flex-col items-center gap-4 text-slate-600">
                <h1 className="font-bold text-center">
                    “Terwujudnya Kebersamaan Membangun Desa Dauh Puri Kaja Yang
                    Mandiri dan Berbudaya”
                </h1>
                <p className="text-justify indent-4">
                    Rumusan Visi tersebut merupakan suatu ungkapan dari suatu
                    niat yang luhur untuk memperbaiki dalam Penyelenggaraan
                    Pemerintahan dan Pelaksanaan Pembangunan di Desa Dauh Puri
                    Kaja secara gotong royong dalam kelembagaan sehingga 6
                    (enam) tahun ke depan Desa Dauh Puri Kaja mengalami suatu
                    perubahan yang lebih baik dan peningkatan kesejahteraan
                    masyarakat dilihat dari segi ekonomi dengan dilandasi
                    semangat kebersamaan dalam Penyelenggaraan Pemerintahan dan
                    Pelaksanaan Pembangunan.
                </p>
            </div>
        </div>
    );
}

function Misi() {
    return (
        <div className="flex flex-col w-full items-center entrance gap-4 py-8 px-4 pb-28">
            <img src={misi} alt="img" />
            <div className="flex flex-col items-center gap-4 text-slate-600">
                <ul className="list-disc pl-4">
                    <li>
                        Meningkatkan Pelayanan Kepada Masyarakat Dengan Baik Dan
                        Efisien Menuju Kesejahteraan.
                    </li>
                    <li>
                        Mengoptimalkan Tugas, Wewenang Serta Fungsi Struktural
                        Pemerintahan Desa
                    </li>
                    <li>Menata Kembali Administrasi Desa</li>
                    <li>
                        Menjalin Komunikasi Dan Kerjasama Dengan BPD, LPM,
                        Lembaga Adat Dan Seluruh Kepala Dusun Desa Dauh Puri
                        Kaja.
                    </li>
                    <li>
                        Meningkatkan Pemberdayaan Perempuan Melalui Program PKK
                        Desa
                    </li>
                    <li>
                        Mengoptimalkan Kegiatan Pemuda Dan Olah Raga Untuk
                        Berpartisipasi dalam Pembangunan Desa Dauh Puri Kaja.
                    </li>
                    <li>
                        Melestarikan Dan Mengembangkan Nilai – Nilai Budaya Desa
                    </li>
                </ul>

                <h1 className="font-bold">Tujuan</h1>
                <ul className="list-decimal pl-4 flex flex-col gap-4">
                    <div>
                        <li>Misi Meningkatkan pelayanan publik:</li>
                        <ul className="list-disc pl-6">
                            <li>Meningkatkan kualitas kesehatan</li>
                            <li>
                                Meningkatkan perlindungan dan kesejahteraan
                                sosial
                            </li>
                            <li>Meningkatkan kualitas pemuda dan olah raga</li>
                            <li>
                                Meningkatkan peran perempuan dan perlindungan
                                anak
                            </li>
                            <li>Meningkatkan kualitas kelembagaan sosial</li>
                        </ul>
                    </div>
                    <div>
                        <li>
                            Misi membina ketentraman dan ketertiban masyarakat
                            melalui penegakan Supremasi hukum :
                        </li>
                        <ul className="list-disc pl-6">
                            <li>
                                Meningkatnya kesadaran masyarakat tertib hukum
                                dan aturan
                            </li>
                            <li>Menurunnya tingkat kriminalitas</li>
                            <li>Menurunnya masalah sosial yang ada.</li>
                        </ul>
                    </div>
                    <div>
                        <li>
                            Misi Pembinaan kesejahteraan masyarakat dengan
                            system ekonomi Kerakyatan :
                        </li>
                        <ul className="list-disc pl-6">
                            <li>Membangkitkan gairah perekonomian.</li>
                            <li>Meningkatkan peran Koperasi / BUMDes</li>
                            <li>Meningkatkan investasi perdagangan</li>
                        </ul>
                    </div>
                    <div>
                        <li>Misi mewujudkan Pemerintahan yang baik :</li>
                        <ul className="list-disc pl-6">
                            <li>
                                Menciptakan ketatalaksanaan yang bersih,
                                efisien, transparan, professional dan akuntabel
                            </li>
                            <li>Meningkatkan kualitas kearsipan</li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default VisiMisi;
