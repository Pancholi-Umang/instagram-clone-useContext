import React, { useContext } from "react";
import "./Component.css";
import Create from "./Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { providedata } from "../Global/Context";

const Homes = () => {
  const { postData } = useContext(providedata);
  return (
    <div className="container">
      <div className="w-50 my-3">
        <Create />
      </div>
      <div className="posting w-50">
        {postData?.map((post_value) => {
          const date = new Date(post_value?.createdAt);
          return (
            <section className="main mb-3" key={post_value?.id}>
              <div className="left-col">
                <div className="post">
                  <div className="info">
                    <div className="user">
                      <div className="profile-pic">
                        {/* add image profile user */}
                      </div>
                      <p className="mt-3 username">{post_value?.name}</p>
                    </div>
                  </div>

                  {/* <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {post_value?.image?.map((photos, index) => {
                        return (
                          <div key={index} className="carousel-item">
                            <img
                              src={photos}
                              className="post-image d-block w-100"
                              alt="..."
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div> */}



                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner" style={{border:"1px solid black", height:"15px"}}>
                      {post_value?.image?.map((photos, index) => {
                        return (
                          <div key={index} style={{border:"1px solid black",height:"15px"}} className="carousel-item">
                            <img
                              src={photos}
                              className="post-image d-block w-100"
                              alt="..."
                              style={{border:"1px solid black",height:"15px"}}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>




                  <div className="post-content">
                    <div className="reaction-wrapper mt-0">
                      <i className="bi bi-heart icon"></i>
                      <i className="bi bi-chat-left icon"></i>
                      <i className="bi bi-send icon"></i>
                      <i className="bi bi-save save icon"></i>
                    </div>
                    <p className="likes">1,012 likes</p>
                    <p style={{ fontSize: "10px" }} disabled>
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
