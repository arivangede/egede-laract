function LimitBar({ pengumumanCount }) {
    const countPengumuman = pengumumanCount;
    const limitPengumuman = 365;
    const persentase = Math.floor((countPengumuman / limitPengumuman) * 100);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-slate-600 font-bold w-full px-4">
                Limit Post Pengumuman
            </h1>
            <div className="w-full flex flex-col justify-center items-center px-10">
                <div className="bg-slate-100 border w-full rounded-full py-2 flex justify-center items-center overflow-hidden relative">
                    <div
                        className={`absolute left-0 ${
                            persentase > 0 && persentase < 50
                                ? "bg-green-400"
                                : persentase >= 50 && persentase < 80
                                ? "bg-yellow-400"
                                : persentase >= 80
                                ? "bg-red-400"
                                : ""
                        }`}
                        style={{
                            height: "100%",
                            width: `${
                                (countPengumuman / limitPengumuman) * 100
                            }%`,
                        }}
                    ></div>
                    <h1
                        className={`z-10 ${
                            persentase > 67 ? "text-white" : "text-slate-600"
                        } text-bold`}
                    >
                        {countPengumuman}/{limitPengumuman} ({persentase}
                        %)
                    </h1>
                </div>
                {persentase >= 80 ? (
                    <h1 className="text-center text-sm text-red-500">
                        Post Pengumuman Kamu Sebentar Lagi Menyentuh Limit!
                    </h1>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default LimitBar;
