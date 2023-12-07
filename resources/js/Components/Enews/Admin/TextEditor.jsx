import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function TextEditor({ desc, setdesc, error }) {
    const handleChange = (content, delta, source, text) => {
        setdesc(text.getHTML());
    };

    const modules = {
        toolbar: [
            [{ size: ["small", false, "large"] }],
            ["bold", "italic", "underline", "link"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
        ],
    };

    return (
        <>
            <ReactQuill
                theme="bubble"
                modules={modules}
                value={desc}
                onChange={handleChange}
                className={`${
                    error.title ? "border-red-400" : "border-slate-200"
                } rounded-xl w-full post border`}
            />
            {error.title ? (
                <span className="text-sm text-red-400">{error.title}</span>
            ) : (
                ""
            )}
        </>
    );
}

export default TextEditor;
