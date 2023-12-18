import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import logouticon from "@/assets/svg/logout.svg";
import profile from "@/assets/svg/profile.svg";
import KartuEgede from "@/Components/Profil/KartuEgede";
import ProfilDisplay from "@/Components/Profil/ProfilDisplay";
import ProfilDesc from "@/Components/Profil/ProfilDesc";

const Profil = (props) => {
    console.log(props);
    return (
        <>
            <Navbar active={"Profil"} />
            <Head title="Profil" />
            <div className="bg-slate-50 min-h-screen">
                <div className="h-full w-full">
                    <div className="bg-[#ff4344] w-full h-[24vh] pt-12 px-6 pb-8 text-white flex justify-between">
                        <Link
                            href="/logout"
                            className="font-bold text-base flex items-center h-max gap-2 "
                        >
                            <img src={logouticon} alt="icon" className="h-8" />
                            Logout
                        </Link>
                        <Link
                            href="/dataku"
                            className="font-bold text-base flex items-center h-max gap-2"
                        >
                            Dataku
                            <img src={profile} alt="icon" className="h-8" />
                        </Link>
                    </div>
                    <div className="w-full px-6 -mt-12 pb-20">
                        <div className="entrance h-full bg-white rounded-2xl w-full shadow flex flex-col items-center gap-6">
                            <KartuEgede userData={props.auth.user} />
                            <ProfilDisplay
                                userPhoto={props.auth.user.penduduk.foto}
                            />
                            <ProfilDesc userData={props.auth.user} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Profil;
