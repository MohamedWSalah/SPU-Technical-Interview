import React, { Component } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  handleSubmit(event) {
    if (this.state.email === "" || this.state.password === "")
      return (
        alert("Please Enter your email and password"), event.preventDefault()
      );
    return (
      alert("Logged successfuly, But unfortunately there is no backend"),
      this.props.history.push("/home")
    );
  }

  render() {
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group text-left">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group text-left">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="mt-2">
            <span>Dont have an account? </span>
            <a className="loginText" href="/signup">
              Register Here
            </a>
          </div>
        </form>
      </div>
    );
  }
}
const LoginWithRouter = withRouter(LoginForm);
const Login = () => {
  return (
    <BrowserRouter>
      <LoginWithRouter />
    </BrowserRouter>
  );
};
export default Login;
