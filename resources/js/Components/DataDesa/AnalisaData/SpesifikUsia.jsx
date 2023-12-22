import React from "react";

function SpesifikUsia({ click }) {
    return (
        <button
            onClick={click}
            className="py-2 px-2 bg-white shadow rounded-xl text-xs text-slate-600 font-bold"
        >
            Prediksi Usia
        </button>
    );
}

export default SpesifikUsia;
