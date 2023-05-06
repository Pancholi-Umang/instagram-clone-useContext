import React, { useContext } from "react";
import "./Component.css";
import Create from "./Create";
import { providedata } from "../Global/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Post from "./Post";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");

  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};

const Homes = () => {
  const { postData, removePost, commentPosting } = useContext(providedata);
  let { id, name } = LocalStorageCartItem();
  return (
    <div className="container">
      <div className="w-50 my-3">
        <Create />
      </div>
      <div className="posting w-50">
        {postData?.map((post_value) => {
          return (
            <Post
              removePost={removePost}
              post_value={post_value}
              key={post_value?.post_id}
              id={id}
              name={name}
              commentPosting={commentPosting}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homes;
