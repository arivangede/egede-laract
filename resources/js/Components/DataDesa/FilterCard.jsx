function FilterCard() {
    return (
        <div className="flex flex-col p-4 gap-3 bg-slate-50 shadow-lg rounded-xl w-full items-center">
            <h1 className="font-black tracking-wider text-slate-700 text-xl">
                Filter
            </h1>

            <div className="w-full flex items-center gap-4 ">
                <select className="select select-ghost text-slate-700">
                    <option value={""}>Pilih Desa</option>
                    <option value={"Dauh Puri Kaja"}>Dauh Puri Kaja</option>
                    <option value={"Dauh Puri"}>Dauh Puri</option>
                </select>
                <select className="select select-ghost text-slate-700">
                    <option value={""}>Pilih Kategori</option>
                    <option value={"Kategori 1"}>Kategori 1</option>
                    <option value={"Kategori 2"}>Kategori 2</option>
                </select>
            </div>
        </div>
    );
}

export default FilterCard;
