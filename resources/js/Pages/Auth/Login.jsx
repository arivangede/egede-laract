import LoginForm from "@/Components/Auth/LoginForm";

function Login(props) {
    console.log("page", props);
    return (
        <>
            <LoginForm errors={props.errors} flash={props.flash} />
        </>
    );
}

export default Login;
