import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import gambar from "@/assets/svg/gambar.svg";

const Aktivitas = (props) => {
    const [selectedPage, setSelectedPage] = useState("laporan");

    return (
        <>
            <Navbar active={"Aktivitas"} />
            <Head title="Aktivitas" />
            <div className="entrance min-h-screen h-full flex flex-col items-center bg-slate-50">
                <h1 className="text-[#ff4344] font-black text-4xl w-full pt-16 px-4">
                    Aktivitas
                </h1>
                <div className="flex items-center py-4 px-4 gap-8 w-full">
                    <button
                        onClick={() => setSelectedPage("laporan")}
                        className={`${
                            selectedPage == "laporan" ? "-translate-y-2" : ""
                        } transition duration-500 flex flex-col justify-center items-center gap-1`}
                    >
                        <h2 className="text-slate-500 font-bold">
                            Laporan Saya
                        </h2>
                        <div
                            className={`${
                                selectedPage == "laporan" ? "" : "scale-0 "
                            } origin-right transition duration-200 block w-full h-1 rounded-t-xl bg-[#ff4344]`}
                        ></div>
                    </button>
                    <button
                        onClick={() => setSelectedPage("disimpan")}
                        className={`${
                            selectedPage == "disimpan" ? "-translate-y-2" : ""
                        } transition duration-500 flex flex-col justify-center items-center gap-1`}
                    >
                        <h2 className="text-slate-500 font-bold">Disimpan</h2>
                        <div
                            className={`${
                                selectedPage == "disimpan" ? "" : "scale-0"
                            } origin-left transition duration-200 block w-full h-1 rounded-t-xl bg-[#ff4344]`}
                        ></div>
                    </button>
                </div>

                <div
                    className={`${
                        selectedPage == "laporan" ? "" : "opacity-0 scale-0"
                    } origin-bottom transition duration-300 w-full h-full`}
                >
                    <div
                        className={`${
                            selectedPage != "laporan" ? "hidden" : ""
                        }`}
                    >
                        <img src={gambar} alt="gambar" className="w-full" />
                        <div className="w-full flex flex-col items-center justify-center gap-2 px-6 py-2">
                            <h1 className="text-2xl text-center text-slate-500 font-bold">
                                Kamu belum pernah membuat laporan
                            </h1>
                            <span className="text-base text-center text-slate-700 font-bold">
                                Yuk perhatikan sekitar desa kamu dan laporkan di
                                fitur Pengaduan!
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className={`${
                        selectedPage == "disimpan" ? "" : "opacity-0 scale-0"
                    } origin-bottom transition duration-300 w-full h-full relative`}
                >
                    <div
                        className={`${
                            selectedPage != "disimpan" ? "hidden" : ""
                        } w-full pb-4 px-6 flex items-center gap-4`}
                    >
                        <button className="py-2 px-4 bg-red-500 shadow text-white rounded-xl">
                            Semua
                        </button>

                        <select
                            name="kategori"
                            id="kategori"
                            className="rounded-xl border-slate-300 bg-transparent"
                        >
                            <option value="">Kategori</option>
                            <option value="e-news">E-News</option>
                            <option value="pengaduan">Pengaduan</option>
                        </select>
                    </div>
                    <div
                        className={`${
                            selectedPage != "disimpan" ? "hidden" : ""
                        }flex justify-center items-center px-6 py-52`}
                    >
                        <h1 className="text-xl text-slate-500 font-bold text-center">
                            Tidak ada konten yang disimpan , Yuk lihat E-News
                            atau Pengaduan dan simpan yang kamu suka!
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aktivitas;
