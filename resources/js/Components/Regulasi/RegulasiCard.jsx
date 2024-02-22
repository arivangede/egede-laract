import eye from "@/assets/svg/eye.svg";
import { Link } from "@inertiajs/react";

const RegulasiCard = ({ data }) => {
    return (
        <div className="w-full px-4 flex flex-col items-center gap-4">
            {data.map((item, index) => (
                <Link
                    href={`/regulasi-desa/show/${item.id}`}
                    key={index}
                    className="w-full h-40 rounded-xl bg-red-500 text-white text-xs flex flex-col justify-between shadow-lg p-4"
                >
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black">
                            {/* judul dan tahun */}
                            {item.jenis} No.{item.no_regulasi} Tahun{" "}
                            {item.tahun}
                        </h1>
                        <span className="text-left">
                            {/* deskripsi 2baris */}
                            {item.tentang}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            {/* status */}
                            <span>status:</span>
                            <h1 className="text-xl font-black">
                                {item.status}
                            </h1>
                        </div>
                        <button className="h-8 w-8 rounded-full">
                            <img src={eye} alt="eye" />
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default RegulasiCard;
