import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import React from "react";
import sejarahdesa from "@/assets/img/profildesa/wilayahdesa/sejarahdesa.jpeg";

function SejarahDesa() {
    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center">
            <div className="w-full flex items-center text-white py-8 px-4 bg-red-500">
                <Link href="/profil-desa" className="w-8 h-8">
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-bold text-lg">Sejarah Desa</h1>
            </div>
            <div className="w-full flex flex-col item-center entrance">
                <img
                    src={sejarahdesa}
                    alt="img"
                    className="w-full object-center object-cover"
                />
                <div className="w-full py-8 px-4 flex flex-col items-center text-slate-600 gap-4">
                    <h1 className="font-bold text-lg">
                        Sejarah Desa Dauh Puri Kaja
                    </h1>
                    <p className="w-full text-justify indent-4">
                        Desa Dauh Puri Kaja pada awalnya merupakan salah satu
                        kawasan wilayah yang berada di wilayah Pemerintahan Desa
                        Dauh Puri, Kecamatan Denpasar Barat, Kabupaten Badung.
                    </p>
                    <p className="w-full text-justify indent-4">
                        Dengan ditingkatkannya status Kota Denpasar menjadi Kota
                        Administratif Kota Denpasar dan dengan perkembangan
                        penduduk yang semakin pesat akibat kelahiran, maupun
                        kedatangan warga baru yang kemudian menetap di wilayah
                        Kota Administratif Kota Denpasar, maka Pemerintah
                        memandang perlu untuk mengatur penyelenggaran
                        Pemerintahan secara efektif guna menjamin kelancaran
                        roda Pemerintahan. Terkait dengan hal tersebut maka
                        dilaksanakan persiapan pembentukan Desa-Desa Persiapan
                        sesuai dengan Surat Keputusan Bupati Kepala Daerah
                        Tingkat II Badung tanggal 1 Desember 1979 Nomor
                        167/Pem.15/166/79 tentang Pemekaran/Pembentukan
                        Desa-Desa Persiapan dalam wilayah Kota Administrasi
                        Denpasar salah satunya adalah Desa Dauh Puri Kaja.
                    </p>
                    <p className="w-full text-justify indent-4">
                        Selanjutnya sesuai dengan perkembangan penduduk,
                        mobilitas penduduk dan perkembangan wilayah,
                        perkembangan perekonomian serta untuk lebih
                        mengoptimalkan pelayanan kepada masyarakat didahului
                        dengan Surat Keputusan Gubernur Kepala Daerah I Bali
                        tanggal 1 April 1980 Nomor : 7/PEM/II.a/2.5/1980 tentang
                        Penetapan Pemecahan Desa-Desa Dalam Wilayah Kota
                        Denpasar dan pada tahun 1982 dengan Surat Keputusan
                        Gubernur Kepala Daerah Tingkat I Bali tanggal 1 Juni
                        1982 Nomor 57 Tahun 1982 tentang Penetapan Desa
                        Definitif di Wilayah Kota Administratif Denpasar, dimana
                        salah satunya adalah Desa Dauh Puri Kaja, yang terdiri
                        dari 5 Banjar yaitu :
                    </p>
                    <ul className="list-decimal">
                        <li>Br. Lumintang</li>
                        <li>Br. Wangaya Kaja</li>
                        <li>Br. Wanasari</li>
                        <li>Br. Wangaya Klod</li>
                        <li>Br. Lelangon</li>
                    </ul>
                    <p className="w-full text-justify indent-4">
                        Seiring dengan perkembangan penduduk dan mobilitas
                        penduduk yang sangat tinggi dan perkembangan pemukiman
                        sesuai dengan Surat Keputusan Walikotamadya Kepala
                        Daerah Tingkat II Denpasar tanggal 22 Pebruari 1995
                        Nomor : 66 Tahun 1995 di Desa Dauh Puri Kaja ditetapkan
                        2 (dua) dusun baru yaitu Dusun Mekarsari dan Dusun
                        Terunasari yang sebelumnya secara administrasi
                        kedinasannya berada di bawah Dusun Lumintang, sehingga
                        dengan demikian saat ini Desa Dauh Puri Kaja terdiri
                        dari 7 (tujuh) Dusun yaitu :
                    </p>
                    <ul className="list-decimal">
                        <li>Dusun Lumintang</li>
                        <li>Dusun Wangaya Kaja</li>
                        <li>Dusun Wanasari</li>
                        <li>Dusun Lelangon</li>
                        <li>Dusun Mekarsari</li>
                        <li>Dusun Terunasari</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SejarahDesa;
