import FormEnews from "@/Components/Enews/Admin/FormEnews";
import LimitBar from "@/Components/Enews/Admin/LimitBar";
import BackBtn from "@/assets/svg/BackBtn";
import { Head } from "@inertiajs/react";

function Form(props) {
    const handleBack = () => {
        history.back();
    };
    console.log(props);

    const location = window.location.pathname;
    const title =
        location == "/create-pengumuman"
            ? "pengumuman"
            : location == "/create-berita"
            ? "berita"
            : "";
    return (
        <>
            <Head title={`Buat ` + title} />
            <div className="bg-slate-50 min-h-screen">
                <div className="entrance flex flex-col items-center gap-4 w-full h-full">
                    <div className="w-full p-4 flex items-center">
                        <button onClick={handleBack} className="w-8 h-8">
                            <BackBtn color={"#1e293b"} />
                        </button>

                        <h1 className="text-bold text-slate-600 text-lg capitalize">
                            Form {title}
                        </h1>
                    </div>

                    <LimitBar
                        pengumumanCount={props.enewscount}
                        title={title}
                    />
                    <FormEnews
                        author={props.auth.user.id}
                        desaID={props.auth.user.desa_id}
                        error={props.errors}
                    />
                </div>
            </div>
        </>
    );
}

export default Form;
