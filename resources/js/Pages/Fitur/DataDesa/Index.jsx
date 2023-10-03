import ChartDesa from "@/Components/DataDesa/ChartDesa";
import Container from "@/Components/DataDesa/Container";
import FilterCard from "@/Components/DataDesa/FilterCard";
import Header from "@/Components/DataDesa/Header";
import { Head, router } from "@inertiajs/react";
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
                <Header />

                <Container>
                    <div className="w-full -mt-8 flex justify-center items-center">
                        <FilterCard
                            desa={selectedDesa}
                            kategori={selectedKategori}
                            onDesaChange={handleDesaChange}
                            onKategoriChange={handleKategoriChange}
                        />
                    </div>
                    <ChartDesa
                        dataPenduduk={props.dataPenduduk}
                        kategori={selectedKategori}
                    />
                </Container>
            </div>
        </>
    );
}

export default Index;
