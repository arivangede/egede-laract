import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

function Disimpan({ data }) {
    const lastFilter = JSON.parse(localStorage.getItem("lastFilter"));
    const [filter, setFilter] = useState(lastFilter || "");

    useEffect(() => {
        window.localStorage.setItem("lastFilter", JSON.stringify(filter));
    }, [filter]);

    useEffect(() => {
        const data = { filter: filter };
        router.post("/aktivitas", data);
    }, [filter]);

    return (
        <>
            <div className="w-full px-4 pb-4 entrance">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-full border-none shadow-lg focus:ring-red-400 focus:border-red-400 bg-red-400 text-white font-bold"
                >
                    <option value="">Semua</option>
                    <option value="berita">Berita</option>
                    <option value="pengumuman">Pengumuman</option>
                </select>
            </div>

            <div className="entrance w-full px-4 pb-20 flex flex-col items-center gap-4">
                {data.length == 0 ? (
                    <div className="m-auto">
                        <h1 className="text-slate-500 font-bold text-center">
                            Kamu Belum Memiliki Data yang Disimpan , Yuk Lihat
                            Fitur E-News atau Pengaduan dan Simpan yang kamu
                            suka!
                        </h1>
                    </div>
                ) : (
                    <Card data={data} />
                )}
            </div>
        </>
    );
}

function Card({ data }) {
    console.log("card :", data);
    return data.map((item, i) => (
        <Link
            key={i}
            href={`/e-news/${item.enews.id}`}
            onClick={() => window.localStorage.setItem("reload", true)}
            className="bg-white w-full h-40 rounded-xl flex shadow overflow-hidden text-slate-600"
        >
            <img
                src={"/storage/" + item.enews.image}
                alt="img-content"
                className="w-[40%] h-[10rem] object-cover object-center"
            />
            <div className="w-[60%] h-full px-2 pr-4 pt-4 pb-2 flex flex-col justify-between">
                <div className="flex flex-col">
                    <h1 className="font-bold text-lg">{item.enews.title}</h1>
                    <span className="font-bold text-sm text-slate-400">
                        {item.enews.created_at}
                    </span>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: item.enews.content,
                        }}
                        className="text-sm line-clamp-3 text-slate-500 text-justify"
                    ></div>
                </div>

                <div className="w-full flex justify-end ">
                    <div
                        className={`badge capitalize px-4 py-3 ${
                            item.enews.category == "pengumuman"
                                ? "bg-indigo-400 text-white"
                                : item.enews.category == "berita"
                                ? "bg-red-400 text-white"
                                : item.enews.category == "pengumuman"
                                ? "bg-yellow-400 text-white"
                                : ""
                        }`}
                    >
                        {item.enews.category}
                    </div>
                </div>
            </div>
        </Link>
    ));
}

export default Disimpan;
