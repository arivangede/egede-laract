import { Link } from "@inertiajs/react";
import MenuButton from "./MenuButton";

const Navbar = ({ active }) => {
    console.log(active);

    return (
        <ul className="fixed bottom-0 w-full p-3 flex justify-between items-center shadow-md border-t-2 rounded-t-xl bg-white text-slate-500">
            <Link
                href="/"
                className={`flex flex-col justify-center items-center h-full w-16 ${
                    active === "Homepage" ? "text-red-500" : ""
                }`}
            >
                <i className="bx bxs-home text-2xl leading-5"></i>
                <span className="text-xs ">Beranda</span>
            </Link>
            <Link
                href="/aktivitas"
                className={`flex flex-col justify-center items-center h-full w-16 ${
                    active === "Aktivitas" ? "text-red-500" : ""
                }`}
            >
                <i className="bx  bxs-collection bx-rotate-270 text-2xl leading-5"></i>
                <span className="text-xs ">Aktivitas</span>
            </Link>
            <MenuButton />
            <Link
                href="/notifikasi"
                className={`flex flex-col justify-center items-center h-full w-16 ${
                    active === "Notifikasi" ? "text-red-500" : ""
                }`}
            >
                <i className="bx bxs-bell text-2xl leading-5"></i>
                <span className="text-xs ">Notifikasi</span>
            </Link>
            <Link
                href="/profil"
                className={`flex flex-col justify-center items-center h-full w-16 ${
                    active === "Profil" ? "text-red-500" : ""
                }`}
            >
                <i className="bx bxs-user-circle text-2xl leading-5 "></i>
                <span className="text-xs">Profil</span>
            </Link>
        </ul>
    );
};

export default Navbar;
