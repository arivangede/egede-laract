import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";

function CarouselBerita({ berita }) {
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

    return (
        <div className="relative py-1 pb-4">
            <div
                className="w-full h-full flex gap-2 carousel pb-4"
                ref={carouselRef}
            >
                {berita
                    ? berita.map((item, i) => (
                          <Link
                              href={"/e-news/" + item.id}
                              key={i}
                              className="carousel-item w-full h-48 flex justify-center items-center"
                          >
                              <div className="h-full w-[95%] border rounded-3xl overflow-hidden shadow-lg relative">
                                  <img
                                      src={"/storage/" + item.image}
                                      alt="image"
                                      className="h-full w-full object-cover object-center"
                                  />
                                  <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center">
                                      <h1 className="font-bold text-slate-50 text-xl text-center">
                                          {item.title}
                                      </h1>
                                      <div className="w-full flex justify-between items-center text-slate-50 px-4 py-2">
                                          <span>{item.created_at}</span>
                                          <span className="badge bg-transparent border-slate-50 text-slate-50">
                                              {item.desa.nama_desa}
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </Link>
                      ))
                    : ""}
            </div>

            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-1">
                    {berita.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-2 h-2 rounded-full bg-red-500  ${
                                activeSlide === i ? "w-3 h-3" : "bg-opacity-50"
                            } `}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarouselBerita;
