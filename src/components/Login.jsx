import React, { useContext, useEffect } from "react";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/LoginSpecial";
import { Link } from "react-router-dom";
import "./Component.css";
import { providedata } from "../Global/Context";
import { useNavigate } from "react-router-dom";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");
  
  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};
const initialValues = {
  email: "",
  password: "",
};


const Login = () => {
  
  const checkUsers = useContext(providedata);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const userExist = checkUsers?.userData?.filter((user)=>{
        return user?.email === values?.email && user?.password === values?.password
      })
      //match nai thay tyare undefined vali error ahiya thi aavse
      localStorage.setItem('User', JSON.stringify(userExist[0]));
      formik?.resetForm();
      navigate('/')
    },
  });
  
  const login_true = LocalStorageCartItem();
  useEffect(()=>{
    if(!login_true?.id){
      navigate('/login')    
    }else{
      navigate('/')
    }
  },[])

  return (
    <div className="app">
      <form className="container_Wrapper_Login" onSubmit={formik?.handleSubmit}>
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
        <div className="End_container mt-1">
          <button type="submit" className="btn_class">
            Login
          </button>
        </div>
        <div className="Goto_Login">
          <div>
            Don't have an account ? 
            <Link to="/register" className="text-primary">
              &nbsp;Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
