import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import struktur from "@/assets/img/profildesa/struktur/STRUKTUR PEMERINTAH TERBARU.png";
import perbekel from "@/assets/img/profildesa/struktur/I Gusti Ketut Sucipta.jpg";
import sekdes from "@/assets/img/profildesa/struktur/Ni Md. Yulia Rusika Dwijayanti, SE..jpg";
import kasipem from "@/assets/img/profildesa/struktur/Made Putra Widiantara, SE..jpg";
import kasipel from "@/assets/img/profildesa/struktur/Made Ariani.jpg";
import kasikesja from "@/assets/img/profildesa/struktur/Abdul Malik.jpg";
import kaurtu from "@/assets/img/profildesa/struktur/Desak Nyoman Suartini, SE.jpg";
import kaurkeu from "@/assets/img/profildesa/struktur/M. Deasy Lanisa Haryani, A. Md.jpg";
import kaurper from "@/assets/img/profildesa/struktur/Ni Putu Yadnya Dewi.jpg";
import kadus1 from "@/assets/img/profildesa/struktur/A. A. Ngurah Manik, SE.jpg";
import kadus2 from "@/assets/img/profildesa/struktur/A. A. Putu Widya Ambara.jpg";
import kadus3 from "@/assets/img/profildesa/struktur/I Made Suwena.jpg";
import kadus4 from "@/assets/img/profildesa/struktur/Ir. H. Badrus Samsi.jpg";
import kadus5 from "@/assets/img/profildesa/struktur/A. A. Ngurah Manik Raditya Putra. S.Sos.jpeg";
import kadus6 from "@/assets/img/profildesa/struktur/A. A. Ngurah Arcana.jpg";
import kadus7 from "@/assets/img/profildesa/struktur/I Gede Agus Mahendra Dinata, ST.jpg";

import strukturbpd from "@/assets/img/profildesa/bpd/Dicompress dengan WA.jpeg";

import ketuabpd from "@/assets/img/profildesa/bpd/Drs. I Ketut Alit Adnyana Yuda.png";
import wakilbpd from "@/assets/img/profildesa/bpd/Drs. Ketut Jayanegara, M.Si..png";
import sekrebpd from "@/assets/img/profildesa/bpd/I Ketut Gede Arjana, S.Pt..png";
import anggota1bpd from "@/assets/img/profildesa/bpd/H. Moh. Farham, SE..jpg";
import anggota2bpd from "@/assets/img/profildesa/bpd/Ir. Wayan Sudarta, MS..png";
import anggota3bpd from "@/assets/img/profildesa/bpd/I Nyoman Sutarma.png";
import anggota4bpd from "@/assets/img/profildesa/bpd/Desak Nyoman Sekarini, SE..png";
import React, { useState } from "react";

function Struktur() {
    const [selected, setSelected] = useState("StrukturPem");
    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center">
            <div className="w-full flex items-center text-white pt-12 pb-8 px-4 bg-red-500">
                <Link href="/profil-desa" className="w-8 h-8">
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-bold text-lg">Struktur Pemerintahan</h1>
            </div>
            <div className="px-4 w-full flex justify-center items-center -mt-6">
                <select
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="bg-white w-full border-none shadow-lg rounded-lg py-4 text-sm focus:border-none focus:ring-0"
                >
                    <option value="StrukturPem">
                        Struktur Pemerintahan Desa
                    </option>
                    <option value="BPD">Badan Permusyawaratan Desa</option>
                </select>
            </div>
            <div className="p-4">
                {selected == "StrukturPem" ? (
                    <StrukturPem />
                ) : selected == "BPD" ? (
                    <StrukturBPD />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

function StrukturPem() {
    return (
        <div className="entrance">
            <img
                onClick={() => document.getElementById("struktur").showModal()}
                src={struktur}
                alt="img"
                className=""
            />
            <div className="flex flex-col items-center w-full">
                <h1 className="text-xl font-bold p-4">Dauh Puri Kaja</h1>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={perbekel}
                        alt="img"
                        onClick={() =>
                            document.getElementById("perbekel").showModal()
                        }
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Gusti Ketut Sucipta, ST</h1>
                        <span>Perbekel Desa</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={sekdes}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            Ni Md Yulia Rusika Dwijayanti, SE
                        </h1>
                        <span>Sekretaris Desa</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kasipem}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Made Putra Widiantara, SE</h1>
                        <span>Kasi Pemerintahan</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kasipel}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Made Ariani</h1>
                        <span>Kasi Pelayanan dan Pemasya</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kasikesja}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Abdul Malik</h1>
                        <span>Kasi Kesejahteraan</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kaurtu}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Desak Nyoman Suartini, SE</h1>
                        <span>Kaur Tata Usaha dan Umum</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kaurkeu}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            M. Deasy Lanisa Haryani, A. Md
                        </h1>
                        <span>Kaur Keuangan</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kaurper}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Ni Putu Yadnya Dewi</h1>
                        <span>Kaur Perencanaan</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus1}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">A.A. Ngurah Manik, S.E.</h1>
                        <span>Kadus Lelangon</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus2}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">A. A. Putu Widya Ambara</h1>
                        <span>Kadus Wangaya Klod</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus3}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">I Made Suwena</h1>
                        <span>Kadus Wangaya Kaja</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus4}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">Ir. H. Badrus Samsi</h1>
                        <span>Kadus Wanasari</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus5}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            A. A. Ngurah Manik Raditya Putra. S.Sos
                        </h1>
                        <span>Kadus Lumintang</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus6}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">A. A. Ngurah Arcana</h1>
                        <span>Kadus Mekarsari</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 h-24 px-4 w-full border">
                    <img
                        src={kadus7}
                        alt="img"
                        className="rounded-full object-cover object-top h-16 w-16"
                    />
                    <div className="flex flex-col gap-2 text-slate-700">
                        <h1 className="font-bold">
                            I Gede Agus Mahendra Dinata
                        </h1>
                        <span>Kadus Terunasari</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StrukturBPD() {
    return (
        <div className="entrance w-full flex flex-col items-center gap-4">
            <div className="w-full">
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

export default Struktur;
