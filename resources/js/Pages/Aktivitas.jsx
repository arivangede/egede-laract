import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Aktivitas = (props) => {
    return (
        <>
            <Navbar active={"Aktivitas"} />
            <div className="entrance">
                <Head title="Aktivitas" />
                <h1>Halaman Aktivitas</h1>
            </div>
        </>
    );
};

export default Aktivitas;
