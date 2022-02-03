import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Forms";

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
    <div className="content">
      {/* FORM BOX */}

      <div className="form-box">
        {/* HEADER */}
        <i className="fas fa-envelope mail"></i>
        <h1>Password</h1>
        {/* FORM FUNCTIONALITY */}
        <form
          className="inside-form-box"
          method="POST"
          onSubmit={forgotPassword}
          autoComplete={"off"}
        >
          <div className="email">
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
          <div className="common-btn">
            <button type="submit" className="btn">
              Get password
            </button>
          </div>
        </form>

        <Link className="back-btn" to="/login">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default Forgot;
