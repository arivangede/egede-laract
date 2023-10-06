import ChartDesa from "@/Components/DataDesa/ChartDesa";
import Container from "@/Components/DataDesa/Container";
import FilterCard from "@/Components/DataDesa/FilterCard";
import Header from "@/Components/DataDesa/Header";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

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
            <div className="entrance min-h-screen bg-red-500 relative">
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
                    {props.auth.user.kelas_id == 3 ? (
                        ""
                    ) : (
                        <div className="w-full pt-4 px-8 flex justify-center items-center">
                            <Link
                                href="/data-desa/analisa-data"
                                className="w-full p-4 flex justify-center items-center bg-red-500 rounded-lg shadow"
                            >
                                <h1 className="text-white font-bold">
                                    Analisa Data
                                </h1>
                            </Link>
                        </div>
                    )}

                    {props.jumlahPenduduk ? (
                        <div className="entrance w-full p-4 flex items-center">
                            <div className="stats w-full  shadow">
                                <div className="stat flex justify-center items-center">
                                    <div className="stat-title">
                                        Jumlah Penduduk
                                    </div>
                                    <div className="stat-value">
                                        <Number n={props.jumlahPenduduk} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {!props.dataChart && !props.dataTable ? (
                        <div className=" flex justify-center items-center p-8">
                            <h1 className="text-slate-600 text-center">
                                Pilih Desa dan Kategori untuk memunculkan Chart.
                            </h1>
                        </div>
                    ) : (
                        <>
                            <ChartDesa
                                dataChart={props.dataChart}
                                dataTable={props.dataTable}
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
