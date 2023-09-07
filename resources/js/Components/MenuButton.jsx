import { useState } from "react";
import MenuPopUp from "./MenuPopUp";

import button from "../../assets/icon/logo-tengah.png";

const MenuButton = () => {
    const [popup, setPopup] = useState(false);
    return (
        <>
            <button
                className="w-20 h-20 flex justify-center items-center border bg-red-400 p-1 rounded-full -mt-10"
                onClick={() => setPopup(true)}
            >
                <img src={button} alt="button" className="w-full h-full" />
            </button>

            <MenuPopUp trigger={popup} setTrigger={setPopup} />
        </>
    );
};

export default MenuButton;
