import eye from "@/assets/svg/eye.svg";
import { Link } from "@inertiajs/react";

const RegulasiCard = ({ judul, tahun, deskripsi, status }) => {
    return (
        <div className="w-full px-4">
            <Link
                href="/regulasi-desa/show/id"
                className="w-full h-40 rounded-xl bg-red-500 text-white text-xs flex flex-col justify-between shadow-lg p-4"
            >
                <div className="flex flex-col">
                    <h1 className="text-xl font-black">
                        {/* judul dan tahun */}
                        PERDES No.5 Tahun 2019
                    </h1>
                    <span className="text-left">
                        {/* deskripsi 2baris */}
                        Daftar Kewenangan Desa Berdasarkan Hak Asal Usul Dan Hak
                        Kewenangan Lokal Berskala Desa
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        {/* status */}
                        <span>status:</span>
                        <h1 className="text-xl font-black">Berlaku</h1>
                    </div>
                    <button className="h-8 w-8 rounded-full">
                        <img src={eye} alt="eye" />
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default RegulasiCard;
