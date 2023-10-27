import BackBtn from "@/assets/svg/BackBtn";
import EditIcon from "@/assets/svg/EditIcon";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

function EditProfil(props) {
    console.log(props);
    const dataPenduduk = props.auth.penduduk;
    const dataDesa = props.auth.desa;

    const [fotoProfil, setFotoProfil] = useState(dataPenduduk.foto);

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
    const [telpon, setTelpon] = useState(dataPenduduk.no_hp);

    const [dusun, setDusun] = useState(dataPenduduk.dusun);
    const [desa, setDesa] = useState(dataDesa.nama_desa);
    const [kecamatan, setKecamatan] = useState(dataDesa.kecamatan);
    const [kota, setKota] = useState(dataDesa.kota);

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

    return (
        <>
            <Head title="Edit Profil" />
            <div className="min-h-screen bg-slate-50 py-8 px-4 text-slate-600 flex flex-col items-center gap-8">
                <div className="w-full">
                    <Link href="/dataku" className="flex items-center">
                        <div className="h-8 w-8">
                            <BackBtn color={"#1e293b"} />
                        </div>
                        <h1>Kembali</h1>
                    </Link>
                </div>
                <div className="entrance h-full w-full flex flex-col gap-6 items-center">
                    <div className="w-full flex justify-center items-center">
                        <div className="w-24 h-24 relative">
                            <div className="w-full h-full rounded-full overflow-hidden ">
                                <img
                                    src={
                                        fotoProfil != null
                                            ? fotoProfil
                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    }
                                    alt="profil"
                                    className="object-cover object-center"
                                />
                            </div>
                            <form
                                onClick={() =>
                                    document
                                        .querySelector("#changeProfile")
                                        .click()
                                }
                                className="absolute bottom-0 right-1 p-2 rounded-full bg-white overflow-hidden h-8 w-8 shadow"
                            >
                                <input
                                    type="file"
                                    id="changeProfile"
                                    accept="image/*"
                                    onChange={(fotoProfil) =>
                                        setFotoProfil(fotoProfil.target.value)
                                    }
                                    hidden
                                />
                                <EditIcon color={"#64748b"} />
                            </form>
                            <h1 className="text-center">foto profil</h1>
                        </div>
                    </div>
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
                                    className="rounded-xl border-slate-300"
                                    value={tempatLahir}
                                    onChange={(tempatLahir) =>
                                        setTempatLahir(tempatLahir.target.value)
                                    }
                                />
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
                                    className="rounded-xl border-slate-300"
                                    value={sukuBangsa}
                                    onChange={(sukuBangsa) =>
                                        setSukuBangsa(sukuBangsa.target.value)
                                    }
                                />
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
                                    className="rounded-xl border-slate-300"
                                    value={pekerjaan}
                                    onChange={(pekerjaan) =>
                                        setPekerjaan(pekerjaan.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Penghasilan</h1>
                                <div className="flex items-center w-full gap-2">
                                    <h1>Rp.</h1>
                                    <input
                                        type="number"
                                        className="rounded-xl border-slate-300"
                                        value={
                                            penghasilan >= 0 ? penghasilan : 0
                                        }
                                        onChange={(event) => {
                                            const newPenghasilan = parseFloat(
                                                event.target.value
                                            );
                                            setPenghasilan(
                                                newPenghasilan >= 0
                                                    ? newPenghasilan
                                                    : 0
                                            );
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
                                    className="rounded-xl border-slate-300"
                                    value={alamat}
                                    onChange={(alamat) =>
                                        setAlamat(alamat.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Dusun</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    placeholder="Dusun"
                                    value={dusun}
                                    onChange={(dusun) =>
                                        setDusun(dusun.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Desa</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    value={desa}
                                    onChange={(desa) =>
                                        setDesa(desa.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Kecamatan</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    value={kecamatan}
                                    onChange={(kecamatan) =>
                                        setKecamatan(kecamatan.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>Kota</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    value={kota}
                                    onChange={(kota) =>
                                        setKota(kota.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full border p-4 rounded-xl flex flex-col items-center gap-2 shadow">
                            <h1 className="text-lg font-bold">Kontak</h1>
                            <div className="w-full flex flex-col">
                                <h1>Email</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <h1>No. Telpon</h1>
                                <input
                                    type="text"
                                    className="rounded-xl border-slate-300"
                                    value={telpon}
                                    onChange={(telpon) =>
                                        setTelpon(telpon.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfil;
