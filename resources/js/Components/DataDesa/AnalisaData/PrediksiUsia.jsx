function PrediksiUsia({ umur, tanggal, setUmur, setTanggal, popup, apply }) {
    const handleClear = (e) => {
        e.preventDefault();
        setUmur("");
        setTanggal("");
    };

    return (
        <form
            className={`${
                popup == true ? "scale-100" : "absolute -z-20"
            } scale-0 w-full bg-white shadow rounded-xl p-4 transition duration-200 origin-top`}
        >
            <div
                className={`${
                    popup == true ? "" : "hidden"
                } flex justify-end items-center gap-4 flex-wrap`}
            >
                <div
                    className={`flex justify-center items-center w-full gap-4`}
                >
                    <div className="w-full">
                        <label htmlFor="umur">Umur:</label>
                        <input
                            id="umur"
                            type="text"
                            value={umur}
                            onChange={(e) => setUmur(e.target.value)}
                            className="border-slate-300 rounded-xl w-full"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="tanggal">Tanggal:</label>
                        <input
                            id="tanggal"
                            type="date"
                            value={tanggal}
                            onChange={(e) => setTanggal(e.target.value)}
                            className="border-slate-300 rounded-xl w-full"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleClear}
                        className="py-2 px-4 flex justify-center items-center border border-slate-400 bg-white text-slate-600 font-bold rounded-xl"
                    >
                        clear
                    </button>
                    <button
                        onClick={apply}
                        className="py-2 px-4 flex justify-center items-center border border-slate-400 bg-slate-600 text-white font-bold rounded-xl"
                    >
                        apply
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PrediksiUsia;
