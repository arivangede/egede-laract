import { useState } from "react";
import TextEditor from "./TextEditor";

function FormEnews() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [photoFile, setPhotoFile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title: title, desc: desc, photoFile: photoFile };
        console.log(data);
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
                <div className="w-full h-full flex flex-col">
                    <h1>Deskripsi :</h1>
                    <TextEditor desc={desc} setdesc={setDesc} />
                </div>
                <div className="w-full h-full flex items-center gap-4">
                    <button
                        onClick={() =>
                            document.querySelector("#postPhoto").click()
                        }
                        className={`rounded-full h-12 w-12 shadow border border-slate-300 text-sm ${
                            photoFile ? "bg-green-400" : ""
                        }`}
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
                    {photoFile.name && <h1>{photoFile.name}</h1>}
                </div>
                <button
                    className="border py-2 px-4 rounded-lg"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: desc }}
                className="w-full break-all"
            />
        </div>
    );
}

export default FormEnews;
