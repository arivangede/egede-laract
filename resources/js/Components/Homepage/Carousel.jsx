import { useState, useRef, useEffect } from "react";

import welcome1 from "@/assets/img/homepage/carousel/dauhpurikaja/asset-wellcome.png";
import visimisi1 from "@/assets/img/homepage/carousel/dauhpurikaja/asset-visimisi.png";

import welcome2 from "@/assets/img/homepage/carousel/peguyangankangin/Banner 1.png";
import visimisi2 from "@/assets/img/homepage/carousel/peguyangankangin/Banner 2.png";

import welcome3 from "@/assets/img/homepage/carousel/pemecutankelod/Banner 1.png";
import visimisi3 from "@/assets/img/homepage/carousel/pemecutankelod/Banner 2.png";

function data(namadesa) {
    switch (namadesa) {
        case "dauhpurikaja":
            return {
                welcome: welcome1,
                visimisi: visimisi1,
            };

        case "peguyangankangin":
            return {
                welcome: welcome2,
                visimisi: visimisi2,
            };

        case "pemecutankelod":
            return {
                welcome: welcome3,
                visimisi: visimisi3,
            };

        default:
            return {
                welcome: welcome1,
                visimisi: visimisi1,
            };
    }
}

function Carousel({ datadesa }) {
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const handleScroll = (e) => {
            const scrollLeft = carouselRef.current.scrollLeft;
            const clientWidth = carouselRef.current.clientWidth;

            const newActiveSlide = Math.round(scrollLeft / clientWidth);

            if (newActiveSlide !== activeSlide) {
                setActiveSlide(newActiveSlide);
            }
        };

        const carouselElement = carouselRef.current;

        if (carouselElement) {
            carouselElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (carouselElement) {
                carouselElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [activeSlide]);

    const gambar = datadesa.sc_desa
        ? data(datadesa.sc_desa)
        : { welcome: null, visimisi: null };

    const slides = [gambar.welcome, gambar.visimisi];

    return (
        <>
            <div className="relative py-1 pb-8">
                <div className="w-[100%] carousel flex gap-2" ref={carouselRef}>
                    {slides[0] ? (
                        <div
                            className={`carousel-item w-[100%] flex justify-center items-center`}
                        >
                            <img src={slides[0]} alt="banner" />
                        </div>
                    ) : (
                        ""
                    )}
                    {slides[1] ? (
                        <div
                            className={`carousel-item w-[100%] flex justify-center items-center`}
                        >
                            <img src={slides[1]} alt="banner" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="absolute bottom-2 right-0 left-0">
                    <div className="flex items-center justify-center gap-1">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`transition-all w-2 h-2 rounded-full bg-red-500  ${
                                    activeSlide === i
                                        ? "w-3 h-3"
                                        : "bg-opacity-50"
                                } `}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
