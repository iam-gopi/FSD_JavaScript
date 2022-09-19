import React from "react";
import login from "../assets/login.png";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirmPassword: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("password not match");
      return;
    }
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    fetch("http://localhost:8082/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((er) => {
        console.error(er);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <form onSubmit={this.handleSubmit}>
              <label className="form-label">Username</label>
              <input
                type="email"
                required
                className="form-control"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <br />
              <label className="form-label">Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <br />
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.confirmPassword}
                onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })
                }
              />
              <br />
              <button className="btn btn-primary">Register</button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={login} className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
