import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";

function AnalisaData() {
    return (
        <>
            <Head title="Analisa Data" />
            <Link href="/data-desa">
                <BackBtn color={"#000"} />
            </Link>
        </>
    );
}

export default AnalisaData;
