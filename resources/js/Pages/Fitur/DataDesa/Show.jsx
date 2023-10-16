import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";

function Show(props) {
    console.log(props);
    return (
        <>
            <Head title={props.dataPenduduk[0].nama} />
            <div className="min-h-screen bg-slate-50 flex flex-col justify-between gap-8">
                <div className="w-9">
                    <Link href="/data-desa/analisa-data">
                        <BackBtn color={"#334155"} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Show;
