import { Head } from "@inertiajs/react";

function Show(props) {
    console.log(props);
    return (
        <>
            <Head title={props.berita.title} />
            <div>
                <img src={props.berita.image} alt="image" />
                <h1>{props.berita.title}</h1>
                <span>{props.berita.author} ||</span>
                <span> {props.berita.date}</span>
                <p>{props.berita.content}</p>
            </div>
        </>
    );
}

export default Show;
