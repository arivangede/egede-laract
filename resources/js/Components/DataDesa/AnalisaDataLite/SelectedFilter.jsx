import React from "react";

const SelectedFilter = ({
    filterData,
    closeFilter,
    namaDusun,
    isFilterApplied,
}) => {
    return (
        <div
            className={`w-full flex flex-row flex-wrap gap-2 p-4 text-xs font-semibold scale-0 ${
                isFilterApplied ? "scale-100" : "hidden"
            } border-b border-slate-200`}
        >
            {filterData.dusun && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{namaDusun(filterData.dusun)}</p>
                    <button
                        onClick={() => closeFilter(["dusun"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.jk && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.jk}</p>
                    <button
                        onClick={() => closeFilter(["jk"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.pekerjaan && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.pekerjaan}</p>
                    <button
                        onClick={() => closeFilter(["pekerjaan"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.sukuBangsa && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.sukuBangsa}</p>
                    <button
                        onClick={() => closeFilter(["sukuBangsa"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.statusPernikahan && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.statusPernikahan}</p>
                    <button
                        onClick={() => closeFilter(["statusPernikahan"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.agama && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.agama}</p>
                    <button
                        onClick={() => closeFilter(["agama"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.wargaNegara && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.wargaNegara}</p>
                    <button
                        onClick={() => closeFilter(["wargaNegara"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.pendidikan && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>{filterData.pendidikan}</p>
                    <button
                        onClick={() => closeFilter(["pendidikan"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
            {filterData.umur && filterData.tanggal && (
                <div className="py-2 px-4 bg-slate-50 shadow border border-slate-200 rounded-xl flex flex-row items-center gap-4 ">
                    <p>
                        {filterData.umur} & {filterData.tanggal}
                    </p>
                    <button
                        onClick={() => closeFilter(["umur", "tanggal"])}
                        className="text-red-500 "
                    >
                        x
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectedFilter;
