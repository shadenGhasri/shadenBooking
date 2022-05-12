import { useState } from "react";
import * as yup from "yup";
import "./login.scss";

const Login = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState();
  const [sending, setSending] = useState(false);

  let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(4, "Enter at least 4 characters").required(),
  });

  const validate = async () => {
    try {
      const result = await schema.validate(account, { abortEarly: false });
      return result;
    } catch (error) {
      console.log(error.errors);
      setErrors(error.errors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await validate();
    if (result) {
      try {
        setSending(true);
      } catch (error) {
        setSending(false);
        setErrors();
      }
    }
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
    <>
      {errors && (
        <div className="alert alert-danger">
          <ul>
            {errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="form d-flex flex-column align-items-center"
      >
        <h1 className="mt-4">Sign in</h1>
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
        <button className="login">Sign in</button>
        <p className="mt-2">forgot your Password?</p>
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
    </>
  );
};

export default Login;
