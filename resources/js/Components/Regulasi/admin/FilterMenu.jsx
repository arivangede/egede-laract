import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const FilterMenu = ({ state, setState, handleapply }) => {
    const [filterCalendar, setFilterCalendar] = useState(false);

    const handleCheckbox = () => {
        if (filterCalendar) {
            setState({ ...state, value: null });
        }
        setFilterCalendar(!filterCalendar);
    };

    const handleDateChange = (newValue) => {
        const selectedDate = dayjs(newValue).startOf("day").utc(true);
        setState({ ...state, value: selectedDate });
    };

    console.log(state.value);

    return (
        <>
            <button
                className="btn bg-white shadow"
                onClick={() => document.getElementById("filter").showModal()}
            >
                <IoFilter size={18} />
            </button>
            <dialog id="filter" className="modal">
                <div className="modal-box p-0 relative max-h-[70%]">
                    <h3 className="font-bold text-lg w-full bg-white sticky -top-1 text-center p-4 shadow">
                        Sortir & Filter
                    </h3>
                    <div className="flex flex-col items-center p-4 gap-2">
                        <div className="flex flex-col gap-2 w-full">
                            <h3>Urutkan Berdasarkan:</h3>
                            <div className="flex gap-2 justify-center w-full">
                                <button
                                    onClick={() =>
                                        setState({
                                            ...state,
                                            sortir: "Terbaru",
                                        })
                                    }
                                    className={`btn ${
                                        state.sortir == "Terbaru"
                                            ? "btn-error"
                                            : ""
                                    } rounded-full`}
                                >
                                    Terbaru
                                </button>
                                <button
                                    onClick={() =>
                                        setState({
                                            ...state,
                                            sortir: "Terlama",
                                        })
                                    }
                                    className={`btn ${
                                        state.sortir == "Terlama"
                                            ? "btn-error"
                                            : ""
                                    } rounded-full`}
                                >
                                    Terlama
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col">
                                <h3>Kategori</h3>
                                <select
                                    value={state.kategori}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            kategori: e.target.value,
                                        })
                                    }
                                    className="select select-bordered"
                                >
                                    <option value="">pilih</option>
                                    <option value="Perkel">Perkel</option>
                                    <option value="Perdes">Perdes</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <h3>Status</h3>
                                <select
                                    value={state.status}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            status: e.target.value,
                                        })
                                    }
                                    className="select select-bordered"
                                >
                                    <option value="">pilih</option>
                                    <option value="Berlaku">Berlaku</option>
                                    <option value="Tidak Berlaku">
                                        Tidak Berlaku
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <h3>Tanggal Upload</h3>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-error"
                                        onClick={handleCheckbox}
                                    />
                                </div>

                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DateCalendar
                                        value={state.value}
                                        onChange={handleDateChange}
                                        disabled={filterCalendar ? false : true}
                                        views={["year", "month", "day"]}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <button
                            onClick={handleapply}
                            className="w-[90%] btn bg-red-500 hover:bg-red-300 text-white sticky bottom-4"
                        >
                            Apply
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default FilterMenu;
