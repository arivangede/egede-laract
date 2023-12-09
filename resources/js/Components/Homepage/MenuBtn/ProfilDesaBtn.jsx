import { Link } from "@inertiajs/react";
import ProfilDesa from "../svg/ProfilDesa";

function ProfilDesaBtn() {
    return (
        <Link
            href="/profil-desa"
            className="w-20 h-20 rounded flex flex-col justify-around items-center"
        >
            <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                <svg
                    width="47"
                    height="50"
                    viewBox="0 0 47 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.4771 1.00152C20.5583 0.346378 21.7983 0 23.0625 0C24.3267 0 25.5667 0.346378 26.648 1.00152L42.7917 10.7862C43.809 11.4026 44.6502 12.2709 45.2341 13.3072C45.818 14.3436 46.1248 15.513 46.125 16.7025V32.4711C46.1248 33.6606 45.818 34.8299 45.2341 35.8663C44.6502 36.9026 43.809 37.7709 42.7917 38.3874L26.648 48.172C25.5667 48.8272 24.3267 49.1735 23.0625 49.1735C21.7983 49.1735 20.5583 48.8272 19.4771 48.172L3.3333 38.3874C2.31598 37.7709 1.47477 36.9026 0.890884 35.8663C0.306999 34.8299 0.000164032 33.6606 3.8147e-06 32.4711V16.7025C0.000164032 15.513 0.306999 14.3436 0.890884 13.3072C1.47477 12.2709 2.31598 11.4026 3.3333 10.7862L19.4771 1.00152Z"
                        fill="#FF4344"
                    />
                    <path
                        d="M9.5 37.5H36.5M9.5 33H36.5M14 33.0002V25.5002M20 33.0002V25.5002M26 33.0002V25.5002M32 33.0002V25.5002M36.5 21L26.189 11.8346C25.0606 10.8316 24.4964 10.3301 23.8598 10.1397C23.2988 9.97191 22.7012 9.97191 22.1402 10.1397C21.5036 10.3301 20.9394 10.8316 19.8111 11.8346L9.5 21H36.5Z"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div>
                <h1 className="text-sm text-slate-400">ProfilDesa</h1>
            </div>
        </Link>
    );
}

export default ProfilDesaBtn;
