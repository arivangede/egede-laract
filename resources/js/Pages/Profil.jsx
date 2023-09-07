import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";

const Profil = () => {
    return (
        <>
            <Navbar active={"Profil"} />
            <div className="entrance">
                <Head title="Profil" />
                <h1>Halaman Profil</h1>
                <Link href="/logout">Logout</Link>
            </div>
        </>
    );
};
export default Profil;
