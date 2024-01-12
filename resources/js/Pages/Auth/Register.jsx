import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

function Register(props) {
    const [isAgree, setIsAgree] = useState(false);
    const [isOpen, setIsOpen] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        namaLengkap: "",
        nik: "",
        email: "",
        nohp: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/register", {
            username: formData.username,
            namaLengkap: formData.namaLengkap,
            nik: formData.nik,
            email: formData.email,
            nohp: "+62" + formData.nohp,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            isAgree: isAgree,
        });
        console.log(formData);
    };

    console.log(props);
    console.log(isOpen);
    return (
        <>
            <Head title="Register" />
            <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-red-200 from-10% to-slate-50 to-25% p-8">
                {!props.message ? (
                    ""
                ) : (
                    <div
                        role="alert"
                        className="alert bg-transparent shadow-lg flex items-center justify-center flex-wrap gap-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>{props.message}</span>
                    </div>
                )}

                <div className="entrance w-full max-w-xs bg-transparent backdrop-blur shadow-lg rounded-xl flex flex-col items-center gap-4 px-8 py-8 text-slate-600 border-2 border-white">
                    <h1 className="text-xl font-bold">Register</h1>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Username"
                            className={`${
                                !props.errors.username
                                    ? "border-slate-200"
                                    : "border-red-400 focus:border-red-400 focus:ring-red-400"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                        />
                        {props.errors.username && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.username}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Nama Lengkap (Sesuai KTP)"
                            className={`${
                                !props.errors.namaLengkap
                                    ? "border-slate-200"
                                    : "border-red-400 focus:border-red-400 focus:ring-red-400"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.namaLengkap}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    namaLengkap: e.target.value,
                                })
                            }
                        />
                        {props.errors.namaLengkap && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.namaLengkap}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="NIK"
                            className={`${
                                !props.errors.nik
                                    ? "border-slate-200"
                                    : "border-red-400 focus:border-red-400 focus:ring-red-400"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.nik}
                            onChange={(e) => {
                                const value = e.target.value;
                                const sanitizedValue = value.replace(
                                    /[^0-9]/g,
                                    ""
                                );
                                setFormData({
                                    ...formData,
                                    nik: sanitizedValue,
                                });
                            }}
                        />
                        {props.errors.nik && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.nik}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            className={`${
                                !props.errors.email
                                    ? "border-slate-200"
                                    : "border-red-400 focus:border-red-400 focus:ring-red-400"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />
                        {props.errors.email && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.email}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <span>+62</span>
                            <input
                                type="text"
                                placeholder="No Telepon/HP"
                                className={`${
                                    !props.errors.nohp
                                        ? "border-slate-200"
                                        : "border-red-400 focus:border-red-400 focus:ring-red-400"
                                } rounded-lg w-full bg-transparent`}
                                value={formData.nohp}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    const sanitizedValue = value.replace(
                                        /[^0-9]/g,
                                        ""
                                    );
                                    setFormData({
                                        ...formData,
                                        nohp: sanitizedValue,
                                    });
                                }}
                            />
                        </div>

                        {props.errors.nohp && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.nohp}
                            </span>
                        )}
                    </div>
                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            className={`${
                                !props.errors.password
                                    ? "border-slate-200"
                                    : "border-red-400 focus:border-red-400 focus:ring-red-400"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                        {props.errors.password && (
                            <span className="px-4 text-xs text-red-400">
                                {props.errors.password}
                            </span>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className={`${
                                formData.confirmPassword == "" &&
                                !props.errors.confirmPassword
                                    ? "border-slate-200"
                                    : formData.confirmPassword !=
                                      formData.password
                                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                                    : props.errors.confirmPassword
                                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                                    : "border-slate-200"
                            } rounded-lg w-full bg-transparent`}
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />

                        {formData.confirmPassword == "" &&
                        !props.errors.confirmPassword ? (
                            ""
                        ) : formData.confirmPassword != formData.password ? (
                            <span className="text-red-400 text-xs">
                                Kolom Password dan Confirm Password tidak sama
                            </span>
                        ) : props.errors.confirmPassword ? (
                            <span className="text-red-400 text-xs">
                                {props.errors.confirmPassword}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <label className="cursor-pointer label">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-error focus:ring-0"
                                onChange={() => setIsAgree(!isAgree)}
                            />
                        </label>
                        <button
                            className="underline"
                            onClick={() =>
                                document.getElementById("s&k").showModal()
                            }
                        >
                            Syarat & Ketentuan
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={isAgree == true ? false : true}
                        className={`${
                            isAgree == true
                                ? "bg-red-400 hover:bg-transparent hover:border-red-400 hover:text-red-400 border-red-400"
                                : "bg-slate-400 border-slate-400"
                        } flex justify-center items-center text-white font-bold py-2 px-4 rounded-full mt-4 border  transition duration-200 `}
                    >
                        <i className="bx bx-right-arrow-alt text-2xl"></i>
                    </button>
                    <span className="text-slate-600 text-sm">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="underline font-bold">
                            Login
                        </Link>
                    </span>
                </div>
                <dialog id="s&k" className="modal">
                    <div className="modal-box h-auto flex flex-col justify-between items-center gap-4">
                        <h3 className="font-bold text-lg">
                            Syarat & Ketentuan
                        </h3>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                onClick={() => setIsOpen(1)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 1 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pengantar
                                </div>
                                <div className="collapse-content text-sm flex flex-col gap-2 text-justify">
                                    <p>
                                        Selamat datang di situs resmi milik PT
                                        Bali Gerbang Digital (“BGD“). Halaman
                                        ini berisi Ketentuan Umum Pengguna bagi
                                        setiap individu yang menggunakan Layanan
                                        dan/atau jasa E-GEDE (“Ketentuan
                                        Penggunaan”). Ketentuan Penggunaan ini
                                        menjelaskan bagaimana kami, melakukan
                                        penyelenggaraan Layanan karena Anda
                                        menggunakan Layanan dan/atau jasa E-GEDE
                                    </p>
                                    <p>
                                        Dengan mengakses halaman ini dan
                                        menggunakan Layanan, berarti Anda dan
                                        BGD terikat dalam suatu perjanjian. Maka
                                        dari itu, Anda dianggap telah memahami
                                        dan menyatakan setuju untuk terikat pada
                                        ketentuan yang berlaku. BGD mengimbau
                                        agar Anda membaca Ketentuan Penggunaan
                                        ini dengan seksama.
                                    </p>
                                    <p>
                                        Dalam hal Anda berusia di bawah
                                        persyaratan usia minimum atau termasuk
                                        dalam kategori anak sesuai dengan
                                        ketentuan peraturan perundang-undangan
                                        yang berlaku, maka persetujuan untuk
                                        menggunakan Layanan harus diberikan oleh
                                        orang tua (bapak atau ibu) atau wali
                                        dari Pengguna sesuai dengan ketentuan
                                        peraturan perundang-undangan yang
                                        berlaku.
                                    </p>
                                    <p>
                                        Ketentuan Penggunaan ini berlaku bagi
                                        seluruh Pengguna Layanan E-GEDE.
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(2)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 2 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Definisi
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            "Aplikasi" merujuk pada E-GEDE, yang
                                            dimiliki oleh PT. Bali Gerbang
                                            Digital.
                                        </li>
                                        <li>
                                            "Pengguna" merujuk pada individu
                                            yang mendaftar dan menggunakan
                                            Aplikasi.
                                        </li>
                                        <li>
                                            "Data Pribadi" merujuk pada
                                            informasi pribadi Pengguna, seperti
                                            nama, alamat email, nomor telepon,
                                            dan informasi lain yang dapat
                                            diidentifikasi.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(3)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 3 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pendaftaran dan Pengumpulan Data Pribadi
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            Penggunaan Aplikasi memerlukan
                                            pendaftaran. Pengguna harus
                                            memberikan data pribadi yang akurat
                                            dan terbaru secara mandiri dan
                                            sukarela
                                        </li>
                                        <li>
                                            Data pribadi yang dikumpulkan akan
                                            digunakan untuk tujuan yang telah
                                            dijelaskan dalam Kebijakan Privasi
                                            Aplikasi.
                                        </li>
                                        <li>
                                            Pengguna bertanggung jawab untuk
                                            menjaga kerahasiaan kata sandi
                                            mereka dan tidak boleh membagikannya
                                            kepada pihak ketiga.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(4)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 4 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Data Pribadi
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <p>
                                            Dalam rangka pendaftaran, kami akan
                                            mengumpulkan, mengolah, dan
                                            menyimpan data pribadi Anda.
                                            Pengumpulan dan pengolahan data akan
                                            diatur oleh Kebijakan Privasi kami.
                                        </p>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(5)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 5 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Persyaratan Penggunaan
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            Anda adalah individu yang telah
                                            cakap untuk mengadakan perjanjian
                                            yang mengikat termasuk pada
                                            Ketentuan Penggunaan ini dan untuk
                                            menggunakan Layanan yang disediakan.
                                        </li>
                                        <li>
                                            Anda bertanggung jawab atas
                                            informasi yang Anda bagikan dan
                                            tindakan yang Anda ambil melalui
                                            aplikasi.
                                        </li>
                                        <li>
                                            Sebelum menggunakan dan mendapatkan
                                            Layanan, Anda harus menyetujui
                                            Ketentuan Penggunaan ini dan
                                            Kebijakan Privasi, serta
                                            mendaftarkan diri Anda dengan
                                            memberikan informasi yang dibutuhkan
                                            oleh E-GEDE.
                                        </li>
                                        <li>
                                            Anda bertanggung jawab penuh untuk
                                            menjaga kerahasiaan username,
                                            password, email, maupun kode
                                            verifikasi one-time password (OTP)
                                            atas akun untuk semua aktivitas yang
                                            dilakukan melalui Layanan ini,
                                            termasuk, namun tidak terbatas, pada
                                            setiap risiko dan/atau kerugian yang
                                            muncul sebagai akibat dari
                                            terjadinya penyalahgunaan akun oleh
                                            pihak ketiga. BGD berhak menganggap
                                            bahwa akses Anda terhadap Layanan,
                                            termasuk penggunaan akun dan
                                            password, merupakan akses yang
                                            dilakukan oleh Anda secara sah.
                                            Dengan ini Anda membebaskan BGD dari
                                            segala tuntutan yang mungkin timbul
                                            dalam bentuk apapun dan dari pihak
                                            manapun.
                                        </li>
                                        <li>
                                            BGD tidak akan meminta username,
                                            password, maupun OTP atas akun Anda
                                            untuk alasan apapun. Maka dari itu,
                                            BGD mengimbau Anda untuk tidak
                                            memberikan data tersebut maupun
                                            informasi penting lainnya kepada
                                            pihak yang mengatasnamakan BGD atau
                                            pihak lain yang tidak dapat dijamin
                                            kredibilitasnya.
                                        </li>
                                        <li>
                                            Anda menyatakan bahwa BGD tidak
                                            bertanggung jawab atas kerugian
                                            ataupun kendala yang timbul atas
                                            penyalahgunaan Layanan yang
                                            diakibatkan oleh kelalaian Anda,
                                            termasuk, namun tidak terbatas, pada
                                            pemberian akses Layanan kepada pihak
                                            lain, mengakses link atau tautan
                                            yang diberikan oleh pihak lain,
                                            memberikan atau memperlihatkan
                                            username, password, email, maupun
                                            OTP kepada pihak lain, maupun
                                            kelalaian lainnya yang mengakibatkan
                                            kerugian ataupun kendala pada
                                            Layanan.
                                        </li>
                                        <li>
                                            Anda dilarang menciptakan dan/atau
                                            menggunakan perangkat, software,
                                            fitur, dan/atau alat lainnya untuk
                                            memanipulasi atas Layanan yang
                                            tersedia, termasuk, namun tidak
                                            terbatas, pada: (i) manipulasi data
                                            Pengguna; (ii) kegiatan spamming;
                                            (iii) manipulasi engagement konten;
                                            (vi) aktivitas lain yang secara
                                            wajar dapat dinilai sebagai tindakan
                                            manipulasi sistem.
                                        </li>
                                        <li>
                                            BGD memiliki kewenangan untuk
                                            melakukan tindakan yang dianggap
                                            perlu atas setiap dugaan pelanggaran
                                            terhadap Ketentuan Penggunaan
                                            dan/atau hukum yang berlaku tanpa
                                            pemberitahuan terlebih dahulu kepada
                                            Anda. Tindakan yang dapat dilakukan
                                            antara lain, namun tidak terbatas,
                                            pada penghentian Layanan dan/atau
                                            tindakan lainnya sesuai dengan
                                            ketentuan hukum yang berlaku
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(6)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 6 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pembatasan Tanggung Jawab
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            BGD tidak menjamin bahwa: (i)
                                            Layanan akan selalu memenuhi
                                            kebutuhan Anda atau akan selalu
                                            dapat diakses; (ii) Layanan tidak
                                            akan terganggu, tepat waktu, aman,
                                            dan bebas dari kesalahan apapun;
                                            (iii) kualitas, informasi atau
                                            materi lain yang berada di dalam
                                            Layanan akan selalu memenuhi harapan
                                            Anda.
                                        </li>
                                        <li>
                                            BGD tidak bertanggung jawab atas
                                            setiap perbuatan tidak jujur, tindak
                                            pidana, penipuan, kelalaian,
                                            pelanggaran berat terhadap peraturan
                                            perundang-undangan, atau perbuatan
                                            jahat yang dilakukan oleh pihak yang
                                            tidak bertanggung jawab melalui
                                            Layanan ini.
                                        </li>
                                        <li>
                                            BGD tidak bertanggung jawab dalam
                                            hal terjadinya kerugian kepada Anda
                                            saat menggunakan Layanan ini karena
                                            alasan force majeure sebagaimana
                                            dijelaskan dalam Ketentuan
                                            Penggunaan ini.
                                        </li>
                                        <li>
                                            Anda mengetahui, memahami, serta
                                            menyetujui bahwa BGD tidak
                                            bertanggung jawab atas konten
                                            dan/atau tautan yang terdapat
                                            Layanan. Anda bertanggung jawab atas
                                            resiko ketika mengakses dan
                                            menggunakan konten dan/atau tautan
                                            milik Pihak Ketiga tersebut. Dan
                                            disarankan Anda juga dapat membaca
                                            serta memahami isi dari syarat dan
                                            ketentuan yang berlaku di
                                            konten/tautan milik Pihak Ketiga
                                            tersebut.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                onClick={() => setIsOpen(7)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 7 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Keamanan Data Pribadi
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            Kami akan mengambil langkah-langkah
                                            yang wajar untuk melindungi data
                                            pribadi Pengguna dari akses,
                                            penggunaan, atau pengungkapan yang
                                            tidak sah.
                                        </li>
                                        <li>
                                            Meskipun demikian, Pengguna harus
                                            memahami bahwa keamanan data
                                            sepenuhnya tidak dapat dijamin, dan
                                            Pengguna bertanggung jawab atas
                                            keamanan akun mereka.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(8)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 8 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Keamanan Akun
                                </div>
                                <div className="collapse-content text-sm">
                                    <p className="text-justify">
                                        Anda bertanggung jawab untuk menjaga
                                        keamanan akun Anda. Jangan berbagi
                                        informasi masuk Anda dengan orang lain.
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(9)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 9 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pemblokiran dan/atau Penangguhan
                                </div>
                                <div className="collapse-content text-sm">
                                    <p className="text-justify">
                                        BGD berhak, menurut kebijaksanaan dan
                                        kenyamanan seluruh penggunanya, untuk
                                        melakukan pemblokiran dan/atau
                                        penangguhan Layanan apabila terjadi
                                        hal-hal seperti, namun tidak terbatas,
                                        pada: (i) permintaan resmi dari instansi
                                        yang berwenang; (ii) indikasi
                                        penyalahgunaan dengan cara apapun
                                        sehingga menimbulkan kerugian baik bagi
                                        BGD maupun bagi Pengguna lainnya; (iii)
                                        pelanggaran Pengguna atas Ketentuan
                                        Penggunaan; (iv) penggunaan Layanan
                                        diduga kuat dan disertai bukti valid
                                        digunakan untuk melakukan perbuatan
                                        melanggar hukum seperti, namun tidak
                                        terbatas, pada penipuan sesuai ketentuan
                                        peraturan perundang-undangan yang
                                        berlaku di Indonesia. Atas pemblokiran
                                        dan penangguhan Layanan tersebut, Anda
                                        tidak dapat menuntut ganti rugi apapun
                                        dari BGD
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(10)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 10 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Penarikan Layanan dan Penghapusan Akun
                                </div>
                                <div className="collapse-content text-sm">
                                    <div className="text-justify text-sm gap-2 flex flex-col">
                                        <div>
                                            <h1 className="font-bold">
                                                Penarikan Layanan{" "}
                                            </h1>
                                            <p>
                                                BGD berhak menarik
                                                kembali/reclaim Layanan dari
                                                Anda baik sementara waktu maupun
                                                sepenuhnya dalam hal terjadi
                                                kesalahan teknis dan/atau
                                                penyalahgunaan Layanan dengan
                                                adanya pemberitahuan terlebih
                                                dahulu dan Anda setuju untuk
                                                membebaskan BGD dari segala
                                                tuntutan dan tanggung jawab
                                                hukum dengan tetap memperhatikan
                                                hak-hak Anda.
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="font-bold">
                                                Penghapusan Akun
                                            </h1>
                                            <ul className="p-0">
                                                <li>
                                                    Pengguna memiliki hak untuk
                                                    menarik diri dari penggunaan
                                                    Aplikasi dan meminta
                                                    penghapusan akun mereka.
                                                </li>
                                                <li>
                                                    Permintaan penghapusan akun
                                                    akan diproses sesuai dengan
                                                    ketentuan dalam Kebijakan
                                                    Privasi.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(11)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 11 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Jaminan Kerahasiaan
                                </div>
                                <div className="collapse-content text-sm">
                                    <div className="text-justify text-sm gap-2 flex flex-col">
                                        <p>
                                            Kerahasiaan Data Informasi Anda
                                            adalah hal yang terpenting bagi BGD.
                                            BGD akan memberlakukan upaya terbaik
                                            untuk melindungi dan mengamankan
                                            Data Informasi Anda dari akses
                                            ilegal oleh pihak-pihak yang tidak
                                            berwenang. BGD akan berusaha sebaik
                                            mungkin untuk menjaga keamanan dan
                                            melindungi Data Informasi Anda. BGD
                                            dengan ini menjamin keutuhan dan
                                            keakuratan Data Informasi apa pun
                                            yang Anda kirimkan melalui Layanan
                                            dengan melakukan verifikasi dan BGD
                                            juga menjamin akan melakukan upaya
                                            terbaik untuk mencegah Data
                                            Informasi tersebut dicegat, diakses,
                                            diungkapkan, diubah atau dihancurkan
                                            oleh pihak ketiga yang tidak
                                            berwenang.
                                        </p>
                                        <p>
                                            Anda bertanggung jawab untuk menjaga
                                            kerahasiaan detail data Anda,
                                            termasuk username, password, email
                                            maupun OTP dengan siapapun dan harus
                                            selalu menjaga dan bertanggung jawab
                                            atas keamanan perangkat yang Anda
                                            gunakan. Anda akan membebaskan BGD
                                            dari segala bentuk kerugian atau
                                            tuntutan dalam hal Anda lalai dalam
                                            menjaga kerahasiaan detail akun
                                            Anda, termasuk username, password,
                                            email maupun OTP, serta dalam hal
                                            Anda lalai dalam menjaga keamanan
                                            perangkat yang Anda gunakan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(12)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 12 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pembaruan Layanan
                                </div>
                                <div className="collapse-content text-sm">
                                    <ul className="text-justify p-0">
                                        <li>
                                            BGD berhak sewaktu-waktu untuk
                                            memperbarui Layanan yang mencakup
                                            pada perubahan dan penyesuaian
                                            terhadap jenis fitur, manfaat
                                            (benefit) dan/atau layanan turunan
                                            lainnya yang terdapat pada layanan,
                                            dengan pertimbangan seperti namun
                                            tidak terbatas pada: (i) ditetapkan,
                                            diminta, diperintah, atau
                                            diinstruksikan oleh peraturan
                                            perundang-undangan atau pihak yang
                                            berwenang; (ii) sudah tidak sesuai
                                            dengan perkembangan zaman dan
                                            teknologi terkini; (iii) sudah tidak
                                            digunakan lagi dan akan dialihkan
                                            kepada Layanan yang sejenis; dan
                                            (iv) pertimbangan-pertimbangan lain
                                            yang dapat diterima oleh BGD.
                                        </li>
                                        <li>
                                            Kecuali ditentukan lain oleh BGD dan
                                            dengan tetap memperhatikan hak-hak
                                            Anda sebagai pengguna, pembaruan
                                            terhadap Layanan akan dapat
                                            berdampak pada dilakukannya
                                            perpindahan (migrasi) atas Layanan
                                            yang sedang digunakan Pengguna.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(13)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 13 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pembaruan Ketentuan Penggunaan
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Ketentuan Penggunaan ini dapat diubah
                                        dan/atau diperbarui dari waktu ke waktu.
                                        Sehubungan dengan hal ini, BGD akan
                                        memberitahukan perubahan dan/atau
                                        pembaruan tersebut kepada Pengguna
                                        sesuai dengan ketentuan peraturan
                                        perundang-undangan yang berlaku.
                                    </p>
                                    <p>
                                        Dengan melakukan klik persetujuan pada
                                        bagian bawah Ketentuan Penggunaan ini,
                                        atau apabila Anda tetap mengakses dan
                                        menggunakan Layanan ini setelah
                                        pemberitahuan pembaruan dari BGD, maka
                                        Anda dianggap menyetujui
                                        perubahan-perubahan atas Ketentuan
                                        Penggunaan ini, sepanjang
                                        perubahan-perubahan tersebut tidak
                                        menyangkut perubahan tujuan Pemrosesan
                                        data pribadi Anda
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(14)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 14 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Larangan
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Selama menggunakan Layanan ini, Anda
                                        ataupun pihak ketiga yang berkaitan
                                        lainnya dilarang untuk menggunakan
                                        Layanan ini dalam hal:
                                    </p>
                                    <ul className="p-0">
                                        <li className="font-bold">
                                            Kegiatan yang tidak sah.
                                            <p className="font-normal">
                                                Kegiatan yang melanggar
                                                undang-undang yang berlaku,
                                                ketentuan atau peraturan,
                                                termasuk tetapi tidak terbatas
                                                pada undang-undang tentang
                                                kerahasiaan komunikasi dan
                                                penyadapan.{" "}
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Kegiatan yang berbahaya atau menipu.
                                            <p className="font-normal">
                                                Kegiatan yang mungkin berbahaya
                                                bagi Pengguna lainnya atas
                                                layanan, operasinya, atau
                                                reputasinya, termasuk tetapi
                                                tidak terbatas pada menawari
                                                atau menyebarluaskan barang,
                                                layanan, program atau promosi
                                                yang menipu atau menjalankan
                                                praktek-praktek penipuan
                                                lainnya.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Pelanggaran Konten.
                                            <p className="font-normal">
                                                Konten yang melanggar atau
                                                menyalahgunakan hak kekayaan
                                                intelektual atau hak kepemilikan
                                                orang lain.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Konten yang menyerang.
                                            <p className="font-normal">
                                                Konten fitnah, cabul,
                                                melecehkan, invasif privasi,
                                                menyerang, tidak senonoh atau
                                                konten yang tidak menyenangkan
                                                lainnya.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Konten yang berbahaya.
                                            <p className="font-normal">
                                                Kontent atau teknologi komputer
                                                lainnya yang mungkin
                                                membahayakan, mengganggu,
                                                menyadap dengan diam-diam, atau
                                                mengambil alih sistem, program
                                                atau data apapun, termasuk
                                                virus, Trojan horse, worm, time
                                                bom atau cancelbot.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Spam.
                                            <p className="font-normal">
                                                Kegiatan yang terkait dengan
                                                spam, termasuk distribusi,
                                                publikasi, pengiriman, atau
                                                fasilitasi pengiriman e-mail,
                                                promosi, iklan atau permohonan
                                                secara massal tanpa diminta,
                                                termasuk iklan komersial dan
                                                pengumuman informasi.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Pelanggaran Keamanan.
                                            <p className="font-normal">
                                                Penggunaan Layanan ini untuk
                                                melanggar keamanan atau
                                                integritas jaringan, komputer
                                                atau sistem komunikasi, aplikasi
                                                perangkat lunak atau perangkat
                                                jaringan atau komputasi.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Penggunaan Komersial atau yang tidak
                                            sah.
                                            <p className="font-normal">
                                                Penggunaan Layanan untuk usaha
                                                yang menghasilkan pendapatan,
                                                perusahaan komersial atau tujuan
                                                lainnya yang tidak sah menurut
                                                Ketentuan Penggunaan ini atau
                                                tidak sesuai dengan Perjanjian
                                                kerjasama yang disepakati antara
                                                BGD dan Anda.
                                            </p>
                                        </li>
                                        <li className="font-bold">
                                            Penyalahgunaan Jaringan.
                                            <p className="font-normal">
                                                Penggunaan Layanan untuk
                                                melakukan penyalahgunaan
                                                jaringan, termasuk serangan
                                                terhadap komputer atau server di
                                                dalam jaringan internet atau
                                                keterlibatan yang disengaja
                                                dengan fungsi yang benar pada
                                                jaringan, komputer atau sistem
                                                komunikasi, aplikasi perangkat
                                                lunak atau perangkat jaringan
                                                atau komputasi.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(15)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 15 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Pilihan Hukum
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Ketentuan Penggunaan ini akan diatur
                                        oleh dan ditafsirkan sesuai dengan hukum
                                        Republik Indonesia, tanpa memperhatikan
                                        pertentangan aturan hukum. Anda setuju
                                        bahwa tindakan hukum apapun atau
                                        sengketa yang mungkin timbul dari,
                                        berhubungan dengan, atau berada dalam
                                        cara apapun berhubungan dengan Layanan
                                        dan/atau Ketentuan Penggunaan ini akan
                                        diselesaikan dalam yurisdiksi Republik
                                        Indonesia
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(16)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 16 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Keadaan Memaksa/Force Majeure
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Keadaan memaksa adalah kejadian luar
                                        biasa yang terjadi di luar kendali BGD
                                        yang dapat menyebabkan Pengguna tidak
                                        dapat menikmati Layanan, seperti namun
                                        tidak terbatas pada:
                                    </p>
                                    <ul className="p-0">
                                        <li>
                                            Bencana alam seperti gempa bumi,
                                            badai, kecelakaan, banjir, atau
                                            keadaan darurat lainnya yang
                                            ditetapkan oleh Pemerintah;
                                        </li>
                                        <li>
                                            Bencana non-alam, seperti epidemi,
                                            perang, mogok kerja, huru-hara;
                                        </li>
                                        <li>
                                            Tindakan/perbuatan/keadaan pihak
                                            lain sehingga Telkomsel tidak dapat
                                            memberikan jasa pelayanan kepada
                                            Pengguna;
                                        </li>
                                        <li>
                                            Gangguan teknis atau alasan lainnya
                                            di luar kuasa dan kontrol BGD.
                                        </li>
                                        <li>
                                            Instruksi khusus yang ditetapkan
                                            oleh Pemerintah, seperti instruksi
                                            pemutusan akses/jaringan (black out)
                                            dalam mendukung hari raya
                                            keagamanaan pada suatu wilayah
                                            tertentu (hari raya nyepi, dsb),
                                            implementasi sistem tata Kelola
                                            penyelenggaraan sistem elektronik.
                                        </li>
                                    </ul>
                                    <p>
                                        Dalam hal terjadi keadaan memaksa
                                        sebagaimana dimaksud di sini, BGD
                                        dibebaskan dari tanggung jawabnya.
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(17)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 17 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Keberlangsungan Layanan
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Dalam hal terjadinya gangguan atau
                                        keadaan memaksa yang berdampak serius
                                        terhadap Layanan, sehingga Layanan tidak
                                        dapat bekerja sebagaimana mestinya, maka
                                        BGD berusaha sebaik mungkin untuk
                                        membuat suatu rencana kontingensi guna
                                        memastikan keberlangsungan Layanan.
                                        Namun, Anda sepenuhnya memahami kondisi
                                        tersebut dan karenanya BGD tidak dapat
                                        dimintakan pertanggungjawaban atas
                                        kerugian yang mungkin timbul.
                                    </p>
                                </div>
                            </div>

                            <div
                                onClick={() => setIsOpen(18)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 18 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Penerimaan Syarat dan Ketentuan
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Dengan mendaftar dan menggunakan
                                        aplikasi kami, Anda secara otomatis
                                        menyetujui dan mengikatkan diri pada
                                        syarat dan ketentuan ini.
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(19)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 19 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Ketentuan Khusus
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <ul className="p-0">
                                        <li>
                                            Ketentuan Penggunaan ini berlaku
                                            secara umum untuk semua Pengguna
                                            Layanan. Masing-masing Layanan dapat
                                            memiliki ketentuan penggunaan khusus
                                            tersendiri.
                                        </li>
                                        <li>
                                            Ketentuan penggunaan khusus tersebut
                                            melekat pada setiap Layanan yang
                                            kami tawarkan dan akan berlaku bagi
                                            Anda pada saat menggunakan
                                            masing-masing Layanan tersebut.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(20)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 20 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Hubungi Kami
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        Jika Anda memiliki pertanyaan tentang
                                        Ketentuan Penggunaan ini, silahkan
                                        datang langsung ke Kantor PT. Bali
                                        Gerbang Digital JL. Bisma Nomor 33
                                        Denpasar.
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setIsOpen(21)}
                                className="collapse collapse-plus bg-base-200"
                            >
                                <input
                                    type="radio"
                                    name="my-accordion-3"
                                    checked={isOpen === 21 ? "checked" : ""}
                                    readOnly
                                />
                                <div className="collapse-title text-lg font-medium">
                                    Kebijakan Privasi
                                </div>
                                <div className="collapse-content text-sm text-justify flex flex-col gap-2">
                                    <p>
                                        E-Gede merupakan aplikasi yang dikelola
                                        dan dimiliki oleh PT Bali Gerbang
                                        Digital (selanjutnya disebut “Kami”).
                                        Adanya Kebijakan Privasi ini adalah
                                        komitmen nyata dari Kami selaku
                                        pengembang E-Gede (selanjutnya disebut
                                        sebagai “Aplikasi”) untuk menghormati
                                        dan melindungi setiap data dan informasi
                                        pribadi Pengguna Aplikasi. Ketentuan dan
                                        Kebijakan Privasi menetapkan cara
                                        melindungi dan menggunakan data dan
                                        informasi yang Pengguna berikan ketika
                                        mendaftar dan menggunakan Aplikasi. Dari
                                        waktu ke waktu, Kami dapat merevisi
                                        Kebijakan Privasi ini untuk mencerminkan
                                        perubahan dalam hukum, pengumpulan dan
                                        praktik penggunaan Data Pribadi kami,
                                        fitur aplikasi kami, atau kemajuan dalam
                                        teknologi.
                                    </p>
                                    <p>
                                        Dengan mendaftar, menggunakan Aplikasi,
                                        Pengguna menyatakan bahwa setiap data
                                        dan informasi yang diberikan adalah
                                        benar dan sah serta memberikan
                                        persetujuan kepada Kami untuk
                                        memperoleh, mengumpulkan, menyimpan,
                                        mengelola dan mempergunakan data dan
                                        informasi tersebut sesuai dengan
                                        Ketentuan dan Kebijakan Privasi ini.
                                    </p>
                                    <div>
                                        <h1 className="font-bold">
                                            Portal dari kebijakan privasi dan
                                            cookie kami
                                        </h1>
                                        <p>
                                            Privasi Anda sangat penting bagi
                                            kami – sama pentingnya bagi Anda
                                            untuk mengetahui cara kami
                                            menggunakan informasi Anda. Portal
                                            ini memberi Anda informasi penuh
                                            tentang cara kami memperoleh dan
                                            mengumpulkan, mengolah dan
                                            menganalisis, menyimpan, memperbaiki
                                            dan memperbarui, menampilkan,
                                            mengumumkan, mentransfer,
                                            menyebarluaskan, atau mengungkapkan;
                                            dan/atau menghapus atau memusnahkan
                                            informasi pribadi Anda saat Anda
                                            menggunakan layanan kami,{" "}
                                        </p>
                                        <p>
                                            Kami membagi kebijakan ini menjadi
                                            beberapa bagian sehingga Anda dapat
                                            menemukan detail informasi yang Anda
                                            perlukan secepat dan semudah
                                            mungkin.
                                        </p>
                                    </div>
                                    <ul className="p-0">
                                        <li className="font-bold">
                                            Tentang Kebijakan Privasi dan Cookie
                                            Kami
                                            <div className="flex flex-col gap-2">
                                                <p className="font-normal">
                                                    Kebijakan privasi dan cookie
                                                    kami diperbarui dari waktu
                                                    ke waktu. Dengan menekan
                                                    tombol klik atau menyetujui
                                                    tindakan dalam Kebijakan
                                                    Privasi ini (berupa tindakan
                                                    secara elektronik maupun non
                                                    elektronik), atau jika Anda
                                                    terus mengakses dan
                                                    menggunakan Layanan ini
                                                    setelah pemberitahuan
                                                    mengenai pembaruan tersebut
                                                    dari kami, maka Anda
                                                    menyatakan setuju atas
                                                    perubahan Kebijakan Privasi
                                                    ini.
                                                </p>
                                                <div>
                                                    <h1 className="font-bold">
                                                        Bagaimana cara membaca
                                                        kebijakan privasi dan
                                                        cookie ini
                                                    </h1>
                                                    <p className="font-normal">
                                                        Dalam kebijakan ini,
                                                        kami menjelaskan
                                                        bagaimana kami
                                                        mengumpulkan,
                                                        menggunakan, membagikan,
                                                        dan melindungi informasi
                                                        pribadi Anda saat Anda
                                                        menggunakan layanan
                                                        kami.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold">
                                                        Siapa Kami
                                                    </h1>
                                                    <p className="font-normal">
                                                        Kami PT Bali Gerbang
                                                        DIgital (“BGD”), Dalam
                                                        kebijakan privasi ini:
                                                    </p>
                                                    <ul className="p-0">
                                                        <li>
                                                            “kami/kita” berarti
                                                            BGD
                                                        </li>
                                                        <li>
                                                            “pihak ketiga”
                                                            berarti seseorang
                                                            atau pihak tertentu
                                                            yang bukan Anda atau
                                                            kami
                                                        </li>
                                                    </ul>
                                                    <p className="font-normal">
                                                        Kantor terdaftar kami
                                                        adalah Jalan Bisma Nomor
                                                        33, Desa Dauh Puri Kaja,
                                                        Kecamatan Denpasar
                                                        Utara, Kota
                                                        Denpasar-Bali.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold">
                                                        Bagaimana cara
                                                        menghubungi kami
                                                    </h1>
                                                    <p className="font-normal">
                                                        Pendapat Anda sangat
                                                        penting bagi kami – jika
                                                        Anda memiliki pertanyaan
                                                        tentang kebijakan
                                                        privasi kami atau tata
                                                        cara pengaturan privasi
                                                        Anda, kirimkan
                                                        pertanyaan Anda dan
                                                        anggota tim kami akan
                                                        memberikan jawaban
                                                        terbaiknya untuk Anda.
                                                    </p>
                                                    <p className="font-normal">
                                                        Silakan datang langsung
                                                        ke Kantor PT. Bali
                                                        Gerbang Digital.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold">
                                                        Prinsip kami
                                                    </h1>
                                                    <p className="font-normal">
                                                        Kami berkomitmen untuk
                                                        selalu menghormati
                                                        privasi Anda. Kami
                                                        menjaga privasi,
                                                        keamanan, dan mematuhi
                                                        undang-undang
                                                        perlindungan data dengan
                                                        sangat serius untuk
                                                        senantiasa menjaga
                                                        hak-hak Anda.
                                                    </p>
                                                    <p className="font-normal">
                                                        Berikut adalah Komitmen
                                                        Privasi BGD. Kami
                                                        bertujuan untuk
                                                        menempatkan komitmen ini
                                                        sebagai inti dari semua
                                                        yang kami lakukan.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h1 className="font-bold">
                                                        Perolehan Dan Penggunaan
                                                        Data Pengguna
                                                    </h1>
                                                    <p className="font-normal">
                                                        Kami mengumpulkan data
                                                        pengguna untuk mengelola
                                                        dan memperlancar
                                                        penggunaan Aplikasi,
                                                        serta tujuan-tujuan
                                                        lainnya selama diizinkan
                                                        oleh peraturan
                                                        perundang-undangan yang
                                                        berlaku. Adapun data
                                                        Pengguna yang
                                                        dikumpulkan adalah
                                                        sebagai berikut:
                                                    </p>
                                                    <p className="font-normal">
                                                        Data informasi Pengguna
                                                        yang diberikan secara
                                                        mandiri dan sukarela
                                                        pada aplikasi E-Gede
                                                        adalah sebagai berikut :
                                                    </p>
                                                    <ul>
                                                        <li>Username</li>
                                                        <li>
                                                            Nama Lengkap sesuai
                                                            KTP
                                                        </li>
                                                        <li>NIK</li>
                                                        <li>
                                                            Alamat surat
                                                            elektronik (e-mail)
                                                            pengguna
                                                        </li>
                                                        <li>Dan Password</li>
                                                    </ul>
                                                    <p className="font-normal">
                                                        Data informasi yang
                                                        diberikan secara mandiri
                                                        dan sukarela pada
                                                        Aplikasi pada saat
                                                        Pengguna melakukan :
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Pengguna melakukan
                                                            pendaftaran baru
                                                            sebagai peserta
                                                        </li>
                                                        <li>
                                                            Pengguna melakukan
                                                            pendaftaran sebagai
                                                            pengguna Mobile
                                                        </li>
                                                        <li>
                                                            Pengguna memperbarui
                                                            data peserta beserta
                                                            anggota keluarga
                                                            yang terdaftar
                                                        </li>
                                                        <li>
                                                            Pengguna melakukan
                                                            pengaduan keluhan
                                                            pada fitur pengaduan
                                                            keluhan yang kami
                                                            sediakan
                                                        </li>
                                                        <li>
                                                            Pengguna menggunakan
                                                            layanan pada fitur
                                                            lainnya yang
                                                            disediakan pada
                                                            Aplikasi
                                                        </li>
                                                    </ul>

                                                    <p className="font-normal">
                                                        Data informasi yang
                                                        terekam pada saat
                                                        Pengguna mempergunakan
                                                        Aplikasi termasuk namun
                                                        tidak terbatas pada :
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Data perkiraannya
                                                            seperti IP Address{" "}
                                                        </li>
                                                        <li>
                                                            Data berupa waktu
                                                            dari setiap
                                                            aktivitas Pengguna,
                                                            termasuk aktivitas
                                                            pendaftaran, login,
                                                            dan lain sebagainya
                                                        </li>
                                                        <li>
                                                            Data perangkat,
                                                            diantaranya jenis
                                                            perangkat yang
                                                            digunakan untuk
                                                            menggunakan
                                                            Aplikasi, termasuk
                                                            model perangkat
                                                            keras, sistem
                                                            operasi dan versinya
                                                        </li>
                                                        <li>
                                                            Data catatan (log),
                                                            diantaranya catatan
                                                            pada server yang
                                                            menerima data
                                                            seperti alamat IP
                                                            perangkat, tanggal
                                                            dan waktu akses,
                                                            fitur aplikasi atau
                                                            laman yang dilihat
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="p-0 pt-4">
                                        <li className="font-bold">
                                            Informasi Pribadi yang Kami
                                            Kumpulkan Tentang Anda
                                            <div className="flex flex-col gap-2">
                                                <p className="font-normal">
                                                    BGD akan memproses data
                                                    pribadi Anda berdasarkan:
                                                </p>
                                                <ul>
                                                    <li className="font-bold">
                                                        Kepentingan bisnis yang
                                                        sah,
                                                        <p className="font-normal">
                                                            misalnya, pencegahan
                                                            penipuan, menjaga
                                                            keamanan jaringan
                                                            dan layanan kami,
                                                            dan peningkatan
                                                            layanan kami. Setiap
                                                            kali kami
                                                            menggunakan dasar
                                                            hukum ini untuk
                                                            memproses data Anda,
                                                            kami akan menilai
                                                            kepentingan bisnis
                                                            kami terlebih dahulu
                                                            untuk memastikan
                                                            kepentingan tersebut
                                                            tidak
                                                            mengesampingkan hak
                                                            Anda. Selain itu,
                                                            dalam beberapa
                                                            kondisi, Anda
                                                            memiliki hak untuk
                                                            menolak pemrosesan
                                                            ini. Untuk informasi
                                                            lebih lanjut, dapat
                                                            dilitah pada bagian
                                                            'Hak Anda' dari
                                                            kebijakan ini.
                                                        </p>
                                                    </li>
                                                    <li className="font-bold">
                                                        Kepatuhan atas kewajiban
                                                        hukum,
                                                        <p className="font-normal">
                                                            termasuk misalnya
                                                            persyaratan dan
                                                            peraturan akuntansi
                                                            dan pajak sehubungan
                                                            dengan transaksi
                                                            elektronik dan
                                                            layanan keuangan,
                                                            yang dalam
                                                            penyediaannya tetap
                                                            terikat dengan
                                                            ketentuan yang ketat
                                                            (seperti periode
                                                            retensi), prosedur,
                                                            dan adanya hak Anda
                                                            untuk membatasi
                                                            penggunaan data
                                                            Anda, sehingga
                                                            berdampak pada ruang
                                                            lingkup informasi
                                                            yang dapat
                                                            diberikan.
                                                        </p>
                                                    </li>
                                                    <li className="font-bold">
                                                        Kepentingan publik yang
                                                        substansial,
                                                        <p className="font-normal">
                                                            misalnya, untuk
                                                            membantu mendeteksi
                                                            dan mencegah
                                                            penipuan, terorisme,
                                                            korupsi,
                                                            penghindaran pajak,
                                                            dan kejahatan
                                                            keuangan, atau untuk
                                                            melindungi
                                                            kesejahteraan
                                                            ekonomi individu
                                                            tertentu.
                                                        </p>
                                                    </li>
                                                    <li className="font-bold">
                                                        Persetujuan yang Anda
                                                        berikan,
                                                        <p className="font-normal">
                                                            di mana BGD tidak
                                                            bergantung pada
                                                            dasar hukum lainnya.
                                                            Persetujuan dapat
                                                            ditarik
                                                            sewaktu-waktu. Saat
                                                            Anda memberikan
                                                            persetujuan, Anda
                                                            tetap akan diberikan
                                                            detail tentang cara
                                                            untuk mengubahnya
                                                            atau kunjungi bagian
                                                            'Hak Anda' pada
                                                            kebijakan ini untuk
                                                            informasi lebih
                                                            lanjut.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="font-normal">
                                                Kami juga dapat mengumpulkan
                                                informasi dari pihak tertentu,
                                                sepanjang kami memiliki dasar
                                                hukum untuk melakukannya,
                                                termasuk dari badan yang
                                                bertanggung jawab atas
                                                pencegahan penipuan, organisasi
                                                bisnis, badan
                                                referensi/pemeriksaan kredit,
                                                badan penghitungan tagihan, dan
                                                penyedia jaringan lainnya.
                                            </p>
                                            <p className="font-normal">
                                                Jenis informasi yang mungkin
                                                kami miliki adalah, (jika
                                                dimungkinkan):
                                            </p>
                                            <ul className="font-normal">
                                                <li>
                                                    Nama, alamat, nomor telepon
                                                    dan/atau ponsel Anda,
                                                    tanggal lahir, jenis
                                                    kelamin, pekerjaan,
                                                    penghasilan, nomor
                                                    identitas, dan alamat email.
                                                </li>
                                                <li>
                                                    Informasi kredensial – kami
                                                    akan mengumpulkan kata
                                                    sandi, petunjuk, dan
                                                    informasi keamanan serupa
                                                    yang digunakan untuk
                                                    autentikasi dan akses ke
                                                    akun dan layanan.
                                                </li>
                                                <li>
                                                    Dalam beberapa kondisi (jika
                                                    diizinkan oleh
                                                    undang-undang), kategori
                                                    tertentu dari data pribadi
                                                    atau data pribadi terkait
                                                    dengan pelanggaran dan
                                                    sanksi pidana. Kategori
                                                    khusus dari data pribadi
                                                    mencakup informasi yang
                                                    mengungkap asal ras atau
                                                    etnis, pendapat politik,
                                                    kepercayaan agama atau
                                                    filosofis, data terkait
                                                    kesehatan atau data terkait
                                                    seseorang.
                                                </li>
                                            </ul>
                                            <p className="font-normal">
                                                Jika terdapat Informasi Data
                                                tambahan yang akan kami
                                                kumpulkan dari Anda, kami akan
                                                memberikan pemberitahuan kepada
                                                Anda atau dengan mekanisme lain
                                                sesuai perintah regulasi, dengan
                                                tetap memastikan perlindungan
                                                data pribadi Anda berdasarkan
                                                kebijakan privasi ini.
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="p-0">
                                        <li className="font-bold">
                                            Bagaimana Kami Menggunakan Informasi
                                            Pribadi Anda.
                                            <p className="font-normal">
                                                Kami akan menggunakan informasi
                                                pribadi Anda untuk tujuan
                                                sebagai berikut:
                                            </p>
                                            <ul>
                                                <li>
                                                    Untuk Memproses dan
                                                    menyediakan layanan kepada
                                                    Anda
                                                    <p className="font-normal">
                                                        Untuk memproses dan
                                                        menyediakan layanan yang
                                                        relevan kepada Anda. Ini
                                                        termasuk layanan lain
                                                        yang tidak termasuk
                                                        dalam perjanjian Anda
                                                        dengan kami, layanan
                                                        yang menggunakan
                                                        informasi tentang
                                                        keberadaan Anda, dan
                                                        untuk menghubungi Anda
                                                        dengan pesan tentang
                                                        perubahan layanan.
                                                    </p>
                                                </li>
                                                <li>
                                                    Untuk meningkatkan dan
                                                    berinovasi atas fitur dan
                                                    layanan kami
                                                    <p className="font-normal">
                                                        Kami mengumpulkan
                                                        informasi anonim, tidak
                                                        teridentifikasi, atau
                                                        agregat untuk
                                                        meningkatkan layanan
                                                        yang kami tawarkan
                                                        kepada semua orang.
                                                        Tidak satu pun dari
                                                        aktivitas analisis ini
                                                        yang dikaitkan kembali
                                                        dengan informasi tentang
                                                        Anda dalam cara apa pun.
                                                    </p>
                                                    <p className="font-normal">
                                                        Menggunakan informasi
                                                        dan data yang diperoleh
                                                        dari Pengguna untuk
                                                        tujuan penelitian,
                                                        analisis, pengembangan
                                                        dan pengujian untuk
                                                        meningkatkan kenyamanan
                                                        dan keamanan
                                                        layanan-layanan pada
                                                        Aplikasi, serta untuk
                                                        mengembangkan fitur
                                                        terbaru
                                                    </p>
                                                </li>
                                                <li className="font-normal">
                                                    Komunikasi dengan Pengguna
                                                    baik melalui surat
                                                    elektronik (e-mail), surat,
                                                    telepon untuk membantu
                                                    dan/atau menyelesaikan
                                                    kendala yang dialami oleh
                                                    Pengguna.
                                                </li>
                                                <li className="font-normal">
                                                    Melakukan monitoring dan
                                                    investigasi terhadap
                                                    aktivitas mencurigakan atau
                                                    aktivitas yang mengandung
                                                    unsur kecurangan atau
                                                    pelanggaran terhadap
                                                    Perjanjian Kemitraan dan
                                                    ketentuan hukum yang
                                                    berlaku. Selanjutnya Kami
                                                    akan melakukan tindakan –
                                                    tindakan yang diperlukan
                                                    sebagai tindak lanjut dari
                                                    monitoring dan investigasi
                                                    yang dilakukan.
                                                </li>
                                                <li>
                                                    Pencegahan Penipuan dan
                                                    Keamanan{" "}
                                                    <p className="font-normal">
                                                        Kami akan memproses data
                                                        pribadi Anda untuk
                                                        melindungi dan
                                                        mendeteksi penipuan,
                                                        untuk melindungi dan
                                                        mendeteksi
                                                        penyalahgunaan atau
                                                        kerusakan pada aplikasi
                                                        kami
                                                    </p>
                                                    Kepentingan Kesehatan
                                                    Nasional
                                                    <p className="font-normal">
                                                        Kami dapat saja
                                                        membagikan data pribadi
                                                        yang Anda berikan, jika
                                                        kami menerima permintaan
                                                        untuk tujuan pelacakan
                                                        yang diselenggarakan
                                                        Pemerintah Republik
                                                        Indonesia atau pihak
                                                        resmi yang ditunjuk
                                                        dalam rangka kepentingan
                                                        kesehatan nasional. Data
                                                        pribadi yang dapat
                                                        dibagikan mencakup nama
                                                        lengkap Anda, detail
                                                        kontak, dan informasi
                                                        tentang kunjungan
                                                        tersebut.
                                                    </p>
                                                </li>
                                                <li className="font-normal">
                                                    Membantu Kami untuk
                                                    melakukan identifikasi
                                                    peserta pada saat pengguna
                                                    melaporkan keluhan pada
                                                    fitur pengaduan keluhan.
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Bagaimana Kami Membagikan
                                                    Informasi Pribadi Anda{" "}
                                                    <p className="font-normal">
                                                        Jika dimungkinkan
                                                        berdasarkan dasar
                                                        pemrosesan data yang
                                                        sah, kami dapat berbagi
                                                        informasi tentang Anda
                                                        dengan:
                                                    </p>
                                                    <ul className="font-normal">
                                                        <li>Perusahaan Kami</li>
                                                        <li>
                                                            Lembaga penegak
                                                            hukum, badan
                                                            pemerintah,
                                                            regulator,
                                                            pengadilan, atau
                                                            otoritas publik
                                                            lainnya jika kami
                                                            harus, atau
                                                            diizinkan oleh
                                                            peraturan
                                                            perundangan
                                                        </li>
                                                        <li>
                                                            Pihak atau badan
                                                            ketiga di mana
                                                            pengungkapan
                                                            tersebut diperlukan
                                                            untuk memenuhi hukum
                                                            yang berlaku
                                                        </li>
                                                        <li>
                                                            Pihak ketiga lainnya
                                                            saat Anda mendaftar
                                                            ke layanan mereka
                                                            dan digunakan oleh
                                                            mereka untuk tujuan
                                                            otentikasi dan
                                                            pencegahan penipuan
                                                        </li>
                                                        <li>
                                                            Pihak ketiga yang
                                                            kami gunakan untuk
                                                            memberikan informasi
                                                            pemasaran kepada
                                                            Anda.
                                                        </li>
                                                    </ul>
                                                    <h1>
                                                        Manajemen Fraud dan
                                                        Penegakan Hukum
                                                    </h1>
                                                    <ul className="p-0 font-normal">
                                                        <li>
                                                            Kami akan merilis
                                                            informasi jika hal
                                                            tersebut diadakan
                                                            untuk tujuan
                                                            melindungi kami dari
                                                            penipuan,
                                                            mempertahankan hak
                                                            atau aset/properti
                                                            kami, atau untuk
                                                            melindungi
                                                            kepentingan
                                                            pelanggan kami, atau
                                                            keselamatan orang
                                                            lain, termasuk:{" "}
                                                            <ul>
                                                                <li>
                                                                    Untuk
                                                                    keperluan
                                                                    investigasi
                                                                    internal
                                                                    atas
                                                                    tindakan
                                                                    kriminal
                                                                    atau
                                                                    pelanggaran
                                                                    peraturan
                                                                    atau
                                                                    kebijakan di
                                                                    dalam diri
                                                                    kami;
                                                                </li>
                                                                <li>
                                                                    Jika
                                                                    diperlukan
                                                                    sehubungan
                                                                    dengan
                                                                    proses hukum
                                                                    yang
                                                                    diajukan
                                                                    terhadap
                                                                    BGD,
                                                                    pejabat,
                                                                    karyawan,
                                                                    afiliasi,
                                                                    atau
                                                                    vendornya;
                                                                    atau
                                                                </li>
                                                                <li>
                                                                    Untuk
                                                                    menetapkan,
                                                                    menjalankan,
                                                                    melindungi,
                                                                    membela, dan
                                                                    menegakkan
                                                                    hak-hak
                                                                    hukum kami.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Kami juga mungkin
                                                            perlu mengungkapkan
                                                            informasi Anda untuk
                                                            mematuhi kewajiban
                                                            hukum kami untuk
                                                            mengatasi tuntutan
                                                            hukum, atau untuk
                                                            kepentingan sah
                                                            subjek manapun dalam
                                                            konteks keamanan
                                                            nasional, penegakan
                                                            hukum, litigasi,
                                                            investigasi kriminal
                                                            atau untuk mencegah
                                                            epidemi, keadaan
                                                            darurat yang telah
                                                            ditetapkan oleh
                                                            Pemerintah. Data
                                                            pribadi Anda hanya
                                                            akan diberikan jika
                                                            kami, dengan itikad
                                                            baik, percaya bahwa
                                                            kami berkewajiban
                                                            untuk melakukannya
                                                            sesuai dengan hukum
                                                            dan berdasarkan
                                                            evaluasi menyeluruh
                                                            atas ketentuan
                                                            peraturan
                                                            perundang-undangan.
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Informasi lebih lanjut
                                                        tentang bagaimana BGD
                                                        menyeimbangkan tanggung
                                                        jawab kami untuk
                                                        menghormati hak privasi
                                                        pelanggan kami dengan
                                                        kewajiban hukum kami
                                                        untuk mengungkapkan data
                                                        pelanggan kepada penegak
                                                        hukum juga diatur pada
                                                        beberapa bagian dalam
                                                        kebijakan ini.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Berapa Lama Kami Menyimpan
                                                    Informasi Pribadi Anda?
                                                    <p className="font-normal">
                                                        Kami berkomitmen untuk
                                                        mengumpulkan, memproses,
                                                        dan menyimpan data
                                                        pribadi Anda dengan
                                                        perlindungan terbaik
                                                        berdasarkan
                                                        undang-undang untuk
                                                        menyediakan suatu
                                                        Layanan.
                                                    </p>
                                                    <p className="font-normal">
                                                        Penyimpanan Data
                                                        Informasi dapat
                                                        dilakukan di wilayah
                                                        Indonesia atau di luar
                                                        wilayah Indonesia,
                                                        dengan tetap memenuhi
                                                        kewajiban akses dan
                                                        efektifitas pengawasan
                                                        sesuai dengan peraturan
                                                        perundang-undangan yang
                                                        berlaku.
                                                    </p>
                                                    <p className="font-normal">
                                                        Kami akan menyimpan Data
                                                        Informasi sebagaimana
                                                        disebutkan sepanjang
                                                        Anda masih menggunakan
                                                        Layanan dan/atau sesuai
                                                        dengan peraturan
                                                        perundang-undangan yang
                                                        berlaku.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Jaminan Keamanan Informasi
                                                    Anda
                                                    <ul className="font-normal">
                                                        <li>
                                                            Kerahasiaan data
                                                            Anda sangat penting
                                                            bagi kami. Kami akan
                                                            menggunakan upaya
                                                            terbaik kami untuk
                                                            melindungi dan
                                                            mengamankan data
                                                            Anda dari akses,
                                                            pengumpulan,
                                                            pemrosesan,
                                                            analisis,
                                                            penyimpanan,
                                                            pengungkapan,
                                                            koreksi, dan
                                                            penghapusan yang
                                                            tidak sah.
                                                        </li>
                                                        <li>
                                                            Kami akan berusaha
                                                            sebaik mungkin untuk
                                                            menjaga keamanan
                                                            data Anda dan
                                                            melindungi data
                                                            Anda. Kami dengan
                                                            ini menjamin
                                                            kelengkapan dan
                                                            keakuratan setiap
                                                            Data Informasi yang
                                                            Anda kirimkan
                                                            melalui Layanan
                                                            dengan melakukan
                                                            verifikasi dan kami
                                                            juga menjamin bahwa
                                                            kami akan melakukan
                                                            upaya terbaik kami
                                                            untuk mencegah data
                                                            tersebut dicegat,
                                                            diakses,
                                                            diungkapkan, diubah
                                                            atau dihancurkan
                                                            oleh pihak ketiga
                                                            yang tidak
                                                            berwenang.
                                                        </li>
                                                        <li>
                                                            Jika terdapat akses
                                                            dan aktivitas ilegal
                                                            terhadap kerahasiaan
                                                            data Anda dan hal
                                                            tersebut berada di
                                                            luar kendali kami,
                                                            maka kami akan
                                                            memberitahukan
                                                            kepada Anda sehingga
                                                            Anda dapat
                                                            mengurangi risiko
                                                            yang timbul
                                                            karenanya.
                                                        </li>
                                                        <li>
                                                            Kami tidak
                                                            bertanggung jawab
                                                            atas akses tidak sah
                                                            atau hilangnya
                                                            informasi pribadi
                                                            yang berada di luar
                                                            kendali kami.
                                                        </li>
                                                        <li>
                                                            Kami tidak akan
                                                            pernah meminta
                                                            informasi pribadi
                                                            Anda melalui sarana
                                                            komunikasi yang
                                                            tidak resmi. Anda
                                                            bertanggung jawab
                                                            untuk menjaga
                                                            keamanan informasi
                                                            pribadi dan akun
                                                            Anda dan tidak
                                                            membaginya dengan
                                                            orang lain.
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak Anda
                                                    <div className="font-normal">
                                                        <p>
                                                            Di bawah ini kami
                                                            menjelaskan detail
                                                            tentang bagaimana
                                                            Anda dapat
                                                            menggunakan hak
                                                            Anda.{" "}
                                                        </p>
                                                        <p>
                                                            Kami berhak menolak
                                                            permintaan Anda
                                                            untuk mengakses,
                                                            memperbaiki dan/atau
                                                            menghapus, sebagian
                                                            atau seluruh Data
                                                            Pribadi Anda yang
                                                            kami kuasai, jika
                                                            diizinkan atau
                                                            diharuskan
                                                            berdasarkan
                                                            Peraturan
                                                            Perundang-undangan
                                                            yang berlaku,
                                                            terutama jika
                                                            permintaan tersebut
                                                            dapat berdampak
                                                            mengenai hal-hal
                                                            seperti namun tidak
                                                            terbatas pada:
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                membahayakan
                                                                keselamatan,
                                                                kesehatan fisik
                                                                atau mental Anda
                                                                dan/atau orang
                                                                lain; dan/atau
                                                            </li>
                                                            <li>
                                                                ada dampak
                                                                pengungkapan
                                                                Data Pribadi
                                                                orang lain;
                                                                dan/atau
                                                            </li>
                                                            <li>
                                                                bertentangan
                                                                dengan
                                                                kepentingan
                                                                pertahanan dan
                                                                keamanan negara
                                                                dan/atau
                                                            </li>
                                                            <li>
                                                                alasan
                                                                permintaan tidak
                                                                relevan bagi
                                                                Anda dan/atau
                                                                aktivitas
                                                                pemrosesan data
                                                                pribadi yang
                                                                kami lakukan.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk mengakses data
                                                    pribadi
                                                    <p className="font-normal">
                                                        Anda berhak untuk dan
                                                        mengakses data pribadi
                                                        yang dimiliki BGD
                                                        tentang Anda.{" "}
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk mengoreksi data
                                                    pribadi
                                                    <p className="font-normal">
                                                        Anda memiliki hak untuk
                                                        memperbaiki informasi
                                                        yang dimiliki tentang
                                                        Anda jika informasi
                                                        tersebut tidak akurat.
                                                        Jika informasi yang kami
                                                        miliki tentang Anda
                                                        tidak akurat atau perlu
                                                        diperbarui, Anda dapat
                                                        masuk ke aplikasi untuk
                                                        memperbaruinya. Anda
                                                        dianjurkan untuk aktif
                                                        dalam memastikan
                                                        keakuratan dan
                                                        pemutakhiran data Anda
                                                        dari waktu ke waktu.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk menolak penggunaan
                                                    data pribadi
                                                    <p className="font-normal">
                                                        Anda berhak, dalam
                                                        keadaan tertentu, untuk
                                                        menolak BGD memproses
                                                        informasi pribadi Anda.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk menarik kembali
                                                    persetujuan penggunaan data
                                                    pribadi
                                                    <p className="font-normal">
                                                        Anda berhak, dalam
                                                        keadaan tertentu,
                                                        menarik kembali
                                                        persetujuan atas
                                                        pemrosesan data pribadi
                                                        yang sebelumnya Anda
                                                        berikan.
                                                    </p>
                                                    <p className="font-normal">
                                                        Namun, tidak tersedianya
                                                        informasi data pribadi
                                                        Anda menyebabkan kami
                                                        menjadi tidak dapat
                                                        melakukan verifikasi dan
                                                        memproses data anda,
                                                        sehingga Anda mungkin
                                                        menjadi tidak dapat
                                                        menggunakan fitur dan
                                                        layanan aplikasi kami.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk membatasi
                                                    penggunaan data Anda
                                                    <p className="font-normal">
                                                        Jika Anda merasa data
                                                        yang kami simpan tentang
                                                        Anda tidak akurat, atau
                                                        Anda yakin kami
                                                        seharusnya tidak
                                                        memproses data Anda,
                                                        silakan hubungi kami
                                                        untuk mendiskusikan hak
                                                        Anda. Dalam keadaan
                                                        tertentu, Anda berhak
                                                        meminta kami membatasi
                                                        pemrosesan.
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="p-0">
                                                <li className="font-bold">
                                                    Hak untuk menghapus data
                                                    Anda
                                                    <p className="font-normal">
                                                        BGD berusaha untuk hanya
                                                        memproses dan menyimpan
                                                        data Anda selama kami
                                                        membutuhkannya. Dalam
                                                        keadaan tertentu Anda
                                                        memiliki hak untuk
                                                        meminta kami menghapus
                                                        data pribadi Anda yang
                                                        kami pegang. Jika
                                                        kontrak Anda dengan BGD
                                                        telah berakhir, kami
                                                        mungkin masih memiliki
                                                        alasan yang sah untuk
                                                        memproses data pribadi
                                                        Anda.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="p-0">
                                        <li className="font-bold">
                                            Pengakuan dan Persetujuan
                                            <ul className="font-normal">
                                                <li>
                                                    Anda menjamin bahwa segala
                                                    data yang diberikan dalam
                                                    bentuk tertulis maupun
                                                    bentuk lainnya untuk
                                                    menggunakan Layanan ini
                                                    adalah benar milik Anda dan
                                                    bukan diperoleh dari
                                                    informasi pribadi milik
                                                    pihak ketiga tanpa izin yang
                                                    sah, sehingga segala hal
                                                    yang timbul sehubungan
                                                    dengan pemberian dan
                                                    kebenaran data-data tersebut
                                                    menjadi tanggung jawab penuh
                                                    dari Anda.
                                                </li>
                                                <li>
                                                    Dengan menyetujui Kebijakan
                                                    Privasi ini, Anda mengakui
                                                    bahwa Anda telah membaca dan
                                                    memahami Kebijakan Privasi
                                                    ini dan menyetujui semua
                                                    ketentuannya. Secara khusus,
                                                    Anda setuju dan memberikan
                                                    izin kepada kami untuk
                                                    melakukan pengumpulan,
                                                    pemrosesan, analisis,
                                                    penyimpanan, pengungkapan,
                                                    koreksi, dan penghapusan
                                                    data pribadi Anda sesuai
                                                    dengan Kebijakan Privasi
                                                    ini.
                                                </li>
                                                <li>
                                                    Jika Anda berada di bawah
                                                    persyaratan usia minimum
                                                    atau termasuk dalam kategori
                                                    anak-anak sesuai dengan
                                                    ketentuan peraturan
                                                    perundang-undangan yang
                                                    berlaku, maka Anda wajib
                                                    memastikan telah mendapatkan
                                                    persetujuan dari orang tua
                                                    (ayah atau ibu) atau wali
                                                    Anda sesuai dengan peraturan
                                                    yang berlaku.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action w-full">
                            <form method="dialog">
                                <button className="btn rounded-xl">
                                    Tutup
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}

export default Register;
