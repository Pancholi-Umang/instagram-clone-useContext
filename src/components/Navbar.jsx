import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Component.css";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");

  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};

const Navbar = () => {
  const [Login, setLogin] = useState(false);
  const login_true = LocalStorageCartItem();
  const location = useLocation();
  useEffect(() => {
    if (login_true?.id) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [location.pathname]);

  const navigate = useNavigate();
  const log_out_function = () => {
    localStorage.removeItem('User');
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="error" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active">
                <i
                  style={{ fontSize: "25px", color: "black" }}
                  className="bi bi-house-door-fill"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i
                  style={{ fontSize: "25px", color: "black" }}
                  className="bi bi-telegram"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i
                  style={{ fontSize: "25px", color: "black" }}
                  className="bi bi-compass"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                <i
                  style={{ fontSize: "25px", color: "black" }}
                  className="bi bi-heart"
                ></i>
              </Link>
            </li>
          </ul>
          <form className="d-flex align-items-center" role="search">
            <span style={{ width: "50px" }} className="mx-3">
              {Login === true ? (
                <strong style={{ fontSize: "17px", cursor:"pointer" }} onClick={log_out_function}>Logout</strong>
              ) : (
                <strong style={{ fontSize: "20px" }}>Login</strong>
              )}
            </span>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {Login === true ? (
              <Link className="nav-link" to="/profile">
                <i
                  style={{ fontSize: "30px", color: "black" }}
                  className="bi bi-person-circle"
                ></i>
              </Link>
            ) : null}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
