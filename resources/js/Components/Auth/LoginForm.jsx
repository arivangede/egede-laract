import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import logo from "@/assets/icon/logo-egede.png";
import topAsset from "@/assets/img/login/assetTop.png";
import bottomAsset from "@/assets/img/login/assetBottom.png";

function LoginForm({ errors, flash }) {
    console.log("errors", errors);
    console.log("flash", flash);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const data = { username, password };
        router.post("/login", data);

        setUsername("");
        setPassword("");
    };

    return (
        <>
            <img
                src={topAsset}
                alt="top"
                className="fixed top-0 left-0 w-full fade-down"
            />
            <img
                src={bottomAsset}
                alt="bottom"
                className="fixed bottom-0 left-0 w-full fade-up"
            />

            <Head title="Login" />
            <div className="entrance min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-tr from-white to-red-50 ">
                <form onSubmit={handleLogin} className="px-12">
                    <div className="px-12 py-8 gap-4 w-full flex flex-col justify-center items-center bg-transparent backdrop-blur shadow-lg border-2 rounded-xl relative z-10 border-white">
                        <img src={logo} alt="logo" className="h-[2rem] mb-8" />

                        <div>
                            <input
                                type="text"
                                placeholder="Username / NIK"
                                className="w-full p-2 rounded-md border-none outline outline-1 bg-transparent outline-slate-300 focus:ring-2 focus:ring-red-400"
                                onChange={(username) =>
                                    setUsername(username.target.value)
                                }
                                value={username}
                            />
                            {errors.username ? (
                                <div className="text-red-600 flex items-center gap-2">
                                    <i className="bx bxs-x-circle text-xl"></i>
                                    <h1 className="font-bold text-sm">
                                        {errors.username}
                                    </h1>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 rounded-md border-none outline outline-1 bg-transparent outline-slate-300 focus:ring-2 focus:ring-red-400"
                                onChange={(password) =>
                                    setPassword(password.target.value)
                                }
                                value={password}
                                autoComplete="false"
                            />

                            {errors.password ? (
                                <div className="text-red-600 flex items-center gap-2">
                                    <i className="bx bxs-x-circle text-xl"></i>
                                    <h1 className="font-bold text-sm">
                                        {errors.password}
                                    </h1>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>

                        <button
                            type="submit"
                            name="submit"
                            className="w-full py-3 mt-3 gap-2 bg-red-500 text-white rounded-full flex items-center justify-center border border-red-500 hover:bg-transparent  hover:text-red-500 transition duration-300 ease-in-out"
                        >
                            <span className="font-bold text-xl">Login</span>
                            <i className="bx bxs-log-in-circle text-2xl"></i>
                        </button>
                        <span className="text-slate-600 text-sm">
                            Belum punya akun?{" "}
                            <Link
                                href="/register"
                                className="underline font-bold"
                            >
                                Daftar Sekarang
                            </Link>
                        </span>
                    </div>
                </form>

                <div className="pt-4">
                    {errors[0] ? (
                        <div className="alert alert-error w-full flex">
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
                            <span>{errors[0]}</span>
                        </div>
                    ) : (
                        ""
                    )}

                    {flash.message ? (
                        <div className="alert alert-success w-full flex">
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
                            <span>{flash.message}</span>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default LoginForm;
