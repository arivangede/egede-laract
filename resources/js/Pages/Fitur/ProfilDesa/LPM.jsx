import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import lpm from "@/assets/img/profildesa/lpm/LPM.jpeg";
import kt from "@/assets/img/profildesa/kt/Karang Taruna.jpeg";
import strukturbpd from "@/assets/img/profildesa/bpd/Dicompress dengan WA.jpeg";

import ketuabpd from "@/assets/img/profildesa/bpd/Drs. I Ketut Alit Adnyana Yuda.png";
import wakilbpd from "@/assets/img/profildesa/bpd/Drs. Ketut Jayanegara, M.Si..png";
import sekrebpd from "@/assets/img/profildesa/bpd/I Ketut Gede Arjana, S.Pt..png";
import anggota1bpd from "@/assets/img/profildesa/bpd/H. Moh. Farham, SE..jpg";
import anggota2bpd from "@/assets/img/profildesa/bpd/Ir. Wayan Sudarta, MS..png";
import anggota3bpd from "@/assets/img/profildesa/bpd/I Nyoman Sutarma.png";
import anggota4bpd from "@/assets/img/profildesa/bpd/Desak Nyoman Sekarini, SE..png";

import pelindung from "@/assets/img/profildesa/struktur/I Gusti Ketut Sucipta.jpg";
import profile from "@/assets/img/profildesa/lpm/profile.svg";
import React, { useEffect, useState } from "react";
import ChevronR from "@/assets/svg/ChevronR";

