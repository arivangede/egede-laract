import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import wilayahdesa from "@/assets/img/profildesa/wilayahdesa/dauhpurikaja.jpeg";

import React from "react";

function WilayahDesa() {
    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center">
            <div className="w-full flex items-center text-white py-8 px-4 bg-red-500">
                <Link href="/profil-desa" className="w-8 h-8">
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-bold text-lg">Wilayah Desa</h1>
            </div>
            <div className="entrance w-full flex flex-col item-center">
                <img src={wilayahdesa} alt="img" />
                <div className="px-4 py-8 w-full">
                    <p className="indent-4 text-justify">
                        Desa Dauh Puri Kaja yang berada wilayah Kota Denpasar,
                        Kecamatan Denpasar Utara dengan batas-batas wilayah
                        sebagai berikut :
                    </p>
                    <ul className="list-decimal px-4 py-4">
                        <li>Di sebelah Utara Kelurahan Peguyangan</li>
                        <li>
                            Di sebelah Timur Desa Dangin Puri Kaja dan Desa
                            Dangin Puri Kauh
                        </li>
                        <li>Di sebelah Selatan Dauh Puri Kangin</li>
                        <li>
                            Di sebelah Barat Desa Pemecutan Kaja dan Kelurahan
                            Ubung.
                        </li>
                    </ul>
                    <p className="indent-4 text-justify">
                        Desa Dauh Puri Kaja mempunyai luas 120 Hektar, Koordinat
                        Bujur : 115.18185, Koordinat Lintang : -8.633342,
                        ketinggian diatas permukaan Laut : 60 Mdpl dan terdiri
                        dari 7 Dusun dengan Luas masing-masing :
                    </p>
                    <table className="border-separate border-spacing-2 border bg-slate-800 text-white rounded-xl my-8">
                        <thead>
                            <tr>
                                <th className="border border-slate-600">No.</th>
                                <th className="border border-slate-600">
                                    Dusun
                                </th>
                                <th className="border border-slate-600">
                                    Luas(Ha)
                                </th>
                                <th className="border border-slate-600">
                                    Garis Keliling (Km)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    1
                                </td>
                                <td className="border border-slate-700 text-center">
                                    LELANGON
                                </td>
                                <td className="border border-slate-700 text-center">
                                    9,55
                                </td>
                                <td className="border border-slate-700 text-center">
                                    1,32
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    2
                                </td>
                                <td className="border border-slate-700 text-center">
                                    WANGAYA KLOD
                                </td>
                                <td className="border border-slate-700 text-center">
                                    9,97
                                </td>
                                <td className="border border-slate-700 text-center">
                                    1,38
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    3
                                </td>
                                <td className="border border-slate-700 text-center">
                                    WANGAYA KAJA
                                </td>
                                <td className="border border-slate-700 text-center">
                                    17,4
                                </td>
                                <td className="border border-slate-700 text-center">
                                    2,15
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    4
                                </td>
                                <td className="border border-slate-700 text-center">
                                    WANASARI
                                </td>
                                <td className="border border-slate-700 text-center">
                                    12,62
                                </td>
                                <td className="border border-slate-700 text-center">
                                    1,73
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    5
                                </td>
                                <td className="border border-slate-700 text-center">
                                    LUMINTANG
                                </td>
                                <td className="border border-slate-700 text-center">
                                    23,36
                                </td>
                                <td className="border border-slate-700 text-center">
                                    2,45
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    6
                                </td>
                                <td className="border border-slate-700 text-center">
                                    MEKARSARI
                                </td>
                                <td className="border border-slate-700 text-center">
                                    28,6
                                </td>
                                <td className="border border-slate-700 text-center">
                                    2,75
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 text-center">
                                    7
                                </td>
                                <td className="border border-slate-700 text-center">
                                    TERUNASARI
                                </td>
                                <td className="border border-slate-700 text-center">
                                    18,5
                                </td>
                                <td className="border border-slate-700 text-center">
                                    2
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WilayahDesa;
