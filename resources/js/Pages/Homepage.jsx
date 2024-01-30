import CardBerita from "@/Components/Enews/CardBerita";
import CarouselPengumuman from "@/Components/Enews/CarouselPengumuman";
import Carousel from "@/Components/Homepage/Carousel";
import Header from "@/Components/Homepage/Header";
import Menu from "@/Components/Homepage/Menu";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    console.log("properti:", props);
    const classUser = props.auth.class.id;
    return (
        <>
            <Head title="Homepage" />
            <Navbar active={"Homepage"} />
            <div className="bg-slate-50 min-h-screen w-full pt-4">
                <div className="entrance flex flex-col items-center w-full p-4">
                    <div className="flex flex-col items-center pb-10 w-full">
                        <Header data={props.auth.user} flash={props.flash} />
                        <Carousel datadesa={props.auth.user.desa} />
                        <Menu classUser={classUser} />
                        {props.pengumuman.length > 0 ? (
                            <div className="h-full w-full flex flex-col gap-4 pt-4">
                                <h1 className="font-bold text-slate-600 w-full px-4">
                                    Pengumuman Terbaru
                                </h1>

                                <CarouselPengumuman
                                    pengumuman={props.pengumuman}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                        {props.berita.length > 0 ? (
                            <div className="h-full w-full flex flex-col gap-4 p-4 pb-20">
                                <h1 className="font-bold text-slate-600 w-full">
                                    Berita Terbaru
                                </h1>
                                <CardBerita berita={props.berita} />
                            </div>
                        ) : (
                            <div className="h-40 flex justify-center items-center">
                                <h1 className="w-full text-center text-slate-600">
                                    Belum Ada Berita
                                </h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
