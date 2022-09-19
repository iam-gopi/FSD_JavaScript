import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Index from "./component/Index";
import Register from "./component/Register";
import Login from "./component/Login";
import Error from "./component/Error";

const App = () => (
  <BrowserRouter>
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route component={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
