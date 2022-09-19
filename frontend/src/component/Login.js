import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username, password };

    // fetch("http://localhost:8082/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((data) => data.json())
    //   .then((data) => console.log(data))
    //   .catch((er) => console.error(er));

    axios
      .post("http://localhost:8082/api/auth/login", data)
      .then((data) => {
        console.log(data);
        console.log(data.data);
      })
      .catch((er) => console.error(er));
  };

  const handleChange = (fieldName) => (e) => {
    setValues({ ...values, [fieldName]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="email"
          required
          className="form-control"
          value={username}
          onChange={handleChange("username")}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          className="form-control"
          value={password}
          onChange={handleChange("password")}
        />
        <button class="btn btn-primary mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
