import CardBerita from "@/Components/Enews/CardBerita";
import CarouselPengumuman from "@/Components/Enews/CarouselPengumuman";
import Carousel from "@/Components/Homepage/Carousel";
import Header from "@/Components/Homepage/Header";
import Menu from "@/Components/Homepage/Menu";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    console.log("properti:", props);
    return (
        <>
            <Head title="Homepage" />
            <Navbar active={"Homepage"} />
            <div className="bg-slate-50 min-h-screen">
                <div className="entrance flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <Header data={props.auth.user} flash={props.flash} />
                        <Carousel datadesa={props.auth.user.desa} />
                        <Menu />
                        <div className="h-full w-full flex flex-col gap-4 pt-4">
                            <h1 className="font-bold text-slate-600 w-full px-4">
                                Pengumuman Terbaru
                            </h1>

                            <CarouselPengumuman pengumuman={props.pengumuman} />
                        </div>
                        <div className="h-full w-full flex flex-col gap-4 p-4 pb-20">
                            <h1 className="font-bold text-slate-600 w-full">
                                Berita Terbaru
                            </h1>
                            <CardBerita berita={props.berita} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
