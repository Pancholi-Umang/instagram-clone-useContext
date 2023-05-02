import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");
  
  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};

const Protected = ({ Component }) => {
  const data = LocalStorageCartItem();
  const navigate = useNavigate();
  console.log(data)
  useEffect(() => {
    if (!data?.id) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
