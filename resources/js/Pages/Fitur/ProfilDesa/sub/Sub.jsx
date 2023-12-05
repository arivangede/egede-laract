import CardSub from "@/Components/ProfilDesa/CardSub";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";

import React from "react";

function Sub({ title }) {
    console.log(title);
    return (
        <div className="bg-slate-50 w-full min-h-screen flex flex-col items-center">
            <div className="w-full flex items-center text-slate-600 py-8 px-4 ">
                <button
                    onClick={() => history.back()}
                    href="/profil-desa/lpm"
                    className="w-8 h-8"
                >
                    <BackBtn color={"#1e293b"} />
                </button>
                <h1 className="font-bold text-lg">{title}</h1>
            </div>
            {title == "Bidang Agama" ? (
                <BidangAgamaList />
            ) : title == "Bidang Keamanan Ketertiban" ? (
                <BidangKeamananKetertibanList />
            ) : title ==
              "Bidang Pembangunan Ekonomi Koperasi & Lingkungan Hidup" ? (
                <BidangPembangunanEkonomiKoperasidanLingkunganHidupList />
            ) : title == "Bidang Pendidikan dan Sosial Budaya" ? (
                <BidangPendidikandanSosialBudayaList />
            ) : title == "Bidang Pemuda & Olahraga" ? (
                <BidangPemudadanOlahragaList />
            ) : title ==
              "Bidang Kesejahteraan Keluarga Berencana & Kependudukan" ? (
                <BidangKesejahteraanKeluargaBerencanadanKependudukanList />
            ) : title == "Seksi Pendidikan & Pelatihan" ? (
                <SeksiPendidikandanPelatihanList />
            ) : title == "Seksi Usaha Kesejahteraan Sosial" ? (
                <SeksiUsahaKesejahteraanSosialList />
            ) : title == "Seksi Kerohanian & Pembinaan Mental" ? (
                <SeksiKerohaniandanPembinaanMentalList />
            ) : title == "Seksi Kelompok Usaha Bersama" ? (
                <SeksiKelompokUsahaBersamaList />
            ) : title == "Seksi Olahraga & Seni Budaya" ? (
                <SeksiOlahragadanSeniBudayaList />
            ) : title == "Seksi Lingkungan Hidup" ? (
                <SeksiLingkunganHidupList />
            ) : title == "Seksi Humas & Kerjasama Kemitraan" ? (
                <SeksiHumasdanKerjasamaKemitraanList />
            ) : (
                ""
            )}
        </div>
    );
}

function BidangAgamaList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Made Budiarta"} posisi={"KOORDINATOR"} />
            <CardSub nama={"Ir. I Gusti Made Rai Gunadi"} posisi={"ANGGOTA"} />
            <CardSub nama={"Muhammad Jamiluddin"} posisi={"ANGGOTA"} />
        </div>
    );
}

function BidangKeamananKetertibanList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Made Pertama"} posisi={"KOORDINATOR"} />
            <CardSub nama={"Nyoman hari Sujarwa, SH"} posisi={"ANGGOTA"} />
            <CardSub nama={"Abdul Ghofur"} posisi={"ANGGOTA"} />
        </div>
    );
}

function BidangPembangunanEkonomiKoperasidanLingkunganHidupList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Ketut Candra, ST"} posisi={"KOORDINATOR"} />
            <CardSub nama={"I Putu Gde Eka Suryatna"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Putu Agus Setiawan, SE"} posisi={"ANGGOTA"} />
        </div>
    );
}

function BidangPendidikandanSosialBudayaList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"Drs. I Gede Simbadi"} posisi={"KOORDINATOR"} />
            <CardSub nama={"A.A. Ngurah Sugiantara"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Made Rai Adnyana, SH"} posisi={"ANGGOTA"} />
            <CardSub nama={"Kadek Indra Kesumajaya, S.Sn"} posisi={"ANGGOTA"} />
        </div>
    );
}

