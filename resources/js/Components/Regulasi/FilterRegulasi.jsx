import React from "react";
import { IoFilter } from "react-icons/io5";

const FilterRegulasi = ({ filterData, setFilterData, handleApply }) => {
    return (
        <div className="w-full p-4 flex items-center justify-center gap-2 sticky -top-1">
            <button
                className="btn bg-white border-slate-300 rounded-full w-full p-0 hover:bg-red-500 hover:text-white flex items-center"
                onClick={() => document.getElementById("filter").showModal()}
            >
                Filter
                <IoFilter size={25} />
            </button>
            <dialog id="filter" className="modal">
                <div className="modal-box flex flex-col gap-4 items-center">
                    <h3 className="font-bold text-xl pb-4">Filter</h3>
                    <div className="w-full flex flex-col">
                        <label>Urutkan Berdasarkan</label>
                        <div className="flex w-full items-center justify-center gap-4">
                            <button
                                className={`btn ${
                                    filterData.sortir == "Terbaru"
                                        ? "btn-error"
                                        : ""
                                }`}
                                onClick={() =>
                                    setFilterData({
                                        ...filterData,
                                        sortir: "Terbaru",
                                    })
                                }
                            >
                                Terbaru
                            </button>
                            <button
                                className={`btn ${
                                    filterData.sortir == "Terlama"
                                        ? "btn-error"
                                        : ""
                                }`}
                                onClick={() =>
                                    setFilterData({
                                        ...filterData,
                                        sortir: "Terlama",
                                    })
                                }
                            >
                                Terlama
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>Kategori</label>
                        <select
                            value={filterData.kategori}
                            onChange={(e) =>
                                setFilterData({
                                    ...filterData,
                                    kategori: e.target.value,
                                })
                            }
                            className="select select-bordered focus:ring-red-500 focus:border-red-500"
                        >
                            <option value="">Semua</option>
                            <option value="Perkel">Perkel</option>
                            <option value="Perdes">Perdes</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>Status</label>
                        <select
                            value={filterData.status}
                            onChange={(e) =>
                                setFilterData({
                                    ...filterData,
                                    status: e.target.value,
                                })
                            }
                            className="select select-bordered focus:ring-red-500 focus:border-red-500"
                        >
                            <option value="">Semua</option>
                            <option value="Berlaku">Berlaku</option>
                            <option value="Tidak Berlaku">Tidak Berlaku</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>Tahun</label>
                        <select
                            value={filterData.tahun}
                            onChange={(e) =>
                                setFilterData({
                                    ...filterData,
                                    tahun: e.target.value,
                                })
                            }
                            className="select select-bordered focus:ring-red-500 focus:border-red-500"
                        >
                            <option value="">Semua</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <button
                        onClick={handleApply}
                        className="btn btn-error w-full"
                    >
                        Apply
                    </button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default FilterRegulasi;
