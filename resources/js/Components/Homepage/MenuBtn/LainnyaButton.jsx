import { useState } from "react";

import LainnyaPopup from "../LainnyaPopup";

function LainnyaButton() {
    const [popup, setPopup] = useState(null);
    return (
        <>
            <button
                className="w-20 h-20 rounded flex flex-col justify-around items-center"
                onClick={() => setPopup(true)}
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
                            fill="#FF4344"
                        />
                        <path
                            d="M30.4 11.984H26.8C25.4745 11.984 24.4 13.0585 24.4 14.384V17.984C24.4 19.3095 25.4745 20.384 26.8 20.384H30.4C31.7255 20.384 32.8 19.3095 32.8 17.984V14.384C32.8 13.0585 31.7255 11.984 30.4 11.984Z"
                            stroke="white"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.2 11.984H13.6C12.2745 11.984 11.2 13.0585 11.2 14.384V17.984C11.2 19.3095 12.2745 20.384 13.6 20.384H17.2C18.5255 20.384 19.6 19.3095 19.6 17.984V14.384C19.6 13.0585 18.5255 11.984 17.2 11.984Z"
                            stroke="white"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M30.4 25.184H26.8C25.4745 25.184 24.4 26.2585 24.4 27.584V31.184C24.4 32.5095 25.4745 33.584 26.8 33.584H30.4C31.7255 33.584 32.8 32.5095 32.8 31.184V27.584C32.8 26.2585 31.7255 25.184 30.4 25.184Z"
                            stroke="white"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.2 25.184H13.6C12.2745 25.184 11.2 26.2585 11.2 27.584V31.184C11.2 32.5095 12.2745 33.584 13.6 33.584H17.2C18.5255 33.584 19.6 32.5095 19.6 31.184V27.584C19.6 26.2585 18.5255 25.184 17.2 25.184Z"
                            stroke="white"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <h1 className="text-sm text-slate-400">Lainnya</h1>
                </div>
            </button>

            <LainnyaPopup trigger={popup} setTrigger={setPopup} />
        </>
    );
}

export default LainnyaButton;
