import asset from "../../../assets/img/homepage/asset-home.png";

function Header({ data }) {
    console.log("data komponen:", data);
    return (
        <div className="flex items-center gap-4 relative w-full">
            <img
                src={asset}
                alt="bg"
                className="w-full absolute top-0 left-0"
            />
            <div className="w-full h-full px-4 py-2">
                <img
                    src="resources/assets/img/homepage/logodesa/{data.logo}"
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default Header;
