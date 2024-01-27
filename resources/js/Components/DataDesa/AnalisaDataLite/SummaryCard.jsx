import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const SummaryCard = ({ namaDesa, jumlahPenduduk }) => {
    return (
        <div className="bg-white p-6 rounded-2xl flex flex-row justify-between items-center shadow border border-slate-200 w-full text-slate-700">
            <div className="flex flex-col border-r border-slate-300 px-4 w-full">
                <span className="text-slate-500 text-sm font-semibold">
                    Desa
                </span>
                <h1 className="font-bold text-xl">{namaDesa}</h1>
            </div>

            <div className="flex flex-col items-end px-4 w-full">
                <span className="text-slate-500 text-sm font-semibold self-start">
                    Total penduduk
                </span>
                <h1 className="text-2xl font-extrabold text-slate-700 self-end">
                    <Number n={jumlahPenduduk} />
                </h1>
                <span className="text-slate-500 text-sm font-semibold">
                    Jiwa
                </span>
            </div>
        </div>
    );
};

export default SummaryCard;
