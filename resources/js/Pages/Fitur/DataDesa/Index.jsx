import ChartDesa from "@/Components/DataDesa/ChartDesa";
import Container from "@/Components/DataDesa/Container";
import FilterCard from "@/Components/DataDesa/FilterCard";
import Header from "@/Components/DataDesa/Header";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

function Index(props) {
    console.log(props);

    const [selectedDesa, setSelectedDesa] = useState("");
    const [selectedKategori, setSelectedKategori] = useState("");

    const handleDesaChange = (desa) => {
        setSelectedDesa(desa);

        const kategori = selectedKategori;
        const data = { desa: desa, kategori: kategori };
        router.post("/data-desa", data);
    };
    const handleKategoriChange = (kategori) => {
        setSelectedKategori(kategori);

        const desa = selectedDesa;
        const data = { desa: desa, kategori: kategori };
        router.post("/data-desa", data);
    };

    return (
        <>
            <Head title="Data Desa" />
            <div className="min-h-screen bg-red-500 relative">
                <Header titlePage={"Data Desa"} />

                <Container>
                    <div className="w-full -mt-8 flex justify-center items-center">
                        <FilterCard
                            desa={selectedDesa}
                            kategori={selectedKategori}
                            onDesaChange={handleDesaChange}
                            onKategoriChange={handleKategoriChange}
                        />
                    </div>
                    <div className="w-full py-4 px-8 flex justify-center items-center">
                        <Link
                            href="/data-desa/analisa-data"
                            className="w-full p-4 flex justify-center items-center bg-red-500 rounded-lg shadow"
                        >
                            <h1 className="text-white font-bold">
                                Analisa Data
                            </h1>
                        </Link>
                    </div>
                    {!props.dataPenduduk ? (
                        <div className=" flex justify-center items-center p-8">
                            <h1 className="text-slate-600 text-center">
                                Pilih Desa dan Kategori untuk memunculkan Chart.
                            </h1>
                        </div>
                    ) : (
                        <>
                            <ChartDesa
                                dataPenduduk={props.dataPenduduk}
                                kategori={selectedKategori}
                            />
                        </>
                    )}
                </Container>
            </div>
        </>
    );
}

export default Index;
