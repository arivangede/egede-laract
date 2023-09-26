import LikeBtn from "@/Components/Enews/Show/LikeBtn";
import SaveBtn from "@/Components/Enews/Show/SaveBtn";
import ShareBtn from "@/Components/Enews/Show/ShareBtn";
import ShowCarousel from "@/Components/Enews/Show/ShowCarousel";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

function Show(props) {
    console.log(props);
    const newslink = "http://127.0.0.1:8000/e-news/";

    const like = props.likes_count;
    const [likeCount, setLikeCount] = useState(like);

    const handleLikeChange = (isLiked) => {
        // Jika tombol "Like" diklik, tambahkan like
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            // Jika tombol "Unlike" diklik, kurangi like
            setLikeCount(likeCount + 1);
        }
    };

    return (
        <>
            <Head title={props.berita.title} />

            <div className="entrance rounded-t-2xl flex flex-col items-center text-slate-800 bg-slate-50 min-h-screen">
                <div className="w-full flex p-4">
                    <div className="w-8">
                        <Link href="/e-news">
                            <BackBtn color={"#1e293b"} />
                        </Link>
                    </div>
                </div>
                <div className="w-full px-4 py-2">
                    <div className="flex items-center">
                        <span className="text-sm text-slate-500">
                            {props.berita.created_at} |
                        </span>
                        <span className="text-sm pl-1">
                            {props.berita.users.username}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold leading-6">
                        {props.berita.title}
                    </h1>
                </div>
                <ShowCarousel carousel={props.berita.image} />
                <div className="w-full flex justify-between items-center p-4 gap-2">
                    <div className="flex gap-2">
                        <LikeBtn
                            userId={props.auth.user.id}
                            newsId={props.berita.id}
                            onLikeChange={handleLikeChange}
                            liked={props.liked}
                        />
                        <span>{likeCount} suka</span>
                        <ShareBtn />
                    </div>
                    <div className="flex gap-2">
                        <SaveBtn />
                    </div>
                </div>

                <div className="px-4 flex flex-col gap-2">
                    <p className="text-justify indent-4">
                        {props.berita.content}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Show;
