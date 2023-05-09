import React, { useContext, useState } from "react";
import "./Component.css";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import startImage from '../assets/add_image.png'
import { providedata } from "../Global/Context";


const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  
  const { sendregistration } = useContext(providedata);
  const [imageSrc, setImageSrc] = useState("");
  const [imageblank, setImageBlank] = useState(startImage)
  const navigate = useNavigate();
  const myFunction = () => {
    document.getElementById("targetImage").click();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      sendregistration({
        name:values?.name,
        email:values?.email,
        password:values?.password,
        profile:imageSrc
      })
      formik?.resetForm();
      navigate("/")
    },
  });


  const onImageChange = (event) => {

    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

  }

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
        <div className="app_add_image_wrapper">
                                          {/* making a toggle image start */}
         {
           imageSrc == "" ? (
            <img
            src={imageblank}
            alt="Add Image"
            style={{ height: "80px", width: "80px" }}
            className="rounded-circle"
            onClick={myFunction}
          />
           ):(
            <img
            src={imageSrc}
            alt="Add Image"
            style={{ height: "80px", width: "80px" }}
            className="rounded-circle"
            onClick={myFunction}
          />
           )
         }
                                {/* making a toggle image end */}
          <input
            type="file"
            className="d-none"
            id="targetImage"
            onChange={onImageChange}
            name="image"
            required
          />

        </div>


        <div className="input_values">
          <input
            type="text"
            onBlur={formik?.handleBlur}
            onChange={formik?.handleChange}
            value={formik?.values?.name}
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
            Have an account?
            <Link to="/login" className="text-primary">
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
