import Search from "@/assets/svg/Search";

function SearchBar({ search, setSearch, apply }) {
    return (
        <div className="w-[55%] flex justify-between items-center relative">
            <input
                type="text"
                placeholder="Cari Nama / Nik"
                className="w-full rounded-xl pr-9 border-none shadow"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button className="absolute w-6 right-2" onClick={apply}>
                <Search color="#94a3b8" />
            </button>
        </div>
    );
}

export default SearchBar;
