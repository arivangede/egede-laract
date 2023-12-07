import LainnyaButton from "./MenuBtn/LainnyaButton";
import EnewsBtn from "./MenuBtn/EnewsBtn";
import ProfilDesaBtn from "./MenuBtn/ProfilDesaBtn";
import RegulasiBtn from "./MenuBtn/RegulasiBtn";
import PengaduanBtn from "./MenuBtn/PengaduanBtn";
import DataDesaBtn from "./MenuBtn/DataDesaBtn";
import LayananPublikBtn from "./MenuBtn/LayananPublikBtn";
import KeuanganBtn from "./MenuBtn/KeuanganBtn";

function Menu() {
    return (
        <>
            <div className="grid grid-cols-4 grid-flow-row gap-2 pb-4">
                <EnewsBtn />
                <ProfilDesaBtn />
                <RegulasiBtn />
                <PengaduanBtn />
                <DataDesaBtn />
                <LayananPublikBtn />
                <KeuanganBtn />
                <LainnyaButton />
            </div>
        </>
    );
}

export default Menu;
