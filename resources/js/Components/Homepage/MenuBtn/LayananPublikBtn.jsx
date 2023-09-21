import { Link } from "@inertiajs/react";
import LayananPublik from "../svg/LayananPublik";

function LayananPublikBtn() {
    return (
        <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
            <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                <LayananPublik color={"#fff"} bgcolor={"#ff4344"} />
            </div>
            <div>
                <h1 className="text-sm text-slate-400">LayananPublik</h1>
            </div>
        </Link>
    );
}

export default LayananPublikBtn;
