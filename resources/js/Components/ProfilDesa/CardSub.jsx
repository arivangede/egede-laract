import React from "react";
import profile from "@/assets/img/profildesa/lpm/profile.svg";

function CardSub({ nama, posisi, foto }) {
    return (
        <div className="flex items-center gap-4 h-24 px-4 w-full border text-slate-600 bg-white">
            <img
                src={foto ? foto : profile}
                alt="img"
                onClick={() => document.getElementById("perbekel").showModal()}
                className="rounded-full object-cover object-top h-16 w-16"
            />
            <div className="flex flex-col gap-2 text-slate-700">
                <h1 className="font-bold">{nama}</h1>
                <span>{posisi}</span>
            </div>
        </div>
    );
}

export default CardSub;
