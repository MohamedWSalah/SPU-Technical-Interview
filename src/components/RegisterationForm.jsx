import React, { useState } from "react";
import UploadF from "./Upload";
function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      alert("Registered Successfuly");
    } else {
      alert("Passwords do not match");
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
      <form>
        <div className="form-group text-left">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="First Name"
          />
        </div>

        <div className="form-group text-left">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
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
            id="phone"
            placeholder="Phone Number"
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

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      {/* <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText">
          Login here
        </span>
      </div> */}
    </div>
  );
}

export default RegistrationForm;
