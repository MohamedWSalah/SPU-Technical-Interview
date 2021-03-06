import React, { useState } from "react";
import UploadF from "./Upload";
import { Route, BrowserRouter, withRouter } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    firstname: "1",
    lastname: "12",
    phonenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
    errors: "",
  });

  const redirectToLogin = () => {
    console.log(props.history);
    props.history.push("/login");
  };

  const handleSubmitClick = (e) => {
    if (
      !state.firstname ||
      !state.lastname ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    )
      return alert("Complete the Empty fields"), e.preventDefault();

    if (state.password === state.confirmPassword) {
      alert("Registered successfully, But unfortunately there is no backend");
      redirectToLogin();
    } else {
      return alert("Passwords do not match"), e.preventDefault();
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmitClick}>
        <div className="form-group text-left">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label>Personal Photo</label>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
        </div>

        <div className="form-group text-left">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phonenumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label>Gender</label>

          <div className="dropdown">
            <select className="form-control">
              <option> Male </option>
              <option> Female </option>
            </select>
          </div>
        </div>

        <div className="form-group text-left">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label>Upload Multiple Files</label>
          <div className="btn btn-danger btn-sm btn-block">
            <UploadF></UploadF>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <Route path="/login" />

        <div
          className="alert alert-success mt-2"
          style={{ display: state.successMessage ? "block" : "none" }}
          role="alert"
        >
          {state.successMessage}
        </div>
        <div className="mt-2">
          <span>Already have an account? </span>
          <a className="loginText" href="/login">
            Login here
          </a>
        </div>
      </form>
    </div>
  );
}
const RegisterWithRouter = withRouter(RegistrationForm);
const Register = () => {
  return (
    <BrowserRouter>
      <RegisterWithRouter />
    </BrowserRouter>
  );
};
export default Register;
