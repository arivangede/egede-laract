import welcome1 from "@/assets/img/homepage/carousel/dauhpurikaja/asset-wellcome.png";
import visimisi1 from "@/assets/img/homepage/carousel/dauhpurikaja/asset-visimisi.png";

import welcome2 from "@/assets/img/homepage/carousel/peguyangankangin/Banner 1.png";
import visimisi2 from "@/assets/img/homepage/carousel/peguyangankangin/Banner 2.png";

import welcome3 from "@/assets/img/homepage/carousel/pemecutankelod/Banner 1.png";
import visimisi3 from "@/assets/img/homepage/carousel/pemecutankelod/Banner 2.png";

import inovasi from "@/assets/img/homepage/carousel/asset-inovasidesa.png";

function data(namadesa) {
    switch (namadesa) {
        case "dauhpurikaja":
            return {
                welcome: welcome1,
                visimisi: visimisi1,
                inovasi: inovasi,
            };

        case "peguyangankangin":
            return {
                welcome: welcome2,
                visimisi: visimisi2,
                inovasi: inovasi,
            };

        case "pemecutankelod":
            return {
                welcome: welcome3,
                visimisi: visimisi3,
                inovasi: inovasi,
            };

        default:
            break;
    }
}

function Carousel({ datadesa }) {
    const gambar = datadesa.sc_desa
        ? data(datadesa.sc_desa)
        : { welcome: null, visimisi: null, inovasi: inovasi };

    return (
        <>
            <div className="w-[98%] carousel flex gap-2 pb-5 relative">
                {gambar.welcome ? (
                    <div
                        className={`carousel-item shadow-lg rounded-md w-[90%]`}
                    >
                        <img src={gambar.welcome} alt="banner" />
                    </div>
                ) : (
                    ""
                )}
                {gambar.visimisi ? (
                    <div
                        className={`carousel-item shadow-lg rounded-md w-[90%]`}
                    >
                        <img src={gambar.visimisi} alt="banner" />
                    </div>
                ) : (
                    ""
                )}
                {gambar.inovasi ? (
                    <div
                        className={`carousel-item shadow-lg rounded-md w-[90%]`}
                    >
                        <img src={gambar.inovasi} alt="banner" />
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default Carousel;
