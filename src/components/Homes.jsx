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
  const { postData, removePost, commentPosting, deletePostComment, PostToLike, deletePostLike } = useContext(providedata);
  let { id, name, profile } = LocalStorageCartItem();
  return (
    <div className="container d-flex">
      <div className="w-50">
        <div className="my-3">
          <Create />
        </div>
        <div className="posting">
          {postData?.map((post_value) => {
            return (
              <Post
                removePost={removePost}
                post_value={post_value}
                key={post_value?.post_id}
                id={id}
                name={name}
                profile={profile}
                commentPosting={commentPosting}
                deletePostComment={deletePostComment}
                PostToLike={PostToLike}
                deletePostLike={deletePostLike}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="w-50 border border-danger mt-3"></div> */}
    </div>
  );
};

export default Homes;

