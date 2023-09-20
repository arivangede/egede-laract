import React from "react";

function ShowCarousel({ carousel }) {
    return (
        <>
            <div className="relative pb-4">
                <div className="relative h-full w-full">
                    <div className="w-full h-full flex gap-2 carousel pb-4">
                        <div className="carousel-item w-full h-60 flex justify-center items-center">
                            <img
                                src={carousel}
                                alt="img"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShowCarousel;
