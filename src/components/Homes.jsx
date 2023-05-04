import React, { useContext } from "react";
import "./Component.css";
import Create from "./Create";
import { providedata } from "../Global/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");

  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};

const Homes = () => {
  const { postData, removePost } = useContext(providedata);
  let { id } = LocalStorageCartItem();

  const deletePost = (postId) => {
    removePost(postId);
  };

  return (
    <div className="container">
      <div className="w-50 my-3">
        <Create />
      </div>
      <div className="posting w-50">
        {postData?.map((post_value) => {
          const date = new Date(post_value?.createdAt);
          return (
            <section className="main mb-3" key={post_value?.post_id}>
              <div className="left-col">
                <div className="post">
                  <div className="info">
                    <div className="user">
                      <div className="profile-pic">
                        {/* add image user profile */}
                      </div>
                      <p className="mt-3 username">{post_value?.name}</p>
                    </div>
                  </div>

                  {/* {post_value?.image?.map((photos, index) => {
                    return (
                      <img
                        key={index}
                        src={photos}
                        className="post-image w-100"
                        alt="..."
                      />
                    );
                  })} */}


                  <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {post_value?.image?.map((photos, index) => {
                        return (
                          <div key={index} className={`carousel-item ${index == 0 && "active"}`}>
                            <img
                              src={photos}
                              className="post-image d-block w-100"
                              alt="..."
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="post-content">
                    <div className="reaction-wrapper mt-0">
                      <i className="bi bi-heart icon"></i>
                      <i className="bi bi-chat-left icon"></i>
                      <i className="bi bi-send icon"></i>
                      {post_value?.id === id ? (
                        <i
                          className="bi bi-trash save icon"
                          onClick={() => deletePost(post_value?.post_id)}
                        ></i>
                      ) : null}
                    </div>
                    <p className="likes">1,012 likes</p>
                    <p className="description" disabled>
                      {`${date.getDate()}/${
                        date.getMonth() + 1
                      }/${date.getFullYear()}`}
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
