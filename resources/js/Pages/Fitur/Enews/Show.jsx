import LikeBtn from "@/Components/Enews/Show/LikeBtn";
import SaveBtn from "@/Components/Enews/Show/SaveBtn";
import ShareBtn from "@/Components/Enews/Show/ShareBtn";
import ShowCarousel from "@/Components/Enews/Show/ShowCarousel";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

function Show(props) {
    const like = props.likes_count;
    const [likeCount, setLikeCount] = useState(like);

    console.log(props);
    const handleLikeChange = (isLiked) => {
        // Jika tombol "Like" diklik, tambahkan like
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            // Jika tombol "Unlike" diklik, kurangi like
            setLikeCount(likeCount + 1);
        }
    };

    const handleBack = () => {
        history.back();
    };

    return (
        <>
            <Head title={props.berita.title} />

            <div className="entrance rounded-t-2xl flex flex-col items-center text-slate-800 bg-slate-50 min-h-screen pt-8">
                <div className="w-full flex p-4">
                    <div onClick={handleBack} className="w-8">
                        <BackBtn color={"#1e293b"} />
                    </div>
                </div>
                <div className="w-full px-4 py-2">
                    <div className="flex items-center">
                        <span className="text-sm text-slate-500">
                            {props.berita.created_at} |
                        </span>
                        <span className="text-sm pl-1">
                            {props.berita.desa.nama_desa}
                        </span>
                    </div>
                    <h1 className="text-xl font-bold leading-6">
                        {props.berita.title}
                    </h1>
                </div>
                <ShowCarousel carousel={props.berita.image} />
                <div className="w-full flex justify-between items-center p-4 gap-2">
                    <div className="flex items-center gap-2">
                        <LikeBtn
                            userId={props.auth.user.id}
                            newsId={props.berita.id}
                            onLikeChange={handleLikeChange}
                            liked={props.liked}
                        />
                        <span>{likeCount} suka</span>
                        {/* <ShareBtn
                            newsId={props.berita.id}
                            newsTitle={props.berita.title}
                        /> */}
                    </div>
                    <div className="flex gap-2">
                        <SaveBtn
                            userId={props.auth.user.id}
                            newsId={props.berita.id}
                            bookmarked={props.bookmarked}
                        />
                    </div>
                </div>

                <div className="w-full px-4 flex flex-col gap-2">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: props.berita.content,
                        }}
                        className="w-full break-words text-justify post"
                    />
                </div>
            </div>
        </>
    );
}

export default Show;
