import StatusCard from "@/Components/Regulasi/StatusCard";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";
import React from "react";

const PanelRegulasi = () => {
    return (
        <div className="min-h-screen w-full bg-slate-50">
            <div className="entrance w-full flex flex-col gap-4 pt-8">
                <div className="w-full p-4 flex items-center">
                    <Link href="/" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>

                    <h1 className="text-bold text-slate-600 text-lg capitalize">
                        Panel Regulasi
                    </h1>
                </div>
                <div className="w-full h-full px-4 flex flex-col gap-4 items-center text-sm text-slate-600">
                    <h1 className="px-4 text-xs text-slate-500 text-justify">
                        Lakukan perubahan terhadap data yang ingin dirubah.
                        Perubahan akan terupdate secara langsung pada sistem.
                        Perubahan dapat dilakukan oleh admin saja.
                    </h1>
                    <StatusCard />

                    <div className="w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default PanelRegulasi;
