import React from "react";

const StatusCard = ({ jumlah }) => {
    return (
        <div className="w-full px-8">
            <div className="w-full h-60 bg-white rounded-xl shadow-md border border-slate-100">
                <div className="border-b border-slate-300 h-1/3 flex flex-col items-center justify-center p-4">
                    <h1 className="text-4xl font-bold">{jumlah.data_total}</h1>
                    <span className="font-bold">Total Regulasi</span>
                </div>
                <div className="w-full h-1/3 flex justify-between items-center border-b border-slate-300">
                    <div className="w-1/2 h-full flex flex-col items-center justify-center border-r border-slate-300">
                        <h1 className="text-4xl font-bold">
                            {jumlah.data_perkel}
                        </h1>
                        <span className="font-bold">Perkel</span>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">
                            {jumlah.data_perdes}
                        </h1>
                        <span className="font-bold">Perdes</span>
                    </div>
                </div>
                <div className="w-full h-1/3 flex justify-between items-center">
                    <div className="w-1/2 h-full flex flex-col items-center justify-center border-r border-slate-300">
                        <h1 className="text-4xl font-bold">
                            {jumlah.data_berlaku}
                        </h1>
                        <span className="font-bold">Berlaku</span>
                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">
                            {jumlah.data_tidakberlaku}
                        </h1>
                        <span className="font-bold">Tidak Berlaku</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
