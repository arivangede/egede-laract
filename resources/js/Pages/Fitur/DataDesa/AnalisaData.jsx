import FilterBtn from "@/Components/DataDesa/AnalisaData/FilterBtn";
import FilterMenu from "@/Components/DataDesa/AnalisaData/FilterMenu";
import Pagination from "@/Components/DataDesa/AnalisaData/Pagination";
import PendudukCard from "@/Components/DataDesa/AnalisaData/PendudukCard";
import SearchBar from "@/Components/DataDesa/AnalisaData/SearchBar";
import StatusCard from "@/Components/DataDesa/AnalisaData/StatusCard";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

function AnalisaData(props) {
    console.log(props);
    const [desaId, setDesaId] = useState(props.auth.user.desa_id);
    const [dusun, setDusun] = useState();
    const [jk, setJk] = useState();
    const [pekerjaan, setPekerjaan] = useState();
    const [suku, setSuku] = useState();
    const [usia, setUsia] = useState();
    const [sttNikah, setSttNikah] = useState();
    const [search, setSearch] = useState("");

    const handleApply = () => {
        router.post("/data-desa/analisa-data", {
            desa: desaId,
            dusun: dusun,
            jenis_kelamin: jk,
            pekerjaan: pekerjaan,
            suku: suku,
            usia: usia,
            stt_nikah: sttNikah,
            search: search,
        });
    };

    const [popUpFilter, setPopUpFilter] = useState(false);
    const FilterButton = () => {
        setPopUpFilter(!popUpFilter);
    };

    useEffect(() => {
        router.post(`/data-desa/analisa-data`, { desa: desaId });
    }, [desaId]);

    return (
        <>
            <Head title="Analisa Data" />
            <div className="entrance flex flex-col bg-slate-50 min-h-screen py-8 px-4 gap-4 relative">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-9">
                            <Link href="/data-desa">
                                <BackBtn color={"#334155"} />
                            </Link>
                        </div>
                        <h1 className="font-extrabold text-xl">Analisa Data</h1>
                    </div>
                    <FilterBtn click={FilterButton} />
                </div>
                <FilterMenu
                    popup={popUpFilter}
                    desaId={desaId}
                    dusunOptions={props.dusunOptions}
                    jkOptions={props.jkOptions}
                    pekerjaanOptions={props.pekerjaanOptions}
                    sukuOptions={props.sukuOptions}
                    usiaOptions={props.usiaOptions}
                    sttNikahOptions={props.sttNikahOptions}
                    setDusun={setDusun}
                    setJk={setJk}
                    setPekerjaan={setPekerjaan}
                    setSuku={setSuku}
                    setUsia={setUsia}
                    setSttNikah={setSttNikah}
                    apply={handleApply}
                />
                <div
                    className={`transition duration-200 flex flex-col justify-center items-center gap-2`}
                >
                    <StatusCard
                        desa={props.auth.user.desa.nama_desa}
                        jumlahPenduduk={props.jumlahPenduduk}
                        jumlahHasil={props.jumlahHasil}
                    />
                    <div className="flex justify-between w-full gap-2">
                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                            apply={handleApply}
                        />
                        <Pagination />
                    </div>
                </div>
                <div className={`flex flex-col items-center gap-3`}>
                    <PendudukCard data={props.data} />
                </div>
            </div>
        </>
    );
}

export default AnalisaData;
