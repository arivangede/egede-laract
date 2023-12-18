import { router } from "@inertiajs/react";
import React, { useState } from "react";

function ResetPassword(props) {
    console.log(props);
    const [formData, setFormData] = useState({
        newpass: "",
        confirmpass: "",
    });
    const userid = props.user.id;
    const pathArray = window.location.pathname.split("/");
    const token = pathArray[pathArray.length - 1];

    const handleSubmit = () => {
        const data = {
            userid: userid,
            newpass: formData.newpass,
            confirmpass: formData.confirmpass,
        };
        router.post(`/resetpassword/${token}`, data);
    };

    console.log(token);

    return (
        <div className="bg-slate-50 flex justify-center items-center w-full min-h-screen px-8">
            <div className="bg-white w-full rounded-xl flex flex-col items-end gap-4 px-4 py-8">
                <h1 className="w-full font-bold text-center">Reset Password</h1>
                <input
                    type="password"
                    onChange={(e) =>
                        setFormData({ ...formData, newpass: e.target.value })
                    }
                    value={formData.newpass}
                    className="w-full rounded-xl border-slate-200"
                    placeholder="Masukkan Password Baru"
                />
                <div className="w-full flex flex-col">
                    <input
                        type="password"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                confirmpass: e.target.value,
                            })
                        }
                        value={formData.confirmpass}
                        className={`rounded-xl ${
                            formData.confirmpass == ""
                                ? "border-slate-200"
                                : formData.confirmpass != formData.newpass
                                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                                : "border-slate-200"
                        }`}
                        placeholder="Confirm Password"
                    />
                    {formData.confirmpass == "" ? (
                        ""
                    ) : formData.confirmpass != formData.newpass ? (
                        <span className="text-red-400 text-sm">
                            Kolom Password dan Confirm Password tidak sama
                        </span>
                    ) : (
                        ""
                    )}
                </div>

                <div>
                    <button
                        onClick={handleSubmit}
                        className="py-2 px-4 transition duration-200 bg-red-400 text-white border border-red-400 rounded-full hover:bg-transparent hover:text-red-400"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
