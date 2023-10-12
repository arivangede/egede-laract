import ChevronL from "@/assets/svg/ChevronL";
import ChevronR from "@/assets/svg/ChevronR";

function Pagination() {
    return (
        <div className="w-[45%] bg-white flex justify-between items-center p-2 rounded-xl shadow">
            <button className="border-r p-1 w-6">
                <ChevronL />
            </button>
            <span className="text-xs">Page 1 / 10</span>
            <button className="border-l p-1 w-6">
                <ChevronR />
            </button>
        </div>
    );
}

export default Pagination;
