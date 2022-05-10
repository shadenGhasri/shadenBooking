import "./login.scss";

const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return ( 
        <form onSubmit={handleSubmit} className="form">
            <h1>create an account</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" name="" id="" placeholder="Password" />
            <button>Login</button>
            <p>forget Login?</p>
            <p>---------- or ------------</p>
            <div className="media row d-flex justify-content-center">
                <div className="linkedin col-md-4"></div>
                <div className="facebook col-md-4"></div>
                <div className="google col-md-4"></div>
            </div>
        </form>
    );
}
 
export default Login;