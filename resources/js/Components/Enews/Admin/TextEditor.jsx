import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

function TextEditor({ desc, setdesc }) {
    const handleChange = (content, delta, source, text) => {
        setdesc(text.getHTML());
    };

    const modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "link"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
        ],
    };

    return (
        <ReactQuill
            theme="bubble"
            modules={modules}
            value={desc}
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl"
        />
    );
}

export default TextEditor;
