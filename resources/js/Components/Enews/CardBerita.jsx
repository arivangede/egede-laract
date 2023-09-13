function CardBerita() {
    return (
        <div className="w-full h-40 p-2 bg-white shadow-lg rounded-xl border-slate-100 flex justify-around items-center gap-2">
            <div className="h-full w-[40%] border rounded-xl overflow-hidden">
                <img
                    src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/09/16032324/image002-12.png"
                    alt="image"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col justify-center w-[60%]">
                <div>
                    <h1 className="font-bold text-xl line-clamp-1 px-2">
                        Title
                    </h1>
                    <span className="text-xs text-slate-400 px-2">date</span>
                    <p className="text-sm line-clamp-3 px-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem ad inventore labore dolorum, quod at commodi
                        cupiditate similique officiis consectetur.
                    </p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <span className="badge border-red-500 text-slate-500">
                        admin desa
                    </span>
                    <button className="border rounded-lg bg-red-500 px-4 py-1 text-sm text-white">
                        Lihat
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardBerita;
