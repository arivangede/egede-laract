import BackBtn from "@/assets/svg/BackBtn";
import { Link } from "@inertiajs/react";

function Header({ titlePage }) {
    return (
        <div className="flex items-center px-4 py-8">
            <Link href="/" className="w-8">
                <BackBtn color={"#FFF"} />
            </Link>
            <h1 className="font-black text-xl text-white">{titlePage}</h1>
        </div>
    );
}

export default Header;
