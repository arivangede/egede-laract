import { useState } from "react";

function FormEnews() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [photoFile, setPhotoFile] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formText, photoFile);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center px-4">
            <div className="w-full h-full bg-white shadow rounded-xl flex flex-col justify-center items-center p-4">
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
                    <input
                        type="textarea"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border-slate-200 rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default FormEnews;
