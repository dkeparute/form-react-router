import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Forms";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const authenticate = (e) => {
    e.preventDefault();

    const validate = validateLogin();

    if (validate) {
      setValidate({});
      setEmail("");
      setPassword("");
      alert("You have successfully logged in 👌");
    }
  };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  // CONTENT
  return (
    <div className="general">
      {/* LOGIN BOX */}

      <div className="form">
        {/* HEADER */}

        <div className="header">
          <i class="fas fa-key user"></i>
          <h1>Login</h1>
        </div>
        {/* FORM FUNCTIONALITY */}
        <form
          className="inside-form"
          method="POST"
          onSubmit={authenticate}
          autoComplete={"off"}
        >
          {/* Insert email */}
          <div className="username">
            <input
              type="email"
              className={`form-control ${
                validate.validate && validate.validate.email
                  ? "is-invalid "
                  : ""
              }`}
              id="email"
              name="email"
              value={email}
              placeholder="Insert Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.email
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.email
                ? validate.validate.email[0]
                : ""}
            </div>
          </div>
          {/* Pasword and rememeber me section */}
          <div className="section">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${
                validate.validate && validate.validate.password
                  ? "is-invalid "
                  : ""
              }`}
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" onClick={(e) => togglePassword(e)}>
              <i
                className={showPassword ? "far fa-eye" : "far fa-eye-slash"}
              ></i>{" "}
            </button>

            <div
              className={`invalid-feedback text-start ${
                validate.validate && validate.validate.password
                  ? "d-block"
                  : "d-none"
              }`}
            >
              {validate.validate && validate.validate.password
                ? validate.validate.password[0]
                : ""}
            </div>
            <div className="combined">
              <div className="remember">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.currentTarget.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot">
                Forgot password?
              </Link>
            </div>
          </div>
          <button className="signIn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
