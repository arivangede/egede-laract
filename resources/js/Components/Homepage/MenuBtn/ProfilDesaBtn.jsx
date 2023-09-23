import { Link } from "@inertiajs/react";
import ProfilDesa from "../svg/ProfilDesa";

function ProfilDesaBtn() {
    return (
        <Link className="w-20 h-20 rounded flex flex-col justify-around items-center">
            <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                <ProfilDesa color={"#fff"} bgcolor={"#ff4344"} />
            </div>
            <div>
                <h1 className="text-sm text-slate-400">ProfilDesa</h1>
            </div>
        </Link>
    );
}

export default ProfilDesaBtn;