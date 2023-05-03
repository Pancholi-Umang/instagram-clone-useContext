import React from "react";
import "./Component.css";
import Create from "./Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Homes = () => {
  return (
    <div className="container">
      <div className="w-50 my-3">
        <Create />
      </div>
      <div className="posting w-50">
        
        <section className="main mb-3">
          <div className="left-col">
            <div className="post">
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img src='' alt="" />
                  </div>
                  <p className="username">Umang_Pancholi</p>
                </div>
                <img src="img/option.PNG" className="options" alt="" />
              </div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKAX2e2iflVm-CE_H57qyx6zLLgeoL1nKQTaXonZr&s' className="post-image" alt="" />
              <div className="post-content">
                <div className="reaction-wrapper mt-0">
                <i className="bi bi-heart icon" ></i>
                <i className="bi bi-chat-left icon"></i>
                <i className="bi bi-send icon"></i>
                <i className="bi bi-save save icon"></i>
                </div>
                <p className="likes">1,012 likes</p>
                <p className="description">
                  <span>umang </span> ahiya je post sathe content lakhvano chhe
                  te aavse
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

        <section className="main mb-3">
          <div className="left-col">
            <div className="post">
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img src='' alt="" />
                  </div>
                  <p className="username">Umang_Pancholi</p>
                </div>
                <img src="img/option.PNG" className="options" alt="" />
              </div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKAX2e2iflVm-CE_H57qyx6zLLgeoL1nKQTaXonZr&s' className="post-image" alt="" />
              <div className="post-content">
                <div className="reaction-wrapper mt-0">
                <i className="bi bi-heart icon" ></i>
                <i className="bi bi-chat-left icon"></i>
                <i className="bi bi-send icon"></i>
                <i className="bi bi-save save icon"></i>
                </div>
                <p className="likes">1,012 likes</p>
                <p className="description">
                  <span>umang </span> ahiya je post sathe content lakhvano chhe
                  te aavse
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


      </div>
    </div>
  );
};

export default Homes;
