import FilterBtn from "@/Components/DataDesa/AnalisaData/FilterBtn";
import FilterMenu from "@/Components/DataDesa/AnalisaDataLite/FilterMenu";
import HasilPencarianCard from "@/Components/DataDesa/AnalisaDataLite/HasilPencarianCard";
import SelectedFilter from "@/Components/DataDesa/AnalisaDataLite/SelectedFilter";
import SummaryCard from "@/Components/DataDesa/AnalisaDataLite/SummaryCard";
import BackBtn from "@/assets/svg/BackBtn";
import { Link, router } from "@inertiajs/react";
import { useEffect } from "react";
import { useState } from "react";

function AnalisaDataLite(props) {
    const [popUpFilter, setPopUpFilter] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const percentage = (
        (props.countResult / props.jumlahPenduduk) *
        100
    ).toFixed(1);

    const opt = props.opt;

    const [filterData, setFilterData] = useState({
        dusun: "",
        jk: "",
        pekerjaan: "",
        sukuBangsa: "",
        statusPernikahan: "",
        agama: "",
        wargaNegara: "",
        pendidikan: "",
        umur: "",
        tanggal: "",
    });

    const isFilterApplied =
        filterData.agama ||
        filterData.dusun ||
        filterData.jk ||
        filterData.pekerjaan ||
        filterData.pendidikan ||
        filterData.statusPernikahan ||
        filterData.sukuBangsa ||
        filterData.tanggal ||
        filterData.umur ||
        filterData.wargaNegara;

    const FilterButton = () => {
        setPopUpFilter(!popUpFilter);
    };

    const applyFilter = () => {
        const data = {
            dusun: filterData.dusun,
            jk: filterData.jk,
            agama: filterData.agama,
            pekerjaan: filterData.pekerjaan,
            pendidikan: filterData.pendidikan,
            status: filterData.statusPernikahan,
            sukuBangsa: filterData.sukuBangsa,
            tanggal: filterData.tanggal,
            umur: filterData.umur,
            wargaNegara: filterData.wargaNegara,
        };
        router.post("/data-desa/analisa-data-admindesa", data);
        setIsUpdate(true);
        setPopUpFilter(false);
    };

    const namaDusun = (desaid) => {
        const dusun = props.opt.dusun.find((dusun) => dusun.id == desaid);
        return dusun ? dusun.nama_dusun : "dusun not found";
    };

    const closeFilter = (filterKey) => {
        const updateFilterData = { ...filterData };
        filterKey.forEach((key) => {
            updateFilterData[key] = "";
        });
        setIsUpdate(false);
        setFilterData(updateFilterData);
    };

    useEffect(() => {
        if (isFilterApplied) applyFilter(filterData);
    }, [isUpdate]);

    console.log(props);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="entrance flex flex-col pt-12 pb-8 px-4 gap-4 relative">
                <div className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center">
                        <div className="w-9">
                            <Link href="/data-desa">
                                <BackBtn color={"#334155"} />
                            </Link>
                        </div>
                        <h1 className="font-extrabold text-xl">Analisa Data</h1>
                    </div>
                    <FilterBtn click={FilterButton} state={popUpFilter} />
                </div>
                <FilterMenu
                    state={popUpFilter}
                    filterData={filterData}
                    setFilterData={setFilterData}
                    opt={opt}
                    apply={applyFilter}
                />
                <SummaryCard
                    namaDesa={props.namaDesa.nama_desa}
                    jumlahPenduduk={props.jumlahPenduduk}
                />
                <div className="w-full flex flex-col items-center text-slate-600 gap-2">
                    <span className="w-full text-sm">
                        Filter yang digunakan:
                    </span>
                    <div className="w-full flex flex-col items-center bg-white rounded-2xl shadow border border-slate-200">
                        <SelectedFilter
                            filterData={filterData}
                            namaDusun={namaDusun}
                            closeFilter={closeFilter}
                            isFilterApplied={isFilterApplied}
                        />

                        <p className="text-justify text-xs text-slate-400 p-6">
                            Dibawah merupakan hasil pencarian Anda terhadap
                            filter yang sudah diterapkan. Anda dapat mengurangi
                            filter yang diterapkan dengan menekan tombol{" "}
                            <span className="text-red-500">x</span> pada list
                            filter diatas
                        </p>

                        <div className="w-full px-8 pb-6">
                            <HasilPencarianCard
                                jumlah={props.countResult}
                                persentase={percentage}
                                filterState={isFilterApplied}
                                isUpdated={isUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalisaDataLite;
