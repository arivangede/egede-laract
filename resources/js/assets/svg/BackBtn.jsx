function BackBtn({ color }) {
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0606 11.9999L15.5303 17.4696L14.4696 18.5303L7.93928 11.9999L14.4696 5.46961L15.5303 6.53027L10.0606 11.9999Z"
                    fill={color}
                ></path>
            </g>
        </svg>
    );
}

export default BackBtn;
