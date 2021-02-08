import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    password: "",
    error: "",
  };

  signupHandler = (e) => {
    e.preventDefault();
    console.log("signup clicked");
    const { name, phone, email, password } = this.state;
    console.log(name, phone, email, password);
  };
  render() {
    return (
      <Fragment>
        <form>
          <div className="row g-3 align-items-center">
            <h1 className="display-4">Sign Up</h1>
            <div className="col-auto">
              <label for="inputName" className="col-form-label">
                Name
              </label>
            </div>
            <div className="col-auto">
              <input
                type="name"
                id="inputName"
                className="form-control"
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="col-auto">
              <label for="inputEmail" className="col-form-label">
                Email
              </label>
            </div>
            <div className="col-auto">
              <input
                type="email"
                id="inputEmail"
                required
                className="form-control"
                onChange={(e) => {
                  console.log(...this.state);
                  // this.setState(...this.state, { email: e.target.value })
                }}
              />
            </div>
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-auto">
              <input
                type="password"
                id="inputPassword6"
                required
                className="form-control"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
            <div className="col-auto">
              <label for="inputPhone" className="col-form-label">
                Phone Number
              </label>
            </div>
            <div className="col-auto">
              <input
                type="phone"
                required
                id="inputPhone"
                className="form-control"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => this.signupHandler()}
            >
              SignUp
            </button>
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Login;
