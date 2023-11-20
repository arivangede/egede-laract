import FormEnews from "@/Components/Enews/Admin/FormEnews";
import LimitBar from "@/Components/Enews/Admin/LimitBar";
import BackBtn from "@/assets/svg/BackBtn";
import { Head } from "@inertiajs/react";

function Form(props) {
    const handleBack = () => {
        history.back();
    };

    console.log(props);
    return (
        <>
            <Head title="Buat Pengumuman" />
            <div className="bg-slate-50 min-h-screen">
                <div className="entrance flex flex-col items-center gap-4 w-full h-full">
                    <div className="w-full p-4 flex items-center">
                        <button onClick={handleBack} className="w-8 h-8">
                            <BackBtn color={"#1e293b"} />
                        </button>

                        <h1 className="text-bold text-slate-600 text-lg">
                            Form Pengumuman
                        </h1>
                    </div>

                    <FormEnews />
                    <LimitBar pengumumanCount={props.pengumuman} />
                </div>
            </div>
        </>
    );
}

export default Form;
