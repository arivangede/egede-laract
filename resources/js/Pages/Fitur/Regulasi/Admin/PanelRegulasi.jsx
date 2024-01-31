import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import React from "react";

const PanelRegulasi = () => {
    return (
        <div className="min-h-screen w-full bg-slate-50">
            <div className="entrance w-full flex gap-4 pt-8">
                <div className="w-full p-4 flex items-center">
                    <Link href="/" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>

                    <h1 className="text-bold text-slate-600 text-lg capitalize">
                        Panel Regulasi
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PanelRegulasi;