function BidangPemudadanOlahragaList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Made Bagiarta"} posisi={"KOORDINATOR"} />
            <CardSub nama={"I Putu Andre Yuliartha"} posisi={"ANGGOTA"} />
            <CardSub nama={"Wayan Gede Subawa"} posisi={"ANGGOTA"} />
            <CardSub
                nama={"I Gede Putra Mas Yusadara, S.Kom, M.Kom"}
                posisi={"ANGGOTA"}
            />
        </div>
    );
}

function BidangKesejahteraanKeluargaBerencanadanKependudukanList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Wayan Suta, SH"} posisi={"KOORDINATOR"} />
            <CardSub nama={"Muhammad Ilyas"} posisi={"ANGGOTA"} />
            <CardSub nama={"Zania Octavia"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiPendidikandanPelatihanList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub
                nama={"I Gede Satrya Brahmantya Putra"}
                posisi={"ANGGOTA"}
            />
            <CardSub nama={"Ni Putu Eka Damayanti"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Putu Trisna Angga Semara"} posisi={"ANGGOTA"} />
            <CardSub nama={"A.A. Ngurah Agus Prasetya"} posisi={"ANGGOTA"} />
            <CardSub nama={"A.A. Ngurah Gede putra"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiUsahaKesejahteraanSosialList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"Made Yoga Dwipayana"} posisi={"ANGGOTA"} />
            <CardSub nama={"Gita Septiani Putri"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Putu Adi Putrawan"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ni Kadek Dharma Yanthi"} posisi={"ANGGOTA"} />
            <CardSub
                nama={"Putu Gede Rico Maha Putra Atmaja"}
                posisi={"ANGGOTA"}
            />
        </div>
    );
}

function SeksiKerohaniandanPembinaanMentalList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub
                nama={"I Gusti Agung Ayu Evi Indah Sari"}
                posisi={"ANGGOTA"}
            />
            <CardSub nama={"Almalia Safitri"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ni Putu Satwika Irmayani"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ni Made Lia Widiyanti"} posisi={"ANGGOTA"} />
            <CardSub nama={"Herry Ferdiansyah"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiKelompokUsahaBersamaList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Made Arya Weda Adnyana"} posisi={"ANGGOTA"} />
            <CardSub nama={"A.A. Meri Puja Andini"} posisi={"ANGGOTA"} />
            <CardSub nama={"Yogi Ramadan Putranto"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Putu Putra Kesuma Jaya"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ni Putu Eka Deliasari"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiOlahragadanSeniBudayaList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"I Made Subawa"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Made Arya Desakaranata"} posisi={"ANGGOTA"} />
            <CardSub nama={"Agus Irawan"} posisi={"ANGGOTA"} />
            <CardSub nama={"A.A. Dwi Pranata Putra"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ni Komang Ayu Tri Utami"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiLingkunganHidupList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub
                nama={"A.A. Ngurah Angga Widya Putra"}
                posisi={"ANGGOTA"}
            />
            <CardSub nama={"Putu Dian Krinathania"} posisi={"ANGGOTA"} />
            <CardSub nama={"Andika Bagus Febian"} posisi={"ANGGOTA"} />
            <CardSub nama={"I Putu Indra Astra Setiawan"} posisi={"ANGGOTA"} />
            <CardSub nama={"Ida Bagus Rai Yudiantara"} posisi={"ANGGOTA"} />
        </div>
    );
}

function SeksiHumasdanKerjasamaKemitraanList() {
    return (
        <div className="w-full entrance flex flex-col items-center">
            <CardSub nama={"Imam Ferly Hasan"} posisi={"ANGGOTA"} />
            <CardSub
                nama={"Luh Kadek Acintya Parahita, S.P."}
                posisi={"ANGGOTA"}
            />
            <CardSub nama={"Rega Asdianto"} posisi={"ANGGOTA"} />
            <CardSub nama={"Kadek Adi Surya Pradipta"} posisi={"ANGGOTA"} />
            <CardSub nama={"Amirudin"} posisi={"ANGGOTA"} />
        </div>
    );
}

export default Sub;
