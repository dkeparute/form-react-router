import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Forms";
import Logo from "../logo.png";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
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

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to 👉 " + email);
      setValidate({});
      setEmail("");
    }
  };
  // CONTENT
  return (
    <div className="general">
      {/* LOGO */}
      <img
        src={Logo}
        alt="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      />
      {/* FORM BOX */}
      <div className="form">
        {/* HEADER */}
        <div className="header">
          <i class="fas fa-envelope user"></i>
          <h2>Forgot password</h2>
        </div>
        {/* FORM FUNCTIONALITY */}
        <form
          className="inside-form"
          method="POST"
          onSubmit={forgotPassword}
          autoComplete={"off"}
        >
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

          <button type="submit" className="signIn">
            Forgot Password
          </button>
        </form>
        <div className="header">
          <i class="fas fa-arrow-circle-left user"></i>
        </div>
        <Link className="back-button" to="/login">
          Back to log in
        </Link>
      </div>
    </div>
  );
};

export default Forgot;
