import React from "react";

const FilterRegulasi = ({ filterData, setFilterData }) => {
    return (
        <div className="w-full px-4 py-6 flex items-center justify-center gap-2 sticky top-0">
            <select
                onChange={(e) =>
                    setFilterData({
                        ...filterData,
                        kategori: e.target.value,
                    })
                }
                value={filterData.kategori}
                className="appearance-none w-full rounded-full border-slate-200 text-slate-600 text-sm font-bold focus:ring-red-500 focus:border-red-500 shadow-md"
            >
                <option value="perdes">Perdes</option>
                <option value="perkel">Perkel</option>
            </select>
            <select
                onChange={(e) =>
                    setFilterData({
                        ...filterData,
                        status: e.target.value,
                    })
                }
                value={filterData.status}
                className="w-full rounded-full border-slate-200 text-slate-600 text-sm font-bold focus:ring-red-500 focus:border-red-500 shadow-md"
            >
                <option value="berlaku">Berlaku</option>
                <option value="tidak berlaku">Tidak Berlaku</option>
            </select>
            <select
                onChange={(e) =>
                    setFilterData({
                        ...filterData,
                        tahun: e.target.value,
                    })
                }
                value={filterData.tahun}
                className="w-full rounded-full border-slate-200 text-slate-600 text-sm font-bold focus:ring-red-500 focus:border-red-500 shadow-md"
            >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    );
};

export default FilterRegulasi;
