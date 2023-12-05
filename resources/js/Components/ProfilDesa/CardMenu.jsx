import { Link } from "@inertiajs/react";
import React from "react";

function CardMenu({ href, title, img }) {
    return (
        <Link
            href={href}
            className="entrance w-full bg-white text-slate-600 rounded-xl shadow flex items-center justify-between pl-10 py-8 gap-4"
        >
            <img src={img} alt="img" className="h-16" />
            <h1 className="text-2xl font-bold text-center w-full">{title}</h1>
        </Link>
    );
}

export default CardMenu;
