import FilterIcon from "@/assets/svg/FilterIcon";

function FilterBtn({ click }) {
    return (
        <button
            onClick={click}
            className="bg-white p-2 shadow rounded-lg flex items-center gap-1"
        >
            <h1 className="text-sm text-slate-600 font-bold">Filter</h1>
            <div className="w-4">
                <FilterIcon color={"#475569"} />
            </div>
        </button>
    );
}

export default FilterBtn;
