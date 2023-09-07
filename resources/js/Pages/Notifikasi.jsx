import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const Notifikasi = () => {
    return (
        <>
            <Navbar active={"Notifikasi"} />
            <div className="entrance">
                <Head title="Notifikasi" />
                <h1>Halaman Notifikasi</h1>
            </div>
        </>
    );
};

export default Notifikasi;
