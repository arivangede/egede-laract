import { useState } from "react";
import TextEditor from "./TextEditor";
import Photo from "@/assets/svg/Photo";
import noPhoto from "@/assets/img/no-photo-available.png";
import LikeBtn from "../Show/LikeBtn";
import ShareBtn from "../Show/ShareBtn";
import SaveBtn from "../Show/SaveBtn";
import { router } from "@inertiajs/react";

function FormEnews({ author, desaID }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [photoFile, setPhotoFile] = useState("");
    const [urlPhoto, setUrlPhoto] = useState("");

    const location = window.location.pathname;
    const category =
        location == "/create-pengumuman"
            ? "pengumuman"
            : location == "/create-berita"
            ? "berita"
            : "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            desc: desc,
            photoFile: photoFile,
            author: author,
            category: category,
            desaID: desaID,
            jenis: "desa",
        };
        console.log(data);
        router.post("/create-pengumuman", data);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center px-4 gap-4 pb-10">
            <div className="w-full h-full bg-white shadow rounded-xl flex flex-col justify-center items-center p-4 gap-4">
                <div className="w-full flex flex-col">
                    <h1>Judul :</h1>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border-slate-200 rounded-xl"
                    />
                </div>
                <div className="w-full h-full flex flex-col">
                    <h1>Deskripsi :</h1>
                    <TextEditor desc={desc} setdesc={setDesc} />
                </div>
                <div className="w-full h-full flex items-center gap-4">
                    <button
                        onClick={() =>
                            document.querySelector("#postPhoto").click()
                        }
                        className={`rounded-full h-12 w-12 shadow border border-slate-300 text-sm p-2 ${
                            photoFile ? "bg-green-400" : ""
                        }`}
                    >
                        <Photo color={photoFile ? "#fff" : "#444"} />
                    </button>
                    <input
                        type="file"
                        id="postPhoto"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setUrlPhoto(URL.createObjectURL(file));
                            setPhotoFile(file);
                        }}
                        hidden
                    />
                    {photoFile.name && <h1>{photoFile.name}</h1>}
                </div>
                <button
                    className="border py-2 px-4 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <div className="w-full rounded-xl flex flex-col items-center py-2 px-4 bg-white shadow-lg">
                <h1 className="font-bold tracking-wide text-lg">Preview</h1>
                <div className="w-full flex gap-4 flex-wrap">
                    <h1 className="font-bold">Judul:</h1>
                    <div
                        dangerouslySetInnerHTML={{ __html: title }}
                        className="break-all"
                    />
                </div>
                <div className="w-full border border-slate-400 rounded-xl overflow-hidden min-h-[50vh]">
                    {/* <img src="" alt="" /> */}
                    <div className="w-full flex flex-col">
                        <div className="w-full h-60 border border-b flex items-center justify-center">
                            <img
                                src={
                                    urlPhoto
                                        ? urlPhoto
                                        : photoFile
                                        ? photoFile
                                        : noPhoto
                                }
                                alt="photo"
                                className="object-center object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full flex justify-between items-center p-4 gap-2 relative">
                            <div className="absolute h-full w-full left-0"></div>
                            <div className="flex gap-2">
                                <LikeBtn />
                                <span>999 suka</span>
                                <ShareBtn />
                            </div>
                            <div className="flex gap-2">
                                <SaveBtn />
                            </div>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{ __html: desc }}
                            className="w-full post py-2 px-2 break-words"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormEnews;
