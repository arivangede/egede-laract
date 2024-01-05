import React from "react";

function ShowCarousel({ carousel }) {
    return (
        <>
            <div className="w-full h-60 flex justify-center items-center">
                <img
                    src={"/storage" + carousel}
                    alt="img"
                    className="object-cover object-center h-full w-full"
                />
            </div>
        </>
    );
}

export default ShowCarousel;
