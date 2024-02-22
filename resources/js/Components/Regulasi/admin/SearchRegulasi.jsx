import { IoSearch } from "react-icons/io5";

const SearchRegulasi = ({ state, setState, handleapply }) => {
    return (
        <div className="relative w-full flex items-center">
            <input
                type="text"
                placeholder="Cari No.Regulasi/Tahun Regulasi"
                className="text-xs w-full py-4 pr-12 bg-white border-slate-200 rounded-full focus:border-red-400 focus:ring-red-400 transition duration-200"
                value={state.keywords}
                onChange={(e) =>
                    setState({ ...state, keywords: e.target.value })
                }
            />
            <button
                onClick={handleapply}
                className="absolute right-3 rounded-full"
            >
                <IoSearch size={24} />
            </button>
        </div>
    );
};

export default SearchRegulasi;
