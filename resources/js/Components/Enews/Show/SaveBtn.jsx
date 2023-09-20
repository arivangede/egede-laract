import { useState } from "react";

function SaveBtn() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={`w-6 flex justify-center items-center ${
                    isClicked ? "clicked" : ""
                }`}
            >
                {isClicked ? (
                    <svg
                        viewBox="-4 0 30 30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Icon-Set-Filled"
                                    transform="translate(-419.000000, -153.000000)"
                                    fill="#1e293b"
                                    stroke="#1e293b"
                                    strokeWidth={2}
                                >
                                    <path
                                        d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153"
                                        id="bookmark"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                ) : (
                    <svg
                        viewBox="-4 0 30 30"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Icon-Set-Filled"
                                    transform="translate(-419.000000, -153.000000)"
                                    stroke="#1e293b"
                                    strokeWidth={2}
                                >
                                    <path
                                        d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153"
                                        id="bookmark"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                )}
            </button>
        </>
    );
}

export default SaveBtn;
