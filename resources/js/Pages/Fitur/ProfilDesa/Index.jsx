import CardMenu from "@/Components/ProfilDesa/CardMenu";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import wilayahdesa from "@/assets/icon/profil-desa/wilayah-desa.svg";
import sejarahdesa from "@/assets/icon/profil-desa/sejarah-desa.svg";
import visimisi from "@/assets/icon/profil-desa/visi-misi.svg";
import struktur from "@/assets/icon/profil-desa/struktur-pemerintahan.svg";
import lk from "@/assets/icon/profil-desa/lembaga-kemasyarakatan.svg";
import React from "react";

function Index(props) {
    console.log(props);
    return (
        <div className="w-full min-h-screen bg-red-500 flex flex-col justify-between">
            <div className="w-full flex items-center text-white pt-12 pb-8 px-4">
                <Link href="/" className="w-8 h-8">
                    <BackBtn color={"#fff"} />
                </Link>
                <h1 className="font-extrabold text-lg">Profil Desa</h1>
            </div>
            <div className="min-h-[85vh] bg-slate-50 flex flex-col rounded-t-3xl py-8 px-4 pb-10 gap-4">
                <CardMenu
                    title={"Wilayah Desa"}
                    img={wilayahdesa}
                    href={"/profil-desa/wilayah-desa"}
                />
                <CardMenu
                    title={"Sejarah Desa"}
                    img={sejarahdesa}
                    href={"/profil-desa/sejarah-desa"}
                />
                <CardMenu
                    title={"Visi & Misi"}
                    img={visimisi}
                    href={"/profil-desa/visi-misi"}
                />
                <CardMenu
                    title={"Struktur Pemerintahan"}
                    img={struktur}
                    href={"/profil-desa/struktur-pemerintahan"}
                />
                <CardMenu
                    title={"Lembaga Kemasyarakatan"}
                    img={lk}
                    href={"/profil-desa/lpm"}
                />
            </div>
        </div>
    );
}

export default Index;
