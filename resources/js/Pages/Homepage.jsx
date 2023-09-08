import Header from "@/Components/Homepage/Header";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    console.log("props halaman :", props);
    return (
        <>
            <Head title="Homepage" />
            <Navbar active={"Homepage"} />
            <div className="entrance flex flex-col items-center">
                <Header data={props.auth.user} />
                <h1>Hellow {props.auth.user.username}</h1>
            </div>
        </>
    );
};

export default Homepage;
