import CardBerita from "@/Components/Enews/CardBerita";
import CarouselBerita from "@/Components/Enews/CarouselBerita";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";

function Enews(props) {
    console.log(props);
    return (
        <>
            <Head title="E-News" />
            <div className="entrance min-h-screen bg-slate-50 flex flex-col items-center ">
                <div className="w-full flex gap-4 items-center py-4 px-4">
                    <div className="h-8 w-8">
                        <Link href="/">
                            <BackBtn color={"#1e293b"} />
                        </Link>
                    </div>

                    <h1 className="text-slate-800">Berita Terbaru</h1>
                </div>
                <div className="h-full w-full py-4">
                    <CarouselBerita berita={props.carousel} />
                </div>
                <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-4">
                    <h1 className="font-bold text-slate-800 w-full">
                        Berita Lainnya
                    </h1>
                    <CardBerita berita={props.card} />
                </div>
            </div>
        </>
    );
}

export default Enews;
