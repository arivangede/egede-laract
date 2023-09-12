function Enews({ color, bgcolor }) {
    console.log("svg color :", color);
    console.log("svg bgcolor :", bgcolor);
    return (
        <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-3.2 -3.2 38.40 38.40"
            xmlSpace="preserve"
            fill={bgcolor}
            stroke={color}
        >
            <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
            >
                <path
                    transform="translate(-3.2, -3.2), scale(2.4)"
                    d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                    strokeWidth="0"
                ></path>
            </g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M22,6v18c0,1.6,1.3,3,3,3h0c1.6,0,3-1.3,3-3v-9l-6,0"
                ></path>{" "}
                <path
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M22,6v18c0,1.3,0.8,2.4,2,2.8V27H8H7c-1.7,0-3-1.4-3-3V6H22z"
                ></path>{" "}
                <line
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    x1="8"
                    y1="11"
                    x2="14"
                    y2="11"
                ></line>{" "}
                <line
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    x1="8"
                    y1="15"
                    x2="10"
                    y2="15"
                ></line>{" "}
            </g>
        </svg>
    );
}

export default Enews;
