import EnewsBtn from "./MenuBtn/EnewsBtn";
import ProfilDesaBtn from "./MenuBtn/ProfilDesaBtn";
import RegulasiBtn from "./MenuBtn/RegulasiBtn";
import PengaduanBtn from "./MenuBtn/PengaduanBtn";
import DataDesaBtn from "./MenuBtn/DataDesaBtn";
import LayananPublikBtn from "./MenuBtn/LayananPublikBtn";
import KeuanganBtn from "./MenuBtn/KeuanganBtn";

function LainnyaPopup({ trigger, setTrigger }) {
    return trigger ? (
        <div className="menu-popup fade">
            <div className="h-[60%] w-full bg-slate-100 rounded-xl entrance">
                <div className="w-full p-4 flex justify-between items-center">
                    <h1 className="text-slate-500">
                        Satu aplikasi banyak fungsi
                    </h1>
                    <button onClick={() => setTrigger(null)}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                <div className="grid grid-cols-4 grid-flow-row p-4 gap-2">
                    <EnewsBtn />
                    <ProfilDesaBtn />
                    <RegulasiBtn />
                    <PengaduanBtn />
                    <DataDesaBtn />
                    <LayananPublikBtn />
                    <KeuanganBtn />
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

export default LainnyaPopup;
