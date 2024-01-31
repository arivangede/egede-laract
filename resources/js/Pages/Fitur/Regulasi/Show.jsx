import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    im10,
    im11,
    im12,
    im13,
    im14,
    im15,
    im16,
    im17,
    im18,
    im19,
    im20,
    im21,
    im22,
    im23,
} from "@/assets/perdes";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { useState } from "react";

const dummyData = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
];

const Show = () => {
    const itemsPerPage = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        fetchData();
    }, [currentPage]);

    return (
        <div className="entrance w-full min-h-screen bg-slate-50">
            <div className="w-full flex px-4 items-center bg-white pb-4 pt-12">
                <Link href="/regulasi-desa" className="w-8 h-8">
                    <BackBtn color={"#1e293b"} />
                </Link>
                <h1 className="font-extrabold text-lg">
                    PERDES No.5 Tahun 2019
                </h1>
            </div>

            <div className="p-4 flex flex-col items-center justify-between gap-4">
                <div className="h-full min-h-[70vh] flex justify-center items-center">
                    {loading ? (
                        <span className="loading loading-dots loading-lg text-error"></span>
                    ) : (
                        currentItems.map((item) => (
                            <img
                                key={item.id}
                                src={item.image}
                                alt={`foto ${item.id}`}
                            />
                        ))
                    )}
                </div>
                <div className="join">
                    <button
                        className="join-item btn"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        «
                    </button>
                    <button className="join-item btn">
                        Page {currentPage} / {totalPages}
                    </button>
                    <button
                        className="join-item btn"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        »
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Show;
