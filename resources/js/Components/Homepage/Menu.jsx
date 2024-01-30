import LainnyaButton from "./MenuBtn/LainnyaButton";
import EnewsBtn from "./MenuBtn/EnewsBtn";
import ProfilDesaBtn from "./MenuBtn/ProfilDesaBtn";
import RegulasiBtn from "./MenuBtn/RegulasiBtn";
import PengaduanBtn from "./MenuBtn/PengaduanBtn";
import DataDesaBtn from "./MenuBtn/DataDesaBtn";
import LayananPublikBtn from "./MenuBtn/LayananPublikBtn";
import KeuanganBtn from "./MenuBtn/KeuanganBtn";

function Menu({ classUser }) {
    return (
        <>
            <div className="grid grid-cols-4 grid-flow-row gap-2 pb-4">
                <EnewsBtn color={"#ff4344"} to={"/e-news"} />
                <ProfilDesaBtn color={"#ff4344"} to={"/profil-desa"} />
                <RegulasiBtn color={"#ff4344"} to={"/regulasi-desa"} />
                <PengaduanBtn color={"#ff4344"} />
                <DataDesaBtn color={"#ff4344"} to={"/data-desa"} />
                <LayananPublikBtn color={"#ff4344"} />
                <KeuanganBtn color={"#ff4344"} />
                <LainnyaButton classUser={classUser} />
            </div>
        </>
    );
}

export default Menu;
