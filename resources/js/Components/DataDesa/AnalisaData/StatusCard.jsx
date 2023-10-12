import { useSpring, animated } from "react-spring";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function StatusCard({ desa, jumlahPenduduk, jumlahHasil }) {
    const persentase = ((jumlahHasil / jumlahPenduduk) * 100).toFixed(2);

    return (
        <div
            className={`transition duration-200 w-full flex p-4 justify-center bg-white rounded-xl shadow gap-2`}
        >
            <div className="w-full flex flex-col justify-center items-center border-r p-2">
                <span className="text-xs text-slate-500 font-bold self-baseline">
                    Desa
                </span>
                <h1 className="text-xl font-extrabold text-slate-700">
                    {desa}
                </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-2">
                <span className="text-xs text-slate-500 font-bold self-baseline">
                    Total Penduduk
                </span>
                <h1 className="text-2xl font-extrabold text-slate-700 self-end">
                    <Number n={jumlahPenduduk} />
                </h1>
                <span className="text-base text-slate-600 font-bold self-end">
                    Jiwa
                </span>
            </div>
            {jumlahHasil == 0 ? (
                ""
            ) : (
                <div className="entrance w-full flex flex-col justify-center items-center p-2 border-l">
                    <span className="text-xs text-slate-500 font-bold self-baseline">
                        Hasil Pencarian
                    </span>
                    <h1 className="text-2xl font-extrabold text-slate-700 self-end">
                        <Number n={jumlahHasil} />
                    </h1>
                    <span className="text-base text-slate-600 font-bold self-end">
                        ({persentase}%)
                    </span>
                </div>
            )}
        </div>
    );
}

export default StatusCard;
