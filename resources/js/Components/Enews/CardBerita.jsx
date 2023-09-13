function CardBerita({ berita }) {
    console.log(berita);
    return (
        <>
            {berita.map((item, i) => (
                <div
                    key={i}
                    className="w-full h-40 p-2 bg-slate-50 shadow-lg rounded-xl border-slate-100 flex justify-around items-center gap-2"
                >
                    <div className="h-full w-[40%] border rounded-xl overflow-hidden">
                        <img
                            src={item[4]}
                            alt="image"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-[60%]">
                        <div>
                            <h1 className="font-bold text-xl line-clamp-1 px-2">
                                {item[0]}
                            </h1>
                            <span className="text-xs text-slate-400 px-2">
                                {item[1]}
                            </span>
                            <p className="text-sm line-clamp-3 px-2 text-slate-500">
                                {item[2]}
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span className="badge border-red-300 bg-transparent text-slate-500 text-xs">
                                {item[3]}
                            </span>
                            <button className="border rounded-md bg-red-500 px-4 py-1 text-sm text-white">
                                Lihat
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardBerita;
