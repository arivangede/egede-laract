import { Link, router } from "@inertiajs/react";
import React from "react";
import BackBtn from "@/assets/svg/BackBtn";
import { useState } from "react";
import FilterRegulasi from "@/Components/Regulasi/FilterRegulasi";
import RegulasiCard from "@/Components/Regulasi/RegulasiCard";

function Index(props) {
    console.log(props);
    const [filterData, setFilterData] = useState({
        keyword: "",
        sortir: "Terbaru",
        kategori: "",
        status: "",
        tahun: "",
    });

    const handleApply = () => {
        const data = {
            keyword: filterData.keyword,
            sortir: filterData.sortir,
            kategori: filterData.kategori,
            status: filterData.status,
            tahun: filterData.tahun,
        };
        router.post("/regulasi-desa", data);
        document.getElementById("filter").close();
    };
    console.log(filterData);
    return (
        <div className="bg-slate-50 h-screen">
            <div className="entrance flex flex-col items-center w-full h-full pt-14 text-slate-700">
                <div className="w-full flex px-4 items-center">
                    <Link href="/" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>
                    <h1 className="font-extrabold text-lg">Regulasi</h1>
                </div>

                <FilterRegulasi
                    filterData={filterData}
                    setFilterData={setFilterData}
                    handleApply={handleApply}
                />
                <RegulasiCard data={props.data} />
            </div>
        </div>
    );
}

export default Index;
