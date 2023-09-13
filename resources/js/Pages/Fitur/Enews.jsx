import CardBerita from "@/Components/Enews/CardBerita";
import CarouselBerita from "@/Components/Enews/CarouselBerita";
import BackBtn from "@/Components/Homepage/svg/BackBtn";
import { Head } from "@inertiajs/react";

function Enews(props) {
    return (
        <>
            <Head title="E-News" />
            <div className="entrance min-h-screen bg-slate-100 flex flex-col items-center ">
                <div className="w-full flex gap-4 items-center py-4 px-4">
                    <div className="h-8 w-8">
                        <BackBtn color={"#1e293b"} />
                    </div>

                    <h1 className="text-slate-800">Berita Terbaru</h1>
                </div>
                <div className="h-full w-full py-4">
                    <CarouselBerita />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-4">
                    <h1 className="font-bold text-slate-800 w-full">
                        Berita Lainnya
                    </h1>
                    <CardBerita berita={props.berita} />
                </div>
            </div>
        </>
    );
}

export default Enews;
