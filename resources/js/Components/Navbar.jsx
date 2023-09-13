import { Link } from "@inertiajs/react";

const Navbar = ({ active }) => {
    const isActive = "text-red-500";
    const divActive =
        "absolute top-0 w-full left-0 h-[5px] rounded-b-xl bg-red-500";
    return (
        <ul className="fixed z-40 bottom-0 w-full px-4 flex justify-between items-center shadow-md border-t-2 bg-white text-slate-500">
            <Link
                href="/"
                className={`flex flex-col justify-center items-center h-full w-16 p-3 relative ${
                    active === "Homepage" ? isActive : ""
                }`}
            >
                <div
                    className={`scaling ${
                        active === "Homepage" ? divActive : ""
                    }`}
                ></div>
                <i className="bx bxs-home text-2xl leading-5"></i>
                <span className="text-xs ">Beranda</span>
            </Link>
            <Link
                href="/aktivitas"
                className={`flex flex-col justify-center items-center h-full w-16 p-3 relative ${
                    active === "Aktivitas" ? isActive : ""
                }`}
            >
                <div
                    className={`scaling ${
                        active === "Aktivitas" ? divActive : ""
                    }`}
                ></div>
                <i className="bx  bxs-collection bx-rotate-270 text-2xl leading-5"></i>
                <span className="text-xs ">Aktivitas</span>
            </Link>

            <Link
                href="/notifikasi"
                className={`flex flex-col justify-center items-center h-full w-16 p-3 relative ${
                    active === "Notifikasi" ? isActive : ""
                }`}
            >
                <div
                    className={`scaling ${
                        active === "Notifikasi" ? divActive : ""
                    }`}
                ></div>
                <i className="bx bxs-bell text-2xl leading-5"></i>
                <span className="text-xs ">Notifikasi</span>
            </Link>
            <Link
                href="/profil"
                className={`flex flex-col justify-center items-center h-full w-16 p-3 relative ${
                    active === "Profil" ? isActive : ""
                }`}
            >
                <div
                    className={`scaling ${
                        active === "Profil" ? divActive : ""
                    }`}
                ></div>
                <i className="bx bxs-user-circle text-2xl leading-5 "></i>
                <span className="text-xs">Profil</span>
            </Link>
        </ul>
    );
};

export default Navbar;
