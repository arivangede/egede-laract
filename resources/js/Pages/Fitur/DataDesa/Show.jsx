import KeluargaCard from "@/Components/DataDesa/AnalisaData/KeluargaCard";
import BackBtn from "@/assets/svg/BackBtn";
import { Head, Link } from "@inertiajs/react";

function Show(props) {
    const data = props.dataPenduduk;
    const usia = props.usia;

    console.log(props);

    const handleBack = () => {
        history.back();
    };
    return (
        <>
            <Head title={data.nama} />
            <div className="min-h-screen bg-slate-50 flex flex-col gap-10 pt-12 pb-8 px-4">
                <div className="w-9">
                    {props.nullback != "true" && (
                        <div
                            onClick={handleBack}
                            href="/data-desa/analisa-data"
                        >
                            <BackBtn color={"#334155"} />
                        </div>
                    )}
                </div>
                <div
                    className={`entrance min-h-[40rem] bg-white w-full flex flex-col items-center p-4 ${
                        props.nullback == "true" && "mt-10"
                    } rounded-xl shadow`}
                >
                    <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center -mt-16">
                        <img
                            src={
                                !data.foto
                                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    : "/storage/" + data.foto
                            }
                            alt="foto"
                            className="w-28 h-28 object-cover object-center "
                        />
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn mt-4"
                        onClick={() =>
                            document.getElementById("foto_profile").showModal()
                        }
                    >
                        lihat foto
                    </button>
                    <dialog id="foto_profile" className="modal">
                        <div className="modal-box p-0">
                            <img
                                src={
                                    !data.foto
                                        ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                        : "/storage/" + data.foto
                                }
                                alt="foto"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">NIK :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.nik}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Nama :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.nama}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            No Telepon :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.no_hp}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Email :</span>
                        <h1
                            className={`text-base  ${
                                data.email ? "text-slate-600" : "text-slate-300"
                            } font-bold`}
                        >
                            {data.email
                                ? data.email
                                : "Email belum diisi oleh penduduk"}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Alamat :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.alamat}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Dusun :</span>
                        <h1
                            className={`text-base  ${
                                data.dusun_id
                                    ? "text-slate-600"
                                    : "text-slate-300"
                            } font-bold`}
                        >
                            {!data.dusun_id
                                ? "Belum ada data dusun"
                                : data.dusun.nama_dusun}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Desa :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.desa.nama_desa}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Kecamatan :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.desa.kecamatan}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Kota :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.desa.kota}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Provinsi :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.desa.provinsi}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Jenis kelamin :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.jenis_kelamin}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Pekerjaan :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.pekerjaan}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Pendidikan terakhir :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.pendidikan_terakhir}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Tempat / Tanggal lahir :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.tempat_lahir} / {data.tanggal_lahir}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Usia (saat ini) :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {usia.usia} tahun
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Suku Bangsa :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.suku_bangsa}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Kewarganegaraan :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.kewarganegaraan}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">Agama :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.agama}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Status pernikahan :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.stt_nikah}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">No KK :</span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.no_kk}
                        </h1>
                    </div>
                    <div className="w-full p-2 border-b">
                        <span className="text-sm text-slate-500">
                            Status dalam keluarga :
                        </span>
                        <h1 className="text-base text-slate-600 font-bold">
                            {data.kepala_keluarga == data.nik
                                ? "Kepala Keluarga"
                                : "Anggota Keluarga"}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-16 p-4 -mt-8">
                    <h1 className="font-bold text-center">
                        Keluarga {data.nama}{" "}
                        <span className="whitespace-nowrap">(Menurut KK)</span>
                    </h1>
                    <div className="flex flex-wrap justify-around items-center w-full gap-4">
                        {!props.dataKeluarga.length ? (
                            <h1 className="text-slate-500 text-center">
                                Data Keluarga untuk penduduk ini tidak ditemukan
                            </h1>
                        ) : (
                            <KeluargaCard data={props.dataKeluarga} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Show;
