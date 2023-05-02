import React from "react";
import "./Component.css";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { Link } from "react-router-dom";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      axios.post(`https://644f9340ba9f39c6ab66e61a.mockapi.io/users`,values)
      formik?.resetForm();
    },
  });
  return (
    <div className="app">
      <form className="container_Wrapper" onSubmit={formik?.handleSubmit}>
        <div className="app__headerWrapper">
          <img
            src={logo}
            alt="Instagram original logo"
            className="logo_Registration"
          />
        </div>
        <div className="input_values">
          <input
            type="text"
            value={formik?.values?.name}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            name="name"
            placeholder="Enter Username"
          />
          {formik?.errors?.name && formik?.touched?.name ? (
            <p className="form-error"> {formik?.errors?.name} </p>
          ) : null}
          <input
            type="email"
            value={formik?.values?.email}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            name="email"
            placeholder="Enter Email"
          />
          {formik?.errors?.email && formik?.touched?.email ? (
            <p className="form-error"> {formik?.errors?.email} </p>
          ) : null}
          <input
            type="password"
            value={formik?.values?.password}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
          />
          {formik?.errors?.password && formik?.touched?.password ? (
            <p className="form-error"> {formik?.errors?.password} </p>
          ) : null}
        </div>
        <div className="End_container mt-3">
          <button type="submit" className="btn_class">
            Sign Up
          </button>
        </div>
        <div className="Goto_Login">
          <div>
            Have an account? <Link to='/login' className="text-primary"> Log in </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
