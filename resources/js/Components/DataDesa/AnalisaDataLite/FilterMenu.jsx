import React from "react";

const FilterMenu = ({ opt, state, filterData, setFilterData, apply }) => {
    const clearprediksi = (e) => {
        e.preventDefault();
        setFilterData({ ...filterData, umur: "", tanggal: "" });
    };
    return (
        <div
            className={`scale-0 w-full flex flex-col items-center bg-white shadow rounded-xl border border-slate-200 transition-all origin-top-right p-4 gap-4 text-sm ${
                state == true ? "scale-100" : "absolute -z-20"
            }`}
        >
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500 ">Dusun:</span>
                <select
                    name="dusun"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.dusun}
                    onChange={(e) =>
                        setFilterData({ ...filterData, dusun: e.target.value })
                    }
                >
                    <option value="">pilih</option>
                    {opt.dusun.map((item, index) => (
                        <option key={index} value={item.id}>
                            {item.nama_dusun}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Jenis kelamin:</span>
                <select
                    name="dusun"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.jk}
                    onChange={(e) =>
                        setFilterData({ ...filterData, jk: e.target.value })
                    }
                >
                    <option value="">pilih</option>
                    {opt.jeniskelamin.map((item, index) => (
                        <option key={index} value={item.jenis_kelamin}>
                            {item.jenis_kelamin}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Pekerjaan:</span>
                <select
                    name="pekerjaan"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.pekerjaan}
                    onChange={(e) =>
                        setFilterData({
                            ...filterData,
                            pekerjaan: e.target.value,
                        })
                    }
                >
                    <option value="">pilih</option>
                    {opt.pekerjaan.map((item, index) => (
                        <option key={index} value={item.pekerjaan}>
                            {item.pekerjaan}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Suku bangsa:</span>
                <select
                    name="suku"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.sukuBangsa}
                    onChange={(e) =>
                        setFilterData({
                            ...filterData,
                            sukuBangsa: e.target.value,
                        })
                    }
                >
                    <option value="">pilih</option>
                    {opt.suku_bangsa.map((item, index) => (
                        <option key={index} value={item.suku_bangsa}>
                            {item.suku_bangsa}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Status pernikahan:</span>
                <select
                    name="status"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.statusPernikahan}
                    onChange={(e) =>
                        setFilterData({
                            ...filterData,
                            statusPernikahan: e.target.value,
                        })
                    }
                >
                    <option value="">pilih</option>
                    {opt.status_pernikahan.map((item, index) => (
                        <option key={index} value={item.stt_nikah}>
                            {item.stt_nikah}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Agama:</span>
                <select
                    name="agama"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.agama}
                    onChange={(e) =>
                        setFilterData({ ...filterData, agama: e.target.value })
                    }
                >
                    <option value="">pilih</option>
                    {opt.agama.map((item, index) => (
                        <option key={index} value={item.agama}>
                            {item.agama}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Warga negara:</span>
                <select
                    name="wn"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.wargaNegara}
                    onChange={(e) =>
                        setFilterData({
                            ...filterData,
                            wargaNegara: e.target.value,
                        })
                    }
                >
                    <option value="">pilih</option>
                    {opt.warga_negara.map((item, index) => (
                        <option key={index} value={item.kewarganegaraan}>
                            {item.kewarganegaraan}
                        </option>
                    ))}
                </select>
            </div>
            <div
                className={`${
                    state == true ? "" : "hidden"
                } w-full flex flex-col`}
            >
                <span className="text-slate-500">Pendidikan terakhir:</span>
                <select
                    name="pendidikan"
                    className="rounded-xl focus:border-red-400 focus:ring-red-400 border-slate-300"
                    value={filterData.pendidikan}
                    onChange={(e) =>
                        setFilterData({
                            ...filterData,
                            pendidikan: e.target.value,
                        })
                    }
                >
                    <option value="">pilih</option>
                    {opt.pendidikan.map((item, index) => (
                        <option key={index} value={item.pendidikan_terakhir}>
                            {item.pendidikan_terakhir}
                        </option>
                    ))}
                </select>
            </div>

            <form
                className={`${
                    state == true ? "scale-100" : "hidden"
                } scale-0 w-full shadow rounded-xl p-4 transition duration-200 origin-top border`}
            >
                <div
                    className={`${
                        state == true ? "" : "hidden"
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
                                value={filterData.umur}
                                onChange={(e) =>
                                    setFilterData({
                                        ...filterData,
                                        umur: e.target.value,
                                    })
                                }
                                placeholder="pilih"
                                className="border-slate-300 rounded-xl w-full"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="tanggal">Tanggal:</label>
                            <input
                                id="tanggal"
                                type="date"
                                value={filterData.tanggal}
                                onChange={(e) =>
                                    setFilterData({
                                        ...filterData,
                                        tanggal: e.target.value,
                                    })
                                }
                                className="border-slate-300 rounded-xl w-full"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={clearprediksi}
                            className="py-2 px-4 flex justify-center items-center border border-slate-400 bg-white text-slate-600 font-bold rounded-xl"
                        >
                            clear
                        </button>
                    </div>
                </div>
            </form>

            <div
                className={`${
                    state == true ? "" : "hidden"
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
};

export default FilterMenu;
