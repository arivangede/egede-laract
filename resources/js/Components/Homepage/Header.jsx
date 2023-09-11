import { Link } from "@inertiajs/react";

import logo from "@/assets/icon/logo-egede.png";
import cs from "@/assets/icon/cs.gif";

function Header({ data }) {
    console.log("data komponen:", data);
    return (
        <div className="flex justify-between items-center gap-4 p-4 relative w-full">
            <div>
                <img src={logo} alt="logo" className="h-8" />
            </div>

            <Link href="">
                <img src={cs} alt="cs" className="h-8" />
            </Link>
        </div>
    );
}

export default Header;
