import { useState } from "react";

function FormEnews() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [photoFile, setPhotoFile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title: title, desc: desc, photoFile: photoFile });
    };

    return (
        <div className="w-full flex flex-col justify-center items-center px-4">
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
                <div className="w-full flex flex-col">
                    <h1>Deskripsi :</h1>
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                        className="border-slate-200 rounded-xl"
                    />
                </div>
                <div className="w-full">
                    <button
                        onClick={() =>
                            document.querySelector("#postPhoto").click()
                        }
                        className="rounded-full h-12 w-12 shadow border border-slate-300 text-sm"
                    >
                        photo
                    </button>
                    <input
                        type="file"
                        id="postPhoto"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setPhotoFile(file);
                        }}
                        hidden
                    />
                </div>
                <button
                    className="border py-2 px-4 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default FormEnews;
