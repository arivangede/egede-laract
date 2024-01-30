import { Link } from "@inertiajs/react";
import React from "react";

function EnewsBtn({ color, to }) {
    return (
        <Link
            href={to}
            className="w-20 h-20 rounded flex flex-col justify-around items-center"
        >
            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-slate-200 bg-opacity-40 p-2 drop-shadow-md">
                <svg
                    width="47"
                    height="50"
                    viewBox="0 0 47 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.4771 1.00152C20.5583 0.346378 21.7983 0 23.0625 0C24.3267 0 25.5667 0.346378 26.648 1.00152L42.7917 10.7862C43.809 11.4026 44.6502 12.2709 45.2341 13.3072C45.818 14.3436 46.1248 15.513 46.125 16.7025V32.4711C46.1248 33.6606 45.818 34.8299 45.2341 35.8663C44.6502 36.9026 43.809 37.7709 42.7917 38.3874L26.648 48.172C25.5667 48.8272 24.3267 49.1735 23.0625 49.1735C21.7983 49.1735 20.5583 48.8272 19.4771 48.172L3.3333 38.3874C2.31598 37.7709 1.47477 36.9026 0.890884 35.8663C0.306999 34.8299 0.000164032 33.6606 3.8147e-06 32.4711V16.7025C0.000164032 15.513 0.306999 14.3436 0.890884 13.3072C1.47477 12.2709 2.31598 11.4026 3.3333 10.7862L19.4771 1.00152Z"
                        fill={color || "#000"}
                    />
                    <mask
                        id="mask0_1167_593"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="4"
                        width="42"
                        height="42"
                    >
                        <path
                            d="M2.5625 4.08676H43.5625V45.0868H2.5625V4.08676Z"
                            fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0_1167_593)">
                        <path
                            d="M38.4375 10.9201V34.8368C38.4375 36.7238 36.9078 38.2534 35.0208 38.2534H14.5208H11.1042C9.21714 38.2534 7.6875 36.7238 7.6875 34.8368V17.7534H14.5208"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M38.4375 10.9201H14.5208V34.8368C14.5208 36.7238 12.9912 38.2534 11.1042 38.2534"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21.3542 17.7534H31.6042"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21.3542 24.5868H28.1875"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </div>
            <div>
                <h1 className="text-sm text-slate-400">E-News</h1>
            </div>
        </Link>
    );
}

export default EnewsBtn;