function LPM() {
    const lastOpened = JSON.parse(localStorage.getItem("lastOpenedlk"));
    const [selected, setSelected] = useState(lastOpened || "BPD");

    useEffect(() => {
        window.localStorage.setItem("lastOpenedlk", JSON.stringify(selected));
    }, [selected]);

    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center">
            <div className="w-full flex items-center text-white pt-12 pb-14 px-4 bg-red-500">
                <Link
                    onClick={() =>
                        window.localStorage.removeItem("lastOpenedlk")
                    }
                    href="/profil-desa"
                    className="w-8 h-8"
                >
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-bold text-lg">Lembaga Kemasyarakatan</h1>
            </div>
            <div className="px-4 w-full flex justify-center items-center -mt-6 mb-4">
                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="bg-white w-full border-none shadow-lg rounded-lg py-4 text-sm focus:border-none focus:ring-0"
                >
                    <option value="BPD">Badan Permusyawaratan Desa</option>
                    <option value="LPM">Lembaga Pemberdayaan Masyarakat</option>
                    <option value="KT">Karang Taruna</option>
                </select>
            </div>
            <div className="w-full flex flex-col items-center gap-4 pb-10">
                {selected == "LPM" ? (
                    <StrukturLpm />
                ) : selected == "KT" ? (
                    <StrukturKT />
                ) : selected == "BPD" ? (
                    <StrukturBPD />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

function StrukturLpm() {
    return (
        <div className="entrance w-full flex flex-col items-center gap-4">
            <div className="w-full px-2">
                <img src={lpm} alt="lpm" className="rounded-xl shadow-lg" />
            </div>
            <div className="entrance w-full flex flex-col items-center">
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={pelindung}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Gusti Ketut Sucipta, ST</h1>
                        <span>PELINDUNG</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Ketut Suteja Kumara, ST</h1>
                        <span>PENASEHAT</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Made Suryadharma</h1>
                        <span>KETUA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Muchtar Mukaram</h1>
                        <span>SEKRETARIS</span>
                    </div>
                </div>
            </div>
            <div className="bg-red-500 w-full flex flex-col items-center p-8 text-white gap-4">
                <h1 className="w-full font-bold text-lg">Bidang - Bidang</h1>
                <Link
                    href="/profil-desa/sub/Bidang Agama"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Bidang Agama</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Bidang Keamanan Ketertiban"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Bidang Keamanan Ketertiban</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Bidang Pendidikan dan Sosial Budaya"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Bidang Pendidikan dan Sosial Budaya</h1>

                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Bidang Pembangunan Ekonomi Koperasi & Lingkungan Hidup"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1 className="w-[90%]">
                        Bidang Pembangunan Ekonomi Koperasi & Lingkungan Hidup
                    </h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Bidang Kesejahteraan Keluarga Berencana & Kependudukan"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1 className="w-[90%]">
                        Bidang Kesejahteraan Keluarga Berencana & Kependudukan
                    </h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Bidang Pemuda & Olahraga"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Bidang Pemuda & Olahraga</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
            </div>
        </div>
    );
}

function StrukturKT() {
    return (
        <div className="entrance w-full flex flex-col items-center gap-4">
            <div className="w-full px-2">
                <img src={kt} alt="lpm" className="rounded-xl shadow-lg" />
            </div>
            <div className="entrance w-full flex flex-col items-center">
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={pelindung}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Gusti Ketut Sucipta, ST</h1>
                        <span>PEMBINA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Ketut Suteja Kumara, ST</h1>
                        <span>MAJELIS PERTIMBANGAN</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Made Suryadharma</h1>
                        <span>MAJELIS PERTIMBANGAN</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Ketut Gde Arjana, Spt</h1>
                        <span>MAJELIS PERTIMBANGAN</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Putu Gede Arya Arnawan</h1>
                        <span>KETUA KARANG TARUNA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            A.A.Ngurah Bagus Gandhi Paramawangsa
                        </h1>
                        <span>WAKIL KETUA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Putu Intan Devi</h1>
                        <span>SEKRETARIS</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Putu Intan Devi</h1>
                        <span>SEKRETARIS</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Putu Cinthya Wiryani Pudja
                        </h1>
                        <span>WAKIL SEKRETARIS</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Ni Putu Pande Yunita Sari Dewi
                        </h1>
                        <span>BENDAHARA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={profile}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Ni Made Dyah Permata Setyawati Dewi
                        </h1>
                        <span>WAKIL BENDAHARA</span>
                    </div>
                </div>
            </div>
            <div className="bg-red-500 w-full flex flex-col items-center p-8 text-white gap-4">
                <h1 className="w-full font-bold text-lg">Seksi - Seksi</h1>
                <Link
                    href="/profil-desa/sub/Seksi Pendidikan & Pelatihan"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Seksi Pendidikan & Pelatihan</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Usaha Kesejahteraan Sosial"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Seksi Usaha Kesejahteraan Sosial</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Kelompok Usaha Bersama"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Seksi Kelompok Usaha Bersama</h1>

                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Olahraga & Seni Budaya"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1 className="w-[90%]">Seksi Olahraga & Seni Budaya</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Lingkungan Hidup"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1 className="w-[90%]">Seksi Lingkungan Hidup</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Kerohanian & Pembinaan Mental"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Seksi Kerohanian & Pembinaan Mental</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
                <Link
                    href="/profil-desa/sub/Seksi Humas & Kerjasama Kemitraan"
                    className="w-full bg-white py-2 px-4 text-slate-600 rounded-lg shadow flex justify-between items-center"
                >
                    <h1>Seksi Humas & Kerjasama Kemitraan</h1>
                    <div className="w-8 h-8">
                        <ChevronR />
                    </div>
                </Link>
            </div>
        </div>
    );
}

function StrukturBPD() {
    return (
        <div className="entrance w-full flex flex-col items-center gap-4">
            <div className="w-full px-2">
                <img
                    src={strukturbpd}
                    alt="lpm"
                    className="rounded-xl shadow-lg"
                />
            </div>
            <div className="entrance w-full flex flex-col items-center">
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={ketuabpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Drs. I Ketut Alit Adnyana Yuda
                        </h1>
                        <span>KETUA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={wakilbpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Drs. Ketut Jayanegara, M.Si.
                        </h1>
                        <span>WAKIL KETUA</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={sekrebpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            I Ketut Gede Arjana, S.Pt.
                        </h1>
                        <span>SEKRETARIS</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={anggota1bpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">H. Moh. Farham, SE.</h1>
                        <span>ANGGOTA BPD</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={anggota2bpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Ir. Wayan Sudarta, MS.</h1>
                        <span>ANGGOTA BPD</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={anggota3bpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Nyoman Sutarma</h1>
                        <span>ANGGOTA BPD</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={anggota4bpd}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Desak Nyoman Sekarini, SE.
                        </h1>
                        <span>ANGGOTA BPD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LPM;
