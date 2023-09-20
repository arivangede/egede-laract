import { useState } from "react";
import { router } from "@inertiajs/react";

function LikeBtn({ userId, newsId, onLikeChange, liked }) {
    const [isLiked, setIsLiked] = useState(liked);
    console.log("liked:", isLiked);
    console.log("user_id", userId);
    console.log("news_id", newsId);

    const handleLike = () => {
        if (isLiked) {
            const data = { user_id: userId, news_id: newsId };
            router.post(`/likes/${newsId}`, data);
            setIsLiked(false);
            console.log("hapus");
        } else {
            router.post("/likes", { news_id: newsId });
            setIsLiked(true);
            console.log("buat");
        }

        if (onLikeChange) {
            onLikeChange(isLiked);
        }
    };

    return (
        <>
            <button
                onClick={handleLike}
                className={`w-6 flex justify-center items-center ${
                    isLiked ? "clicked" : ""
                }`}
            >
                <svg
                    viewBox="0 0 32 32"
                    enableBackground="new 0 0 32 32"
                    id="Stock_cut"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="none"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <desc></desc>
                        <path
                            d="M28.343,17.48L16,29 L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55 C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
                            fill={isLiked ? "#ff4344" : "none"}
                            stroke={isLiked ? "#ff4344" : "#1e293b"}
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                        ></path>
                    </g>
                </svg>
            </button>
        </>
    );
}

export default LikeBtn;
