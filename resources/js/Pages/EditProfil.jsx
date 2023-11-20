import BackBtn from "@/assets/svg/BackBtn";
import EditIcon from "@/assets/svg/EditIcon";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

function EditProfil(props) {
    console.log(props);
    const dataPenduduk = props.auth.penduduk;
    const dataDesa = props.auth.desa;
    const defaultPict =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    const [fotoProfil, setFotoProfil] = useState(dataPenduduk.foto);
    const [temporaryUrlPhoto, setTemporaryUrlPhoto] = useState(null);

    const [alamat, setAlamat] = useState(dataPenduduk.alamat);
    const [tempatLahir, setTempatLahir] = useState(dataPenduduk.tempat_lahir);
    const [tglLahir, setTglLahir] = useState(dataPenduduk.tanggal_lahir);
    const [jenisKelamin, setJenisKelamin] = useState(
        dataPenduduk.jenis_kelamin
    );
    const [agama, setAgama] = useState(dataPenduduk.agama);
    const [kewarganegaraan, setKewarganegaraan] = useState(
        dataPenduduk.kewarganegaraan
    );
    const [pendidikan, setPendidikan] = useState(
        dataPenduduk.pendidikan_terakhir
    );
    const [pekerjaan, setPekerjaan] = useState(dataPenduduk.pekerjaan);
    const [penghasilan, setPenghasilan] = useState(dataPenduduk.penghasilan);
    const [sukuBangsa, setSukuBangsa] = useState(dataPenduduk.suku_bangsa);
    const [statusNikah, setStatusNikah] = useState(dataPenduduk.stt_nikah);

    const [dusun, setDusun] = useState(dataPenduduk.dusun_id);
    const [desa, setDesa] = useState(dataDesa.nama_desa);
    const [kecamatan, setKecamatan] = useState(dataDesa.kecamatan);
    const [kota, setKota] = useState(dataDesa.kota);
    const [provinsi, setprovinsi] = useState(dataDesa.provinsi);

    const [email, setEmail] = useState(dataPenduduk.email);
    const [telpon, setTelpon] = useState(dataPenduduk.no_hp);

    const [error, setError] = useState({});
    const [popup, setpopup] = useState(false);
    const [input, setInput] = useState(false);
    const [update, setUpdate] = useState(false);
    const [changes, setChanges] = useState(false);
    const [destroy, setDestroy] = useState(false);
    const [formChanged, setFormChanged] = useState(false);

    const formData = {
        alamat: alamat,
        tempatLahir: tempatLahir,
        tglLahir: tglLahir,
        jenisKelamin: jenisKelamin,
        statusNikah: statusNikah,
        agama: agama,
        kewarganegaraan: kewarganegaraan,
        pendidikan: pendidikan,
        pekerjaan: pekerjaan,
        penghasilan: penghasilan,
        sukuBangsa: sukuBangsa,
        dusun: dusun,
        email: email,
        telpon: telpon,
    };

    const agamaList = [
        "Hindu",
        "Islam",
        "Budha",
        "Kristen",
        "Katolik",
        "Kong Hu Chu",
        "Lainnya",
    ];
    const pendidikanList = [
        "Tidak Sekolah",
        "SD/Sederajat",
        "SMP/Sederajat",
        "SMA/Sederajat",
        "Diploma I/II/II",
        "S1/Sederajat",
        "S2/Sederajat",
        "S3/Sederajat",
        "Pesantren / Seminari / Wihara",
    ];
    const statusNikahList = ["Kawin", "Tidak Kawin", "Duda/Janda"];

    const editProfile = () => {
        const data = {
            tempatLahir: tempatLahir,
            tglLahir: tglLahir,
            jenisKelamin: jenisKelamin,
            agama: agama,
            sukuBangsa: sukuBangsa,
            kewarganegaraan: kewarganegaraan,
            pendidikanTerakhir: pendidikan,
            pekerjaan: pekerjaan,
            penghasilan: penghasilan,
            alamat: alamat,
            dusun: dusun,
            email: email,
            noTelp: telpon,
        };
        router.post("/dataku/editprofil", data);
    };

    useEffect(() => {
        if (changes == true) {
            const data = { foto: fotoProfil };
            router.post("/changeprofile", data);

            if (!props.errors.foto) {
                setInput(true);
            }
        }
    }, [update]);

    const updatePhoto = () => {
        const data = { update: update, foto: fotoProfil };
        router.post("/changeprofile", data);
        setInput(false);
        setUpdate(false);
        setChanges(false);
    };

    const deletePhoto = () => {
        const data = { destroy: destroy };
        router.post("/deleteprofile", data);
        setUpdate(false);
        setDestroy(false);
        setChanges(true);
        setInput(false);
        setFotoProfil(null);
        setTemporaryUrlPhoto(null);
    };

    useEffect(() => {
        const initialData = {
            alamat: dataPenduduk.alamat,
            tempatLahir: dataPenduduk.tempat_lahir,
            tglLahir: dataPenduduk.tanggal_lahir,
            jenisKelamin: dataPenduduk.jenis_kelamin,
            statusNikah: dataPenduduk.stt_nikah,
            agama: dataPenduduk.agama,
            kewarganegaraan: dataPenduduk.kewarganegaraan,
            pendidikan: dataPenduduk.pendidikan_terakhir,
            pekerjaan: dataPenduduk.pekerjaan,
            penghasilan: dataPenduduk.penghasilan,
            sukuBangsa: dataPenduduk.suku_bangsa,
            dusun: dataPenduduk.dusun_id,
            email: dataPenduduk.email,
            telpon: dataPenduduk.no_hp,
        };

        const isFormChanged =
            JSON.stringify(initialData) !== JSON.stringify(formData);

        setFormChanged(isFormChanged);
    }, [formData, editProfile]);

    const isError =
        error.sukuBangsa || error.tempatLahir || error.email || error.pekerjaan;
    const anyServerErrorMsg = Object.keys(props.errors).length;
    const serverErrorMsg = Object.keys(props.errors);
    const formattedValue = Number(
        penghasilan.replace(/\./g, "")
    ).toLocaleString("id-ID");

    console.log("foto :", fotoProfil, temporaryUrlPhoto);
    console.log("state :", input, changes, update);
    return (
        <>
            <Head title="Edit Profil" />
            <div className="min-h-screen bg-slate-50 py-8 px-4 text-slate-600 flex flex-col items-center gap-4">
                <div className="w-full flex justify-start">
                    <Link href="/dataku" className="flex items-center">
                        <div className="h-8 w-8">
                            <BackBtn color={"#1e293b"} />
                        </div>
                        <h1>Kembali</h1>
                    </Link>
                </div>

                {anyServerErrorMsg ? (
                    <div
                        className={`${
                            anyServerErrorMsg ? "" : "scale-0"
                        } h-full w-full px-4 transition duration-200 origin-top flex justify-center items-center`}
                    >
                        <div
                            className={`${
                                anyServerErrorMsg ? "" : "hidden"
                            } alert alert-error flex items-center text-xs`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <div className="flex flex-col gap-2">
                                {serverErrorMsg.map((error, index) => (
                                    <span className="text-start" key={index}>
                                        {props.errors[error]}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {props.flash.message ? (
                    <div
                        className={`${
                            props.flash.message ? "scale-100" : "scale-0"
                        } h-full w-full px-4 transition duration-200 origin-top flex justify-center items-center`}
                    >
                        <div
                            className={`${
                                props.flash.message ? "" : "hidden"
                            } alert alert-success flex text-xs`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{props.flash.message}</span>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <div className="entrance h-full w-full flex flex-col gap-2 items-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="w-24 h-24 relative">
                            <div className="w-full h-full rounded-full overflow-hidden ">
                                <img
                                    src={
                                        temporaryUrlPhoto
                                            ? temporaryUrlPhoto
                                            : fotoProfil
                                            ? "/storage/" + fotoProfil
                                            : defaultPict
                                    }
                                    alt="profil"
                                    className="object-cover object-center w-full h-full"
                                />
                            </div>
                            <form
                                onClick={() => setpopup(!popup)}
                                className="absolute bottom-0 right-1 p-2 rounded-full bg-white overflow-hidden h-8 w-8 shadow"
                            >
                                <input
                                    type="file"
                                    id="changeProfile"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];

                                        setFotoProfil(file);
                                        setTemporaryUrlPhoto(
                                            URL.createObjectURL(file)
                                        );
                                        setChanges(true);
                                        setUpdate(true);
                                        setInput(false);
                                    }}
                                    hidden
                                />
                                <EditIcon color={"#64748b"} />
                            </form>
                        </div>
                        <div
                            className={`${
                                popup == true ? "scale-100" : "scale-0"
                            } transition duration-200 absolute right-0 w-max h-max rounded-xl p-2 flex flex-col justify-normal items-start gap-1`}
                        >
                            <button
                                onClick={() =>
                                    document
                                        .querySelector("#changeProfile")
                                        .click()
                                }
                                className="border rounded-xl p-2 bg-white shadow text-sm"
                            >
                                {dataPenduduk.foto
                                    ? "Ganti Foto Profil"
                                    : "Tambah Foto Profil"}
                            </button>
                            {dataPenduduk.foto ? (
                                <button
                                    onClick={() => (
                                        setDestroy(true),
                                        setpopup(false),
                                        document
                                            .getElementById("my_modal_1")
                                            .showModal()
                                    )}
                                    className="border rounded-xl p-2 bg-red-400 text-white shadow text-sm"
                                >
                                    Hapus Foto Profil
                                </button>
                            ) : (
                                ""
                            )}
                        </div>

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                    Halo, {dataPenduduk.nama}!
                                </h3>
                                <p className="py-4">
                                    Apakah kamu yakin untuk menghapus foto
                                    profil kamu?
                                </p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button
                                            onClick={deletePhoto}
                                            className="btn btn-error"
                                        >
                                            Ya
                                        </button>
                                        <button
                                            onClick={() => setDestroy(false)}
                                            className="btn"
                                        >
                                            Batal
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <div
                            className={`${
                                input == true && !props.errors.foto
                                    ? "scale-100"
                                    : "scale-0"
                            } transition duration-200 absolute right-0 w-max h-max rounded-xl p-2 flex flex-col justify-normal items-start gap-1`}
                        >
                            <button
                                onClick={updatePhoto}
                                className="border rounded-xl p-2 bg-white shadow text-sm"
                            >
                                Simpan
                            </button>
                            <button
                                onClick={() => (
                                    setFotoProfil(dataPenduduk.foto),
                                    setTemporaryUrlPhoto(null),
                                    setInput(false),
                                    setUpdate(false),
                                    setChanges(false)
                                )}
                                className="border rounded-xl p-2 bg-red-400 text-white shadow text-sm"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                    <button
                        className="btn "
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
                                    temporaryUrlPhoto
                                        ? temporaryUrlPhoto
                                        : fotoProfil
                                        ? "/storage/" + fotoProfil
                                        : defaultPict
                                }
                                alt="foto"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <div className="w-full flex flex-col gap-2 text-slate-700">
                        <div className="w-full border p-4 rounded-xl flex flex-col items-center gap-2 shadow">
                            <h1 className="text-lg font-bold">Data Diri</h1>
                            <div className="w-full flex flex-col">
                                <h1>Kartu Keluarga</h1>
                                <input
                                    type="text"
                                    accept="number"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={dataPenduduk.no_kk}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>NIK</h1>
                                <input
                                    type="text"
                                    accept="number"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={dataPenduduk.nik}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Nama Lengkap</h1>
                                <input
                                    type="text"
                                    accept="number"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={dataPenduduk.nama}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Tempat Lahir</h1>
                                <input
                                    type="text"
                                    accept="number"
                                    className={`rounded-xl ${
                                        props.errors.tempatLahir || isError
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    value={tempatLahir}
                                    onChange={(tempatLahir) => {
                                        const inputValue =
                                            tempatLahir.target.value;
                                        const sanitized = inputValue.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                        );

                                        if (sanitized !== inputValue) {
                                            setError({
                                                tempatLahir:
                                                    "Hanya boleh berisi huruf dan spasi.",
                                            });
                                        } else {
                                            setError({ tempatLahir: null });
                                        }

                                        setTempatLahir(inputValue);
                                    }}
                                />
                                {error.tempatLahir ? (
                                    <span className="text-red-500 text-xs">
                                        {error.tempatLahir}
                                    </span>
                                ) : props.errors.tempatLahir ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.tempatLahir}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Tanggal Lahir</h1>
                                <input
                                    type="date"
                                    accept="number"
                                    className="rounded-xl border-slate-300"
                                    value={tglLahir}
                                    onChange={(tglLahir) =>
                                        setTglLahir(tglLahir.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Jenis Kelamin</h1>
                                <select
                                    name="jk"
                                    id="jk"
                                    value={jenisKelamin}
                                    onChange={(jenisKelamin) =>
                                        setJenisKelamin(
                                            jenisKelamin.target.value
                                        )
                                    }
                                    className="rounded-xl border-slate-300"
                                >
                                    <option value="laki-laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Status Nikah</h1>
                                <select
                                    name="statusNikah"
                                    id="statusNikah"
                                    value={statusNikah}
                                    onChange={(statusNikah) =>
                                        setStatusNikah(statusNikah.target.value)
                                    }
                                    className="rounded-xl border-slate-300"
                                >
                                    <option value="">Pilih</option>
                                    {statusNikahList.map((opt, i) => (
                                        <option key={i} value={opt}>
                                            {opt}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Agama</h1>
                                <select
                                    name="agama"
                                    id="agama"
                                    value={agama}
                                    onChange={(agama) =>
                                        setAgama(agama.target.value)
                                    }
                                    className="rounded-xl border-slate-300"
                                >
                                    {agamaList.map((option, i) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Suku Bangsa</h1>
                                <input
                                    type="text"
                                    className={`rounded-xl ${
                                        props.errors.sukuBangsa || isError
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    value={sukuBangsa}
                                    onChange={(sukuBangsa) => {
                                        const inputValue =
                                            sukuBangsa.target.value;
                                        const sanitized = inputValue.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                        );

                                        if (sanitized !== inputValue) {
                                            setError({
                                                sukuBangsa:
                                                    "Hanya boleh berisi huruf dan spasi.",
                                            });
                                        } else {
                                            setError({
                                                sukuBangsa: null,
                                            });
                                        }

                                        setSukuBangsa(inputValue);
                                    }}
                                />
                                {error.sukuBangsa ? (
                                    <span className="text-red-500 text-xs">
                                        {error.sukuBangsa}
                                    </span>
                                ) : props.errors.sukuBangsa ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.sukuBangsa}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Kewarganegaraan</h1>
                                <select
                                    name="kewarganegaraan"
                                    id="kewarganegaraan"
                                    value={kewarganegaraan}
                                    onChange={(kewarganegaraan) =>
                                        setKewarganegaraan(
                                            kewarganegaraan.target.value
                                        )
                                    }
                                    className="rounded-xl border-slate-300"
                                >
                                    <option value="WNA">WNA</option>
                                    <option value="WNI">WNI</option>
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Pendidikan Terakhir</h1>
                                <select
                                    name="kewarganegaraan"
                                    id="kewarganegaraan"
                                    value={pendidikan}
                                    onChange={(pendidikan) =>
                                        setPendidikan(pendidikan.target.value)
                                    }
                                    className="rounded-xl border-slate-300"
                                >
                                    {pendidikanList.map((option, i) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Pekerjaan</h1>
                                <input
                                    type="text"
                                    className={`rounded-xl ${
                                        props.errors.pekerjaan || isError
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    value={pekerjaan}
                                    onChange={(pekerjaan) => {
                                        const inputValue =
                                            pekerjaan.target.value;
                                        const sanitized = inputValue.replace(
                                            /[^A-Za-z\s]/g,
                                            ""
                                        );

                                        if (sanitized !== inputValue) {
                                            setError({
                                                pekerjaan:
                                                    "Hanya boleh berisi huruf dan spasi.",
                                            });
                                        } else {
                                            setError({
                                                pekerjaan: null,
                                            });
                                        }

                                        setPekerjaan(inputValue);
                                    }}
                                />
                                {error.pekerjaan ? (
                                    <span className="text-red-500 text-xs">
                                        {error.pekerjaan}
                                    </span>
                                ) : props.errors.pekerjaan ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.pekerjaan}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Penghasilan</h1>
                                <div className="flex items-center w-full gap-2">
                                    <h1>Rp.</h1>
                                    <input
                                        type="text"
                                        className="rounded-xl border-slate-300"
                                        value={formattedValue}
                                        onChange={(event) => {
                                            const inputValue =
                                                event.target.value;
                                            const sanitizedValue =
                                                inputValue.replace(
                                                    /[^0-9]/g,
                                                    ""
                                                );
                                            setPenghasilan(sanitizedValue);
                                        }}
                                    />
                                    <h1>per tahun</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border p-4 rounded-xl flex flex-col items-center gap-2 shadow">
                            <h1 className="text-lg font-bold">
                                Lokasi Tinggal
                            </h1>
                            <div className="w-full flex flex-col">
                                <h1>Alamat</h1>
                                <input
                                    type="text"
                                    className={`rounded-xl ${
                                        props.errors.alamat
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    value={alamat}
                                    onChange={(alamat) =>
                                        setAlamat(alamat.target.value)
                                    }
                                />
                                {props.errors.alamat ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.alamat}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Dusun</h1>
                                <select
                                    name="dusun"
                                    id="dusun"
                                    className="rounded-xl border-slate-300"
                                    onChange={(e) => setDusun(e.target.value)}
                                    value={dusun}
                                >
                                    <option value="">Pilih Dusun</option>
                                    {props.listDusun.map((option) => (
                                        <option
                                            key={option.id}
                                            value={option.id}
                                        >
                                            {option.nama_dusun}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Desa</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={desa}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Kecamatan</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={kecamatan}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Kota</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={kota}
                                    disabled
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Provinsi</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300 bg-slate-200"
                                    value={provinsi}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="w-full border p-4 rounded-xl flex flex-col items-center gap-2 shadow">
                            <h1 className="text-lg font-bold">Kontak</h1>
                            <div className="w-full flex flex-col">
                                <h1>Email</h1>
                                <input
                                    type="email"
                                    className={`rounded-xl ${
                                        props.errors.email
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {props.errors.email ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.email}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>No. Telpon</h1>
                                <input
                                    type="text"
                                    className={`rounded-xl ${
                                        props.errors.noTelp
                                            ? "border-red-500"
                                            : "border-slate-300"
                                    }`}
                                    value={telpon}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const sanitizedValue =
                                            inputValue.replace(/[^0-9]/g, "");
                                        setTelpon(sanitizedValue);
                                    }}
                                />
                                {props.errors.noTelp ? (
                                    <span className="text-red-500 text-xs">
                                        {props.errors.noTelp}
                                    </span>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button
                            className={`w-full ${
                                formChanged == false || isError
                                    ? "bg-slate-300"
                                    : "bg-green-400"
                            } text-white p-4 rounded-xl shadow-sm text-xl font-bold`}
                            onClick={editProfile}
                            disabled={
                                formChanged == false || isError ? true : false
                            }
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfil;
