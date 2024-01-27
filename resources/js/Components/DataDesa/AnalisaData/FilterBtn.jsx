import FilterIcon from "@/assets/svg/FilterIcon";

function FilterBtn({ click, state }) {
    return state ? (
        <button
            onClick={click}
            className={`${
                state == true ? "bg-slate-600" : "bg-white"
            } p-2 shadow rounded-lg flex items-center gap-1 transition-all duration-300 ease-in-out`}
        >
            <h1
                className={`text-sm ${
                    state == true ? "text-white" : "text-slate-600"
                } font-bold`}
            >
                Filter
            </h1>
            <div className="w-4">
                <FilterIcon color={`${state == true ? "#fff" : "#475569"}`} />
            </div>
        </button>
    ) : (
        <button
            onClick={click}
            className={`bg-white
             p-2 shadow rounded-lg flex items-center gap-1 transition-all `}
        >
            <h1 className="text-sm text-slate-600 font-bold">Filter</h1>
            <div className="w-4">
                <FilterIcon color={"#475569"} />
            </div>
        </button>
    );
}

export default FilterBtn;
