import NextBtn from "@/assets/svg/NextBtn";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

function Register(props) {
    const [formData, setFormData] = useState({
        username: "",
        namaLengkap: "",
        nik: "",
        email: "",
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
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        });
        console.log(formData);
    };

    console.log(props);
    return (
        <>
            <Head title="Register" />
            <div className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-50 p-8">
                <form className="entrance w-full bg-white shadow rounded-xl flex flex-col items-center gap-4 px-8 py-8 text-slate-600">
                    <h1 className="text-xl font-bold">Register</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="border-slate-200 rounded-lg w-full"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                username: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Nama Lengkap (Sesuai KTP)"
                        className="border-slate-200 rounded-lg w-full"
                        value={formData.namaLengkap}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                namaLengkap: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="NIK"
                        className="border-slate-200 rounded-lg w-full"
                        value={formData.nik}
                        onChange={(e) => {
                            const value = e.target.value;
                            const sanitizedValue = value.replace(/[^0-9]/g, "");
                            setFormData({ ...formData, nik: sanitizedValue });
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-slate-200 rounded-lg w-full"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-slate-200 rounded-lg w-full"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    <div className="w-full flex flex-col gap-2">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className={`${
                                formData.confirmPassword == ""
                                    ? "border-slate-200"
                                    : formData.confirmPassword !=
                                      formData.password
                                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                                    : "border-slate-200"
                            } rounded-lg w-full`}
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />

                        {formData.confirmPassword == "" ? (
                            ""
                        ) : formData.confirmPassword != formData.password ? (
                            <span className="text-red-400 text-sm">
                                Kolom Password dan Confirm Password tidak sama
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <Link
                        href="/verify"
                        onClick={handleSubmit}
                        className="bg-red-400 flex justify-center items-center text-white font-bold py-2 px-4 rounded-full mt-4 border border-red-400 transition duration-200 hover:bg-transparent hover:border-red-400 hover:text-red-400"
                    >
                        <i className="bx bx-right-arrow-alt text-2xl"></i>
                    </Link>
                    <span className="text-slate-600 text-sm">
                        Sudah punya akun?{" "}
                        <Link href="/login" className="underline font-bold">
                            Login
                        </Link>
                    </span>
                </form>
            </div>
        </>
    );
}

export default Register;
