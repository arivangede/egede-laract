import PDFfile from "@/Components/Regulasi/PDFfile";
import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";

const Show = (props) => {
    console.log(props);
    const data = props.data;
    return (
        <div className="entrance w-full min-h-screen bg-white">
            <div className="w-full flex px-4 items-center bg-slate-50 pb-4 pt-12">
                <Link href="/regulasi-desa" className="w-8 h-8">
                    <BackBtn color={"#1e293b"} />
                </Link>
                <h1 className="font-extrabold text-lg">
                    {data.jenis} No.{data.no_regulasi} Tahun {data.tahun}
                </h1>
            </div>

            <div className="px-4 py-2 flex flex-col items-center justify-between gap-4">
                <div className="w-full flex flex-col justify-between items-center gap-2">
                    <PDFfile data={props.data.file_path} />
                </div>
            </div>
        </div>
    );
};

export default Show;
