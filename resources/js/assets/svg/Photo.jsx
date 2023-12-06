import React from "react";

function Photo({ color }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
                    stroke={color}
                    strokeWidth="2"
                ></path>
                <path
                    d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M21 13.6702C18.9068 12.0667 17.4778 12.2919 15.198 14.3459"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                ></path>
                <path
                    d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z"
                    stroke={color}
                    strokeWidth="2"
                ></path>
            </g>
        </svg>
    );
}

export default Photo;
