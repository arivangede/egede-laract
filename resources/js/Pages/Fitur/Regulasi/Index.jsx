import { Link } from "@inertiajs/react";
import React from "react";
import BackBtn from "@/assets/svg/BackBtn";

function Index(props) {
    console.log(props);
    return (
        <div className="bg-slate-50 h-screen">
            <div className="entrance flex flex-col items-center w-full h-full pt-14 text-slate-700">
                <div className="w-full flex px-4 items-center">
                    <Link href="/" className="w-8 h-8">
                        <BackBtn color={"#1e293b"} />
                    </Link>
                    <h1 className="font-extrabold text-lg">Regulasi</h1>
                </div>
            </div>
        </div>
    );
}

export default Index;
