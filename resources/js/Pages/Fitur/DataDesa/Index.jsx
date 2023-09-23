import BarChart from "@/Components/DataDesa/BarChart";
import Container from "@/Components/DataDesa/Container";
import FilterCard from "@/Components/DataDesa/FilterCard";
import Header from "@/Components/DataDesa/Header";
import { Head } from "@inertiajs/react";

function Index(props) {
    console.log(props);
    return (
        <>
            <Head title="Data Desa" />
            <div className="entrance min-h-screen bg-red-500 relative">
                <Header />
                <Container>
                    <div className="-mt-8 px-4 w-full flex flex-col gap-4 items-center justify-center">
                        <FilterCard />
                    </div>
                    <BarChart />
                </Container>
            </div>
        </>
    );
}

export default Index;
