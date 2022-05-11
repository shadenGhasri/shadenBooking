import { useState } from "react";
import "./login.scss";

const Login = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount({
      username: "",
      password: "",
    });
  };

  const handleInput = (e) => {
    setAccount((p) => {
      return {
        ...p,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="form d-flex flex-column align-items-center"
    >
      <h1 className="mt-4">create an account</h1>
      <input
        className="username mt-4"
        type="text"
        placeholder="Username"
        name="username"
        value={account.username}
        onChange={handleInput}
      />
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={account.password}
        name="password"
        onChange={handleInput}
      />
      <button className="login">Login</button>
      <p className="mt-2">forget Login?</p>
      <div className="line">
        <h3 className="section-title">or</h3>
      </div>

      <div className="media d-flex justify-content-center">
        <div className="linkedin">
          <i className="bi bi-linkedin"></i>
        </div>
        <div className="facebook">
          <i className="bi bi-facebook"></i>
        </div>
        <div className="google">
          <i className="bi bi-google"></i>
        </div>
      </div>
    </form>
  );
};

export default Login;
