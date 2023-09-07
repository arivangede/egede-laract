import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const Homepage = (props) => {
    console.log(props);
    return (
        <>
            <Navbar active={"Homepage"} />
            <div className="entrance">
                <Head title="Homepage" />
                <h1>Hellow {props.auth.user.username}</h1>
                <h2>Desa {props.auth.user.desa}</h2>
            </div>
        </>
    );
};

export default Homepage;
