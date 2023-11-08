import { Link } from "@inertiajs/react";

import logo from "@/assets/icon/logo-egede.png";
import cs from "@/assets/icon/cs.gif";

function Header({ data, flash }) {
    return (
        <>
            <div className="flex justify-between items-center gap-4 p-4 relative w-full">
                <div>
                    <img src={logo} alt="logo" className="h-8" />
                </div>

                {/* <Link href="">
                    <img src={cs} alt="cs" className="h-8" />
                </Link> */}
            </div>
            {flash.message ? (
                <div className="w-full px-4">
                    <div className="alert alert-success flex mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-left">
                            Selamat datang,{" "}
                            <span className="capitalize">
                                {data.penduduk
                                    ? data.penduduk.nama
                                    : data.username}
                                !
                            </span>
                        </p>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default Header;
