import ChartAdmin from "@/Components/Enews/Admin/ChartAdmin";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";

function PanelAdmin(props) {
    console.log(props);
    return (
        <div className="min-h-screen bg-gradient-to-bl from-red-200 from-10% to-slate-50 to-30%">
            <div className="w-full h-full flex flex-col gap-5 px-4 entrance">
                <div className="flex items-center gap-4 pt-4">
                    <div className="h-8 w-8">
                        <Link href="/e-news">
                            <BackBtn color={"#1e293b"} />
                        </Link>
                    </div>
                    <h1 className="text-slate-600 text-lg">Panel Admin</h1>
                </div>
                <div className="w-full h-full flex flex-col items-center gap-4 border rounded-xl p-4">
                    <h1 className="w-full font-bold">E-News</h1>
                    <ChartAdmin datachart={props.datachart} />
                    <div className="flex justify-center items-center gap-4">
                        <h1>Berita: {props.datachart[0].jumlah}</h1>
                        <h1>Pengumuman: {props.datachart[1].jumlah}</h1>
                    </div>
                    <Link className="border border-red-500 text-red-500 font-bold text-lg py-2 px-4 rounded-full shadow hover:bg-red-400 hover:text-white transition duration-200">
                        <h1>Lihat Detail</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PanelAdmin;
