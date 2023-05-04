import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const providedata = createContext();

const Context = (props) => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  
  const create = (data) => {
    axios
      ?.post(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts`, data)
      .then((response) => {
        console.log(response);
        getPost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removePost = (RemovePostId) => {
    axios.delete(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${RemovePostId}`)
      .then((res) => {
        console.log(res?.data);
        getPost();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetUsers = () => {
    axios
      .get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/users`)
      .then((res) => setUserData(res?.data));
  };

  const getPost = async () => {
    await axios
      .get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts`)
      .then((res) => setPostData(res?.data));
  };

  useEffect(() => {
    GetUsers();
    getPost();
  }, []);
  return (
    <providedata.Provider value={{ userData, create, postData, removePost }}>
      {props.children}
    </providedata.Provider>
  );
};

export default Context;
