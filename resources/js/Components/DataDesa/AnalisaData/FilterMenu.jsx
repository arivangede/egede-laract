function FilterMenu({
    popup,
    dusunOptions,
    jkOptions,
    pekerjaanOptions,
    sukuOptions,
    usiaOptions,
    sttNikahOptions,
    agamaOptions,
    kewarganegaraanOptions,
    pendidikanOptions,
    lastDusun,
    lastJk,
    lastPekerjaan,
    lastSuku,
    lastUsia,
    lastSttNikah,
    lastAgama,
    lastKewarganegaraan,
    lastPendidikan,
    setDusun,
    setJk,
    setPekerjaan,
    setSuku,
    setUsia,
    setSttNikah,
    setAgama,
    setKewarganegaraan,
    setPendidikan,
    umur,
    tanggal,
    setUmur,
    setTanggal,
    apply,
}) {
    const handleClear = (e) => {
        e.preventDefault();
        setUmur("");
        setTanggal("");
    };

    return (
        <div
            className={`${
                popup == true ? "scale-100" : "absolute -z-20"
            }  scale-0 transition duration-200 origin-top-right w-full p-4 gap-4 flex-col items-center justify-between bg-white rounded-xl shadow text-xs`}
        >
            <div
                className={`${
                    popup == true ? "" : "hidden"
                } flex flex-wrap w-full justify-around gap-2`}
            >
                <div className="flex flex-col w-full">
                    <label htmlFor="dusun" className="text-slate-500 text-xs">
                        Dusun :
                    </label>
                    <select
                        name="dusun"
                        id="dusun"
                        className="rounded border-slate-300 w-full"
                        value={lastDusun}
                        onChange={(e) => setDusun(e.target.value)}
                    >
                        <option value={""}>pilih</option>;
                        {dusunOptions.map((dusun, i) => (
                            <option key={i} value={dusun.id}>
                                {dusun.nama_dusun}
                            </option>
                        ))}
                        <option value={"wherenull"}>
                            Belum Ada Data Dusun
                        </option>
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="jenis_kelamin"
                        className="text-slate-500 text-xs w-full"
                    >
                        Jenis Kelamin :
                    </label>
                    <select
                        name="jenis_kelamin"
                        id="jenis_kelamin"
                        className="rounded border-slate-300 w-full"
                        value={lastJk}
                        onChange={(e) => setJk(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {jkOptions.map((jk, i) => (
                            <option key={i} value={jk}>
                                {jk}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="pekerjaan"
                        className="text-slate-500 text-xs w-full"
                    >
                        Pekerjaan :
                    </label>
                    <select
                        name="pekerjaan"
                        id="pekerjaan"
                        className="rounded border-slate-300 w-full"
                        value={lastPekerjaan}
                        onChange={(e) => setPekerjaan(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {pekerjaanOptions.map((pekerjaan, i) => (
                            <option key={i} value={pekerjaan}>
                                {pekerjaan}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="suku_bangsa"
                        className="text-slate-500 text-xs w-full"
                    >
                        Suku Bangsa :
                    </label>
                    <select
                        name="suku_bangsa"
                        id="suku_bangsa"
                        className="rounded border-slate-300 w-full"
                        value={lastSuku}
                        onChange={(e) => setSuku(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {sukuOptions.map((suku, i) => (
                            <option key={i} value={suku}>
                                {suku}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="stt_nikah"
                        className="text-slate-500 text-xs w-full"
                    >
                        Status Pernikahan :
                    </label>
                    <select
                        name="stt_nikah"
                        id="stt_nikah"
                        className="rounded border-slate-300 w-full"
                        value={lastSttNikah}
                        onChange={(e) => setSttNikah(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {sttNikahOptions.map((nikah, i) => (
                            <option key={i} value={nikah}>
                                {nikah}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="agama"
                        className="text-slate-500 text-xs w-full"
                    >
                        Agama :
                    </label>
                    <select
                        name="agama"
                        id="agama"
                        className="rounded border-slate-300 w-full"
                        value={lastAgama}
                        onChange={(e) => setAgama(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {agamaOptions.map((agama, i) => (
                            <option key={i} value={agama}>
                                {agama}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="kewarganegaraan"
                        className="text-slate-500 text-xs w-full"
                    >
                        Warga Negara :
                    </label>
                    <select
                        name="kewarganegaraan"
                        id="kewarganegaraan"
                        className="rounded border-slate-300 w-full"
                        value={lastKewarganegaraan}
                        onChange={(e) => setKewarganegaraan(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {kewarganegaraanOptions.map((WN, i) => (
                            <option key={i} value={WN}>
                                {WN}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label
                        htmlFor="pendidikan"
                        className="text-slate-500 text-xs w-full"
                    >
                        Pendidikan Terakhir :
                    </label>
                    <select
                        name="pendidikan"
                        id="pendidikan"
                        className="rounded border-slate-300 w-full"
                        value={lastPendidikan}
                        onChange={(e) => setPendidikan(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {pendidikanOptions.map((pendidikan, i) => (
                            <option key={i} value={pendidikan}>
                                {pendidikan}
                            </option>
                        ))}
                    </select>
                </div>
                <form
                    className={`${
                        popup == true ? "scale-100" : "absolute -z-20"
                    } scale-0 w-full shadow rounded-xl p-4 transition duration-200 origin-top border`}
                >
                    <div
                        className={`${
                            popup == true ? "" : "hidden"
                        } flex justify-center items-center gap-4 flex-wrap`}
                    >
                        <h1 className="text-slate-600">Prediksi Usia</h1>
                        <div
                            className={`flex justify-center items-center w-full gap-4 text-slate-700`}
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
                        </div>
                    </div>
                </form>
            </div>
            <div
                className={`${
                    popup == true ? "" : "hidden"
                } pt-4 w-full flex justify-end`}
            >
                <button
                    onClick={apply}
                    className="py-1 px-4 bg-slate-600 text-white font-bold rounded-lg"
                >
                    apply
                </button>
            </div>
        </div>
    );
}

export default FilterMenu;
