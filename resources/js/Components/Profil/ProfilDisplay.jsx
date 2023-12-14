import React from "react";

function ProfilDisplay({ userPhoto }) {
    return (
        <div className="w-full h-12 bg-[#ff4344] flex justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-[#ff4344] p-2 flex justify-center items-center overflow-hidden">
                <div
                    onClick={() =>
                        document.getElementById("foto_profile").showModal()
                    }
                    className="w-full h-full rounded-full justify-center items-center overflow-hidden"
                >
                    <img
                        src={
                            userPhoto
                                ? "/storage" + userPhoto
                                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                        alt="fotoProfil"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <dialog id="foto_profile" className="modal">
                    <div className="modal-box p-0">
                        <img
                            src={
                                userPhoto
                                    ? "/storage" + userPhoto
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            }
                            alt="foto"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}

export default ProfilDisplay;
