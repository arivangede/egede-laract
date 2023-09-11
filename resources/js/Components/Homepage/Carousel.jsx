import { useState, useEffect } from "react";

import wellcome from "@/assets/img/homepage/carousel/asset-wellcome.png";
import visimisi from "@/assets/img/homepage/carousel/asset-visimisi.png";
import inovasi from "@/assets/img/homepage/carousel/asset-inovasidesa.png";

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState("");
    const slides = [
        { id: 1, image: wellcome },
        { id: 2, image: visimisi },
        { id: 3, image: inovasi },
    ];

    return (
        <>
            <div className="w-[98%] carousel flex gap-2 pb-5 relative">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`carousel-item shadow-lg rounded-md w-[90%]`}
                    >
                        <img src={slide.image} alt="banner" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Carousel;
