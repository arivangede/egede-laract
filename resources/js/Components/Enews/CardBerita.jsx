import { Link } from "@inertiajs/react";

function CardBerita({ berita }) {
    console.log(berita);
    return (
        <>
            {berita.map((item, i) => (
                <div
                    key={i}
                    className="w-full h-40 bg-slate-50 shadow-lg rounded-xl border-slate-100 flex justify-around items-center gap-2"
                >
                    <div className="h-full w-[40%] border rounded-xl overflow-hidden">
                        <img
                            src={item["image"]}
                            alt="image"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-[60%] p-2">
                        <div>
                            <h1 className="font-bold text-xl line-clamp-1 px-2">
                                {item["title"]}
                            </h1>
                            <span className="text-xs text-slate-400 px-2">
                                {item["date"]}
                            </span>
                            <p className="text-sm line-clamp-3 px-2 text-slate-500">
                                {item["content"]}
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span className="badge border-red-300 bg-transparent text-slate-500 text-xs">
                                {item["author"]}
                            </span>
                            <Link
                                href={"/e-news/" + berita[i]["title"]}
                                className="border rounded-md bg-red-500 px-4 py-1 text-sm text-white"
                            >
                                Lihat
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardBerita;
