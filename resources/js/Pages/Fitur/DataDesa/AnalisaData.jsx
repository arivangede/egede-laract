import FilterBtn from "@/Components/DataDesa/AnalisaData/FilterBtn";
import FilterMenu from "@/Components/DataDesa/AnalisaData/FilterMenu";
import Pagination from "@/Components/DataDesa/AnalisaData/Pagination";
import PendudukCard from "@/Components/DataDesa/AnalisaData/PendudukCard";
import PrediksiUsia from "@/Components/DataDesa/AnalisaData/PrediksiUsia";
import SearchBar from "@/Components/DataDesa/AnalisaData/SearchBar";
import SpesifikUsia from "@/Components/DataDesa/AnalisaData/SpesifikUsia";
import StatusCard from "@/Components/DataDesa/AnalisaData/StatusCard";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

function AnalisaData(props) {
    console.log(props);

    const [desaId, setDesaId] = useState(props.auth.user.desa_id);

    const [dusun, setDusun] = useState("");
    const [jk, setJk] = useState("");
    const [pekerjaan, setPekerjaan] = useState("");
    const [suku, setSuku] = useState("");
    const [usia, setUsia] = useState("");
    const [sttNikah, setSttNikah] = useState("");
    const [agama, setAgama] = useState("");
    const [kewarganegaraan, setKewarganegaraan] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [search, setSearch] = useState("");
    const [umur, setUmur] = useState("");
    const [tanggal, setTanggal] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 25;
    const totalRows = props.data.length;
    const totalPages = Math.ceil(totalRows / dataPerPage);
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    const dataToDisplay = props.data.slice(startIndex, endIndex);

    const clearLastOpened = () => {
        window.localStorage.removeItem("lastopened");
    };

    const lastState = () => {
        router.post("/data-desa/analisa-data", {
            desa: desaId,
            dusun: dusun,
            jenis_kelamin: jk,
            pekerjaan: pekerjaan,
            suku: suku,
            usia: usia,
            stt_nikah: sttNikah,
            agama: agama,
            kewarganegaraan: kewarganegaraan,
            pendidikan: pendidikan,
            search: search,
            umur: umur,
            tanggal: tanggal,
        });
    };

    useState(() => {
        const data = JSON.parse(localStorage.getItem("lastopened"));
        if (data) {
            setDesaId(data.desaId);
            setDusun(data.dusun_id);
            setJk(data.jk);
            setPekerjaan(data.pekerjaan);
            setSuku(data.suku);
            setUsia(data.usia);
            setSttNikah(data.sttNikah);
            setAgama(data.agama);
            setKewarganegaraan(data.kewarganegaraan);
            setPendidikan(data.pendidikan);
            setSearch(data.search);
            setCurrentPage(data.currentPage);
            setUmur(data.umur);
            setTanggal(data.tanggal);
        }
    }, []);

    const lastHistory = {
        desaId,
        dusun,
        jk,
        pekerjaan,
        suku,
        usia,
        sttNikah,
        agama,
        kewarganegaraan,
        pendidikan,
        search,
        currentPage,
        umur,
        tanggal,
    };

    useEffect(() => {
        window.localStorage.setItem("lastopened", JSON.stringify(lastHistory));
    }, [
        desaId,
        dusun,
        jk,
        pekerjaan,
        suku,
        usia,
        sttNikah,
        agama,
        kewarganegaraan,
        pendidikan,
        search,
        currentPage,
        umur,
        tanggal,
    ]);

    useEffect(() => {
        lastState();
    }, []);

    const handleApply = () => {
        router.post("/data-desa/analisa-data", {
            desa: desaId,
            dusun: dusun,
            jenis_kelamin: jk,
            pekerjaan: pekerjaan,
            suku: suku,
            usia: usia,
            stt_nikah: sttNikah,
            agama: agama,
            kewarganegaraan: kewarganegaraan,
            pendidikan: pendidikan,
            search: search,
            umur: umur,
            tanggal: tanggal,
        });
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const [popUpFilter, setPopUpFilter] = useState(false);
    const FilterButton = () => {
        setPopUpFilter(!popUpFilter);
    };

    return (
        <>
            <Head title="Analisa Data" />
            <div className="entrance flex flex-col bg-slate-50 min-h-screen pt-12 pb-8 px-4 gap-4 relative">
                <div className="w-full flex justify-between items-center gap-4">
                    <div className="flex items-center">
                        <div className="w-9">
                            <Link href="/data-desa" onClick={clearLastOpened}>
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
                    agamaOptions={props.agamaOptions}
                    kewarganegaraanOptions={props.kewarganegaraanOptions}
                    pendidikanOptions={props.pendidikanOptions}
                    lastDusun={dusun}
                    lastJk={jk}
                    lastPekerjaan={pekerjaan}
                    lastSuku={suku}
                    lastUsia={usia}
                    lastSttNikah={sttNikah}
                    lastAgama={agama}
                    lastKewarganegaraan={kewarganegaraan}
                    lastPendidikan={pendidikan}
                    setDusun={setDusun}
                    setJk={setJk}
                    setPekerjaan={setPekerjaan}
                    setSuku={setSuku}
                    setUsia={setUsia}
                    setSttNikah={setSttNikah}
                    setAgama={setAgama}
                    setKewarganegaraan={setKewarganegaraan}
                    setPendidikan={setPendidikan}
                    umur={umur}
                    tanggal={tanggal}
                    setUmur={setUmur}
                    setTanggal={setTanggal}
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
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
                <div className={`flex flex-col items-center gap-3`}>
                    <PendudukCard data={dataToDisplay} />
                </div>
            </div>
        </>
    );
}

export default AnalisaData;
