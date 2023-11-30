import CardBerita from "@/Components/Enews/CardBerita";
import CardPengumuman from "@/Components/Enews/CardPengumuman";
import CarouselBerita from "@/Components/Enews/CarouselBerita";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

function Enews(props) {
    const lastOpened = JSON.parse(localStorage.getItem("lastOpenedEnews"));
    const [pageState, setPageState] = useState(lastOpened || "berita");
    const [popupState, setPopupState] = useState(false);

    useEffect(() => {
        window.localStorage.setItem(
            "lastOpenedEnews",
            JSON.stringify(pageState)
        );
    }, [pageState]);

    console.log(props);
    return (
        <>
            <Head title="E-News" />
            <div className="min-h-screen bg-slate-50">
                <div className="entrance flex flex-col items-center">
                    {props.auth.user.kelas_id == 2 ? (
                        <>
                            <div className="fixed z-50 bottom-4 right-4 flex flex-col items-end gap-1">
                                <div
                                    className={`${
                                        popupState == true
                                            ? "scale-100"
                                            : "scale-0"
                                    } transition duration-200 origin-bottom-right bg-red-500 text-white rounded-xl border w-full shadow-lg`}
                                >
                                    <div
                                        className={`${
                                            popupState == true ? "" : "hidden"
                                        } flex flex-col items-end p-5 gap-4`}
                                    >
                                        <Link
                                            href="/create-pengumuman"
                                            className="text-bold"
                                        >
                                            Buat Pengumuman
                                        </Link>
                                        <button className="text-bold">
                                            Buat Berita
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setPopupState(!popupState)}
                                    className={`${
                                        popupState == true
                                            ? "rotate-[225deg] bg-red-500"
                                            : "bg-red-400"
                                    } transition duration-500 text-4xl text-white rounded-full w-16 h-16 flex items-center justify-center`}
                                >
                                    +
                                </button>
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                    <div className="w-full flex gap-4 items-center py-4 px-4">
                        <div
                            onClick={() =>
                                window.localStorage.removeItem(
                                    "lastOpenedEnews"
                                )
                            }
                            className="h-8 w-8"
                        >
                            <Link href="/">
                                <BackBtn color={"#1e293b"} />
                            </Link>
                        </div>
                        <h1 className="text-slate-800">E-News</h1>
                    </div>
                    <div className="flex items-center gap-6 w-full px-8">
                        <button
                            onClick={() => setPageState("berita")}
                            className={`${
                                pageState == "berita"
                                    ? "text-slate-700 -translate-y-1"
                                    : "text-slate-500"
                            } transition duration-200 text-lg`}
                        >
                            Berita
                            <div
                                className={`${
                                    pageState == "berita"
                                        ? "scale-100"
                                        : "scale-0"
                                } transition duration-300 block w-full h-1 bg-[#ff4344] origin-right rounded-t-full`}
                            ></div>
                        </button>
                        <button
                            onClick={() => setPageState("pengumuman")}
                            className={`${
                                pageState == "pengumuman"
                                    ? "text-slate-700 -translate-y-1"
                                    : "text-slate-500"
                            } transition duration-200 text-lg`}
                        >
                            Pengumuman
                            <div
                                className={`${
                                    pageState == "pengumuman"
                                        ? "scale-100"
                                        : "scale-0"
                                } transition duration-300 block w-full h-1 bg-[#ff4344] origin-left rounded-t-full`}
                            ></div>
                        </button>
                    </div>
                    {pageState == "berita" ? Berita(props) : Pengumuman(props)}
                </div>
            </div>
        </>
    );
}

function Berita(props) {
    return (
        <div
            className={`entrance h-full w-full py-8 flex flex-col justify-center items-center`}
        >
            <div>
                {props.carousel.length ? (
                    <h1 className="text-slate-800 font-bold px-4">
                        Berita Terbaru
                    </h1>
                ) : (
                    ""
                )}
                <CarouselBerita berita={props.carousel} />
            </div>
            {props.card.length ? (
                <div className="h-full w-full flex flex-col justify-center items-center gap-4 px-4 pb-20">
                    {props.card.length ? (
                        <h1 className="font-bold text-slate-800 w-full">
                            Berita Lainnya
                        </h1>
                    ) : (
                        ""
                    )}
                    {props.card.length ? (
                        <CardBerita berita={props.card} />
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <h1 className="m-auto">Belum Ada Berita Tersedia</h1>
            )}
        </div>
    );
}

function Pengumuman(props) {
    return (
        <>
            <div className="entrance h-full w-full flex flex-col justify-center items-center gap-4 px-4 py-8 pb-20">
                {props.pengumuman.length ? (
                    <h1 className="font-bold text-slate-800 w-full">
                        Pengumuman
                    </h1>
                ) : (
                    <div>
                        <h1 className="text-slate-800 font-bold px-4"></h1>
                    </div>
                )}
                <CardPengumuman pengumuman={props.pengumuman} />
            </div>
        </>
    );
}

export default Enews;
