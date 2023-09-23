import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";

function Header() {
    return (
        <div className="flex items-center px-4 py-8">
            <Link href="/" className="w-8">
                <BackBtn color={"#FFF"} />
            </Link>
            <h1 className="font-black text-xl text-white">Data Desa</h1>
        </div>
    );
}

export default Header;
