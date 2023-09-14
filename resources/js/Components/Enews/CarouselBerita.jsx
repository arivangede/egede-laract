import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";

function CarouselBerita({ berita }) {
    console.log("carousel", berita);
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

    const slides = [
        "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1785283/pexels-photo-1785283.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    return (
        <div className="relative py-1 pb-4">
            <div
                className="w-full h-full flex gap-2 carousel pb-4"
                ref={carouselRef}
            >
                {berita
                    ? berita.map((slides, i) => (
                          <Link
                              href={"/e-news/" + slides.title}
                              key={i}
                              className="carousel-item w-full h-48 flex justify-center items-center"
                          >
                              <div className="h-full w-[95%] border rounded-xl overflow-hidden shadow-lg relative">
                                  <img
                                      src={slides.image}
                                      alt="image"
                                      className="h-full w-full object-cover object-center"
                                  />
                                  <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center">
                                      <h1 className="font-bold text-slate-50 text-xl text-center">
                                          {slides.title}
                                      </h1>
                                      <div className="w-full flex justify-between items-center text-slate-50 px-4 py-2">
                                          <span>{slides.date}</span>
                                          <span className="badge bg-transparent border-slate-50 text-slate-50">
                                              {slides.author}
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
