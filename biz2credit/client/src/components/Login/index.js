import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  loginHandler = (e) => {
    e.preventDefault();
    console.log("logged in");
  };
  render() {
    return (
      <Fragment>
        <form>
          <div className="row g-3 align-items-center">
            <h1 className="display-4">Login</h1>
            <div className="col-auto">
              <label for="inputEmail" className="col-form-label">
                Email
              </label>
            </div>
            <div className="col-auto">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                onChange={(e) => this.setState({ email: e.target.value })}
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
                className="form-control"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => this.loginHandler}
            >
              Login
            </button>
            <Link to="/signup">
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Login;
