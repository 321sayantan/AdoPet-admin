/* eslint-disable react/prop-types */
import { useState } from "react";
import { Alert } from "@mui/material";
import useInput from "../hooks/use-input";

const LoginForm = ({ onSubmit, error }) => {
  const [showPswrd, setShowPswrd] = useState(false);
  const {
    value: enteredUname,
    valueChangeHandler: onChangeUname,
    valueInputBlurHandler: onBlurUname,
    hasError: unameInvalid,
    isValid: unameValid,
    resetHandler: resetUname,
  } = useInput((val) => val.trim().length >= 3);

  const {
    value: enteredPswrd,
    valueChangeHandler: onChangePswrd,
    valueInputBlurHandler: onBlurPswrd,
    hasError: pswrdInvalid,
    isValid: pswrdValid,
    resetHandler: resetPswrd,
  } = useInput((val) => val.trim().length >= 3);

  let formIsValid = false;
  if (unameValid && pswrdValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (unameValid && pswrdInvalid) {
      return;
    }
    const loginData = {
      username: enteredUname,
      password: enteredPswrd,
    };

    onSubmit(loginData);
    resetUname();
    resetPswrd();
  };

  return (
    <>
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      <form className="text-start" onSubmit={submitHandler}>
        <div className="input-group input-group-outline my-3">
          <input
            type="text"
            placeholder="Username"
            className={`form-control ${unameInvalid ? "is-invalid" : ""}`}
            onBlur={onBlurUname}
            onChange={onChangeUname}
            value={enteredUname}
          />
        </div>
        <div className="input-group input-group-outline mb-3">
          <input
            type={showPswrd ? "text" : "password"}
            placeholder="Password"
            className={`form-control ${pswrdInvalid ? "is-invalid" : ""}`}
            onBlur={onBlurPswrd}
            onChange={onChangePswrd}
            value={enteredPswrd}
          />
        </div>
        <div className="form-check form-switch d-flex align-items-center mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="showPassword"
            onChange={() => setShowPswrd((prev) => !prev)}
          />
          <label className="form-check-label mb-0 ms-3" htmlFor="showPassword">
            Show Password
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn bg-gradient-primary w-100 my-4 mb-2"
            disabled={!formIsValid}
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
