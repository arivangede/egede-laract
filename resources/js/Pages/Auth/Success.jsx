import { Head } from "@inertiajs/react";
import React from "react";

function Success(props) {
    return (
        <>
            <Head title="Success" />
            <div className="bg-slate-50 min-h-screen flex justify-center items-center">
                <h1 className="text-center font-bold text-lg text-slate-600">
                    {props.flash.message}
                </h1>
            </div>
        </>
    );
}

export default Success;
