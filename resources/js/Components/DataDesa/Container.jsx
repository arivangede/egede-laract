import React from "react";

function Container({ children }) {
    return (
        <div className="min-h-[85%] w-full absolute bottom-0 left-0 flex flex-col bg-slate-50 rounded-t-3xl">
            {children}
        </div>
    );
}

export default Container;
