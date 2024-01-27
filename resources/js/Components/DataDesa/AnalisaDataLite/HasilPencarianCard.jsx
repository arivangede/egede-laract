import React from "react";
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

const HasilPencarianCard = ({ jumlah, persentase, filterState, isUpdated }) => {
    return (
        <div className="w-full p-4 bg-white border border-slate-200 shadow rounded-xl flex flex-col items-center">
            <h1 className="font-bold text-sm">Hasil Pencarian</h1>
            {filterState && isUpdated == true ? (
                <>
                    <h1 className="font-bold text-xl flex flex-row gap-2 items-center">
                        <Number n={jumlah} />
                        <span className="text-xs font-semibold">Penduduk</span>
                    </h1>
                    <span>({persentase}%)</span>
                </>
            ) : (
                <>
                    <h1 className="font-bold text-xl flex flex-row gap-2 items-center">
                        <Number n={0} />
                        <span className="text-xs font-semibold">Penduduk</span>
                    </h1>
                    <span>({0}%)</span>
                </>
            )}
        </div>
    );
};

export default HasilPencarianCard;
