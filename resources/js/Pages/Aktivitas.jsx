import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import gambar from "@/assets/svg/gambar.svg";
import Disimpan from "@/Components/Aktivitas/Disimpan/Disimpan";

const Aktivitas = (props) => {
    const lastOpened = JSON.parse(localStorage.getItem("lastOpened"));
    const [selectedPage, setSelectedPage] = useState(lastOpened || "laporan");

    useEffect(() => {
        window.localStorage.setItem("lastOpened", JSON.stringify(selectedPage));
    }, [selectedPage]);

    console.log(props);
    return (
        <>
            <Navbar active={"Aktivitas"} />
            <Head title="Aktivitas" />
            <div className="bg-slate-50 min-h-screen pt-4">
                <div className="entrance min-h-screen h-full flex flex-col items-center ">
                    <h1 className="text-[#ff4344] font-black text-4xl w-full pt-16 px-4">
                        Aktivitas
                    </h1>
                    <div className="flex items-center py-4 px-4 gap-8 w-full">
                        <button
                            onClick={() => setSelectedPage("laporan")}
                            className={`${
                                selectedPage == "laporan"
                                    ? "text-slate-700 -translate-y-2"
                                    : "text-slate-500"
                            } transition duration-200 flex flex-col justify-center items-center gap-1`}
                        >
                            <h2 className=" font-bold">Laporan Saya</h2>
                            <div
                                className={`${
                                    selectedPage == "laporan" ? "" : "scale-0 "
                                } origin-right transition duration-500 block w-full h-1 rounded-t-xl bg-[#ff4344]`}
                            ></div>
                        </button>
                        <button
                            onClick={() => setSelectedPage("disimpan")}
                            className={`${
                                selectedPage == "disimpan"
                                    ? "text-slate-700 -translate-y-2"
                                    : "text-slate-500"
                            } transition duration-200 flex flex-col justify-center items-center gap-1`}
                        >
                            <h2 className=" font-bold">Disimpan</h2>
                            <div
                                className={`${
                                    selectedPage == "disimpan" ? "" : "scale-0"
                                } origin-left transition duration-500 block w-full h-1 rounded-t-xl bg-[#ff4344]`}
                            ></div>
                        </button>
                    </div>

                    {selectedPage == "laporan" ? (
                        <div
                            className={`origin-bottom transition duration-300 w-full h-full entrance`}
                        >
                            <div
                                className={`${
                                    selectedPage != "laporan" ? "hidden" : ""
                                }`}
                            >
                                <img
                                    src={gambar}
                                    alt="gambar"
                                    className="w-full"
                                />
                                <div className="w-full flex flex-col items-center justify-center gap-2 px-6 py-2">
                                    <h1 className="text-2xl text-center text-slate-500 font-bold">
                                        Kamu belum pernah membuat laporan
                                    </h1>
                                    <span className="text-base text-center text-slate-700 font-bold">
                                        Yuk perhatikan sekitar desa kamu dan
                                        laporkan di fitur Pengaduan!
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : selectedPage == "disimpan" ? (
                        <Disimpan data={props.bookmarkList} />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default Aktivitas;
