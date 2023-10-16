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
    apply,
}) {
    return (
        <div
            className={`${
                popup == true ? "scale-100" : "absolute -z-20"
            }  scale-0 transition duration-200 origin-top-right w-full p-4 gap-4 flex-col items-center justify-between bg-white rounded-xl shadow`}
        >
            <div
                className={`${
                    popup == true ? "" : "hidden"
                } flex flex-wrap w-full justify-around gap-2`}
            >
                <div className="flex flex-col">
                    <label htmlFor="dusun" className="text-slate-500 text-sm">
                        Dusun :
                    </label>
                    <select
                        name="dusun"
                        id="dusun"
                        className="rounded border-slate-300"
                        value={lastDusun}
                        onChange={(e) => setDusun(e.target.value)}
                    >
                        <option value={""}>pilih</option>;
                        {dusunOptions.map((dusun, i) => (
                            <option key={i} value={dusun}>
                                {dusun}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="jenis_kelamin"
                        className="text-slate-500 text-sm"
                    >
                        Jenis Kelamin :
                    </label>
                    <select
                        name="jenis_kelamin"
                        id="jenis_kelamin"
                        className="rounded border-slate-300"
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
                <div className="flex flex-col">
                    <label
                        htmlFor="pekerjaan"
                        className="text-slate-500 text-sm"
                    >
                        Pekerjaan :
                    </label>
                    <select
                        name="pekerjaan"
                        id="pekerjaan"
                        className="rounded border-slate-300"
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
                <div className="flex flex-col">
                    <label
                        htmlFor="suku_bangsa"
                        className="text-slate-500 text-sm"
                    >
                        Suku Bangsa :
                    </label>
                    <select
                        name="suku_bangsa"
                        id="suku_bangsa"
                        className="rounded border-slate-300"
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
                <div className="flex flex-col">
                    <label htmlFor="usia" className="text-slate-500 text-sm">
                        Usia :
                    </label>
                    <select
                        name="usia"
                        id="usia"
                        className="rounded border-slate-300"
                        value={lastUsia}
                        onChange={(e) => setUsia(e.target.value)}
                    >
                        <option value="">pilih</option>
                        {usiaOptions.map((usia, i) => (
                            <option key={i} value={usia}>
                                {usia}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="stt_nikah"
                        className="text-slate-500 text-sm"
                    >
                        Status Pernikahan :
                    </label>
                    <select
                        name="stt_nikah"
                        id="stt_nikah"
                        className="rounded border-slate-300"
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
                    <label htmlFor="agama" className="text-slate-500 text-sm">
                        Agama :
                    </label>
                    <select
                        name="agama"
                        id="agama"
                        className="rounded border-slate-300"
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
                <div className="flex flex-col">
                    <label
                        htmlFor="kewarganegaraan"
                        className="text-slate-500 text-sm"
                    >
                        Warga Negara :
                    </label>
                    <select
                        name="kewarganegaraan"
                        id="kewarganegaraan"
                        className="rounded border-slate-300"
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
                <div className="flex flex-col">
                    <label
                        htmlFor="pendidikan"
                        className="text-slate-500 text-sm"
                    >
                        Pendidikan Terakhir :
                    </label>
                    <select
                        name="pendidikan"
                        id="pendidikan"
                        className="rounded border-slate-300"
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
            </div>
            <div
                className={`${
                    popup == true ? "" : "hidden"
                } pt-4 w-full flex justify-end`}
            >
                <button
                    onClick={apply}
                    className="py-1 px-4 bg-slate-600 text-white rounded-lg"
                >
                    apply
                </button>
            </div>
        </div>
    );
}

export default FilterMenu;
