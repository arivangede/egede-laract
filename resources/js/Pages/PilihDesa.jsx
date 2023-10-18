import { Head } from "@inertiajs/react";
import { useState } from "react";

function PilihDesa() {
    const [selectDesa, setSelectDesa] = useState();
    return (
        <>
            <Head title="Pilih Desa" />
            <div className="entrance min-h-screen flex justify-center items-center bg-slate-50">
                <div className="bg-white rounded-xl shadow-lg flex flex-col items-center text-slate-700 p-10 gap-6">
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-center text-xl font-bold">
                            Pilih Desa
                        </h1>
                        <span className="text-sm text-slate-500 font-bold">
                            kota: Denpasar
                        </span>
                    </div>

                    <select
                        name="desa"
                        id="desa"
                        className="rounded-xl"
                        value={selectDesa}
                        onChange={() => setSelectDesa}
                    >
                        <option value="">pilih</option>
                        <option value="1">Dauh Puri Kaja</option>
                    </select>
                    <button className="py-2 px-4 bg-slate-600 text-white flex items-center justify-center rounded-xl">
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default PilihDesa;
