import { useState } from "react";

function CopyLinkBtn({ newslink }) {
    const link = newslink;
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(link)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Gagal menyalin tautan: ", error);
            });
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <button onClick={copyToClipboard} className="w-7">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16"
                                stroke="#1e293b"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>

            {isCopied ? (
                <div className="absolute m-auto">
                    <div className="bg-green-400 text-slate-700 px-6 py-3 rounded-lg">
                        Link Disalin!
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}

export default CopyLinkBtn;
