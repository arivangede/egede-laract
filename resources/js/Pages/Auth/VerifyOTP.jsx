import { router } from "@inertiajs/react";
import { useState } from "react";

function VerifyOTP(props) {
    const OTP_LENGTH = 4;
    const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
    const [lastEditedIndex, setLastEditedIndex] = useState(0);

    const handleOtpChange = (index, value) => {
        const newOtpDigits = [...otpDigits];
        newOtpDigits[index] = value;

        if (value.length === 1 && index < OTP_LENGTH - 1) {
            setLastEditedIndex(index + 1);
        }

        // if (value === "" && index > 0) {
        //     setLastEditedIndex(index - 1);
        // }

        setOtpDigits(newOtpDigits);
    };

    const otpString = otpDigits.join("");

    const handleSubmitOTP = () => {
        const data = { otp: otpString, email: props.email, again: null };
        router.post("/verify", data);
    };

    const handleSendAgain = () => {
        router.post("/verify", { email: props.email, again: true });
    };

    console.log(otpString);
    console.log(props);
    return (
        <div className="bg-slate-50 px-4 py-8 min-h-screen flex flex-col items-center gap-8">
            {props.flash.message && (
                <div role="alert" className="alert shadow flex items-center">
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
                    <span>{props.flash.message}</span>
                </div>
            )}

            {props.warning && (
                <div role="alert" className="alert alert-warning flex">
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
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <span>{props.warning}</span>
                </div>
            )}

            {props.success && (
                <div role="alert" className="alert alert-success flex">
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
                    <span>{props.success}</span>
                </div>
            )}
            {props.error && (
                <div role="alert" className="alert alert-error flex">
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
                    <span>{props.error}</span>
                </div>
            )}

            <div className="entrance flex flex-col items-center w-full gap-4 pt-12">
                <h1 className="px-8 text-center">
                    Masukan kode OTP anda pada kolom di bawah ini:
                </h1>
                <div className="flex justify-around items-center w-full px-8 gap-4">
                    {otpDigits.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp_${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                const sanitizedValue = inputValue.replace(
                                    /[^0-9]/g,
                                    ""
                                );
                                handleOtpChange(index, sanitizedValue);
                            }}
                            ref={(input) => {
                                if (index === lastEditedIndex) {
                                    input && input.focus();
                                }
                            }}
                            className="w-full rounded-xl border-slate-300 text-center"
                        />
                    ))}
                </div>
                <button
                    onClick={handleSubmitOTP}
                    className="capitalize flex justify-center items-center bg-red-400 text-white px-4 py-2 text-lg rounded-xl shadow"
                >
                    verifikasi
                </button>
                <span className="px-12 text-center">
                    tidak ada email OTP yang anda terima?{" "}
                    <button onClick={handleSendAgain} className="font-bold">
                        klik disini
                    </button>
                </span>
            </div>
        </div>
    );
}

export default VerifyOTP;
