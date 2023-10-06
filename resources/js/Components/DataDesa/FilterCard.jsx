function FilterCard({ desa, kategori, onDesaChange, onKategoriChange }) {
    return (
        <div className="flex flex-col p-4 gap-3 bg-white shadow-lg rounded-xl w-[90%] items-center">
            <h1 className="font-black tracking-wider text-slate-700 text-xl">
                Filter
            </h1>

            <div className="w-full flex justify-center items-center gap-4 text-sm">
                <select
                    value={desa}
                    onChange={(e) => onDesaChange(e.target.value)}
                    className="select select-ghost text-slate-700"
                >
                    <option value={""}>Pilih Desa</option>
                    <option value={"1"}>Dauh Puri Kaja</option>
                    <option value={"2"}>Dauh Puri</option>
                </select>
                <select
                    value={kategori}
                    onChange={(e) => onKategoriChange(e.target.value)}
                    className="select select-ghost text-slate-700"
                >
                    <option value={""}>Pilih Kategori</option>
                    <option value={"jenis_kelamin"}>Jenis Kelamin</option>
                    <option value={"pekerjaan"}>Pekerjaan</option>
                    <option value={"suku_bangsa"}>Suku Bangsa</option>
                    <option value={"agama"}>Agama</option>
                    <option value={"usia"}>Klasifikasi Usia</option>
                    <option value={"pendidikan_terakhir"}>
                        Pendidikan Terakhir
                    </option>
                    <option value={"stt_nikah"}>Status Pernikahan</option>
                </select>
            </div>
        </div>
    );
}

export default FilterCard;
