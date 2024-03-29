import { Link } from "@inertiajs/react";

function PengaduanBtn({ color, to }) {
    return (
        <Link
            href={to || ""}
            className="w-20 h-20 rounded flex flex-col justify-around items-center"
        >
            <div className="w-16 h-16  rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                <svg
                    width="45"
                    height="47"
                    viewBox="0 0 45 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25.4701 0.957248C24.4367 0.331068 23.2514 0 22.0431 0C20.8348 0 19.6496 0.331068 18.6161 0.957248L3.18596 10.3094C2.21361 10.8986 1.40958 11.7285 0.851503 12.719C0.293426 13.7096 0.000153371 14.8273 0 15.9642V31.0358C0.000153371 32.1727 0.293426 33.2904 0.851503 34.281C1.40958 35.2715 2.21361 36.1014 3.18596 36.6906L18.6161 46.0427C19.6496 46.6689 20.8348 47 22.0431 47C23.2514 47 24.4367 46.6689 25.4701 46.0427L40.9002 36.6906C41.8726 36.1014 42.6766 35.2715 43.2347 34.281C43.7928 33.2904 44.0861 32.1727 44.0862 31.0358V15.9642C44.0861 14.8273 43.7928 13.7096 43.2347 12.719C42.6766 11.7285 41.8726 10.8986 40.9002 10.3094L25.4701 0.957248Z"
                        fill={color || "#000"}
                    />
                    <g clipPath="url(#clip0_1169_596)">
                        <path
                            d="M5.97966 17.5811H5.62966V17.9311V25.1619V25.5119H5.97966H8.72869V31.3599V31.7099H9.07869H10.1114H10.4614V31.3599V25.5119H17.9332L25.3815 31.539L25.9517 32.0004V31.2669V11.641V10.8965L25.3784 11.3715L17.8834 17.5811H5.97966ZM18.9043 18.9855L24.218 14.5827V28.3684L18.6424 23.8571L18.5461 23.7792H18.4223H12.5268V19.3148H18.3806H18.5067L18.6038 19.2344L18.8905 18.9971L18.9032 18.9866L18.9043 18.9855ZM7.36332 23.7782V19.3138H10.795V23.7782H7.36332Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.7"
                        />
                        <path
                            d="M32.9688 12.3075L32.7242 12.1117L32.5026 12.3332L31.7596 13.0763L31.4801 13.3557L31.7913 13.5994C34.1281 15.4285 35.6367 18.2662 35.6367 21.4535C35.6367 24.7258 34.0459 27.6281 31.6013 29.4499L31.2767 29.6917L31.5629 29.978L32.3108 30.7259L32.5276 30.9427L32.7711 30.7563C35.5652 28.617 37.3703 25.2465 37.3703 21.4535C37.3703 17.7523 35.6491 14.4527 32.9688 12.3075Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.7"
                        />
                        <path
                            d="M29.6281 15.6113L29.3886 15.4482L29.1837 15.6531L28.4329 16.4039L28.1233 16.7135L28.4934 16.9473C29.9918 17.894 30.9896 19.5579 30.9896 21.4535C30.9896 23.4328 29.9026 25.1614 28.2926 26.0815L27.8948 26.3089L28.2188 26.6329L28.9715 27.3856L29.1688 27.5829L29.4051 27.4346C31.394 26.186 32.7233 23.9784 32.7233 21.4535C32.7233 19.0231 31.4943 16.8816 29.6281 15.6113Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.7"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1169_596">
                            <rect
                                width="31"
                                height="31"
                                fill="white"
                                transform="translate(6 6)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div>
                <h1 className="text-sm text-slate-400">Pengaduan</h1>
            </div>
        </Link>
    );
}

export default PengaduanBtn;
