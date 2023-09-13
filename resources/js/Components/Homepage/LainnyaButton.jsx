import { useState } from "react";

import LainnyaPopup from "./LainnyaPopup";
import Lainnya from "./svg/Lainnya";
function LainnyaButton() {
    const [popup, setPopup] = useState(null);
    return (
        <>
            <button
                className="w-20 h-20 rounded flex flex-col justify-around items-center"
                onClick={() => setPopup(true)}
            >
                <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                    <Lainnya color={"#fff"} bgcolor={"#ff4344"} />
                </div>
                <div>
                    <h1 className="text-sm text-slate-400">Lainnya</h1>
                </div>
            </button>

            <LainnyaPopup trigger={popup} setTrigger={setPopup} />
        </>
    );
}

export default LainnyaButton;
