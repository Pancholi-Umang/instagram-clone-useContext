import React, { useContext } from "react";
import "./Component.css";
import Create from "./Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { providedata } from "../Global/Context";
const Homes = () => {
  const { postData } = useContext(providedata);
  console.log(postData);
  
  return (
    <div className="container">
      <div className="w-50 my-3">
        <Create />
      </div>
      <div className="posting w-50">
        {postData?.map((post_value) => {
          const date = new Date(post_value?.createdAt)
          console.log(date)
          return (
            <section className="main mb-3" key={post_value?.id}>
              <div className="left-col">
                <div className="post">
                  <div className="info">
                    <div className="user">
                      <div className="profile-pic">
                        <img
                          src={post_value?.image}
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <p className="mt-3 username">{post_value?.name}</p>
                    </div>
                    <img src="img/option.PNG" className="options" alt="" />
                  </div>
                  <img
                    src={post_value?.image}
                    className="post-image"
                    alt=""
                  />
                  <div className="post-content">
                    <div className="reaction-wrapper mt-0">
                      <i className="bi bi-heart icon"></i>
                      <i className="bi bi-chat-left icon"></i>
                      <i className="bi bi-send icon"></i>
                      <i className="bi bi-save save icon"></i>
                    </div>
                    <p className="likes">1,012 likes</p>
                    <p className="description" disabled>
                      {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                    </p>
                    <p className="description">
                      <span>{post_value?.name}</span> 
                      {post_value?.text}
                    </p>
                  </div>
                  <div className="comment-wrapper">
                    <img src="img/smile.PNG" className="icon" alt="" />
                    <input
                      type="text"
                      className="comment-box"
                      placeholder="Add a comment"
                    />
                    <button className="comment-btn">post</button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Homes;
