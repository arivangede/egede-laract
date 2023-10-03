import React from "react";

function Container({ children }) {
    return (
        <div className="mt-4 min-h-screen w-full bottom-0 left-0 flex flex-col bg-slate-50 rounded-t-3xl">
            {children}
        </div>
    );
}

export default Container;
