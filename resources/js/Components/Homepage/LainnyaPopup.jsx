import EnewsBtn from "./MenuBtn/EnewsBtn";
import ProfilDesaBtn from "./MenuBtn/ProfilDesaBtn";
import RegulasiBtn from "./MenuBtn/RegulasiBtn";
import PengaduanBtn from "./MenuBtn/PengaduanBtn";
import DataDesaBtn from "./MenuBtn/DataDesaBtn";
import LayananPublikBtn from "./MenuBtn/LayananPublikBtn";
import KeuanganBtn from "./MenuBtn/KeuanganBtn";

function LainnyaPopup({ trigger, setTrigger, classUser }) {
    return trigger ? (
        <div className="menu-popup fade">
            <div className="min-h-[60%] w-full bg-slate-100 rounded-xl entrance flex flex-col pb-8">
                <div className="w-full p-4 flex justify-between items-center">
                    <h1 className="text-slate-500">
                        Satu aplikasi banyak fungsi
                    </h1>
                    <button onClick={() => setTrigger(null)}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                <div className="grid grid-cols-4 grid-flow-row p-4 gap-2 border-b border-slate-200">
                    <EnewsBtn color={"#ff4344"} to={"/e-news"} />
                    <ProfilDesaBtn color={"#ff4344"} to={"/profil-desa"} />
                    <RegulasiBtn color={"#ff4344"} to={"/regulasi-desa"} />
                    <PengaduanBtn color={"#ff4344"} to={"/pengaduan"} />
                    <DataDesaBtn color={"#ff4344"} to={"/data-desa"} />
                    <LayananPublikBtn
                        color={"#ff4344"}
                        to={"/layanan-publik"}
                    />
                    <KeuanganBtn color={"#ff4344"} to={"keuangan"} />
                </div>
                {classUser === 2 ? (
                    <div className="flex flex-col">
                        <h1 className="px-4 text-slate-500 pt-2 text-sm">
                            Menu Admin
                        </h1>
                        <div className="grid grid-cols-4 grid-flow-row p-4 gap-2 border-b border-slate-200">
                            <EnewsBtn color={"#fb7185"} to={"/e-news-admin"} />
                            <ProfilDesaBtn
                                color={"#fb7185"}
                                to={"/profil-desa-admin"}
                            />
                            <RegulasiBtn
                                color={"#fb7185"}
                                to={"/regulasi-admin"}
                            />
                            <PengaduanBtn color={"#fb7185"} />
                            <DataDesaBtn color={"#fb7185"} />
                            <LayananPublikBtn color={"#fb7185"} />
                            <KeuanganBtn color={"#fb7185"} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    ) : (
        ""
    );
}

export default LainnyaPopup;
