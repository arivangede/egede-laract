import Carousel from "@/Components/Homepage/Carousel";
import Header from "@/Components/Homepage/Header";
import Menu from "@/Components/Homepage/Menu";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    console.log("props halaman :", props);
    return (
        <>
            <Head title="Homepage" />
            <div className="entrance flex flex-col items-center">
                <Header data={props.auth.user} flash={props.flash} />
                <Carousel datadesa={props.auth.user.desa} />
                <Menu />
            </div>
            <Navbar active={"Homepage"} />
        </>
    );
};

export default Homepage;
