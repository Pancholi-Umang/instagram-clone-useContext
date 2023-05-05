import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Post = ({ removePost, post_value, id, name, commentPosting }) => {
  const deletePost = (postId) => {
    removePost(postId);
  };

  const date = new Date(post_value?.createdAt);

  const [userComment, setUserComment] = useState("");
  const PostComment = (post_id) => {
    if (userComment?.length !== 0) {
      console.log(post_value);
      commentPosting({
        createdAt: post_value?.createdAt,
        id: post_value?.id,
        comment: [...post_value?.comment, { id, name, post_id, userComment }],
        name: post_value?.name,
        post_id: post_value?.post_id,
        text: post_value?.text,
        like: post_value?.like,
        image: post_value?.image,
      });
      setUserComment("");
    } else {
      alert("please Enter Comment Content");
      setUserComment("");
    }
  };

  return (
    <>
      <section className="main mb-3">
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

            <Carousel variant="dark">
              {post_value?.image?.map((i, index) => {
                return (
                  <Carousel.Item key={index} interval={500}>
                    <img
                      className="post-image d-block w-100"
                      src={i}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>

            {/*  */}
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
              <div className="description">
                {post_value?.comment?.map((value,index) => {
                  console.log({value})
                  return (
                    <div key={index}>
                      <p><strong>{value?.name}</strong>&nbsp;{value?.userComment}</p>
                    </div>
                  );
                })}
                {/*  */}
              </div>
            </div>
            <div className="comment-wrapper">
              <img src="img/smile.PNG" className="icon" alt="" />
              <input
                type="text"
                className="comment-box"
                placeholder="Add a comment"
                onChange={(e) => setUserComment(e?.target?.value)}
                value={userComment}
              />
              <button
                className="comment-btn"
                onClick={() => PostComment(post_value?.post_id)}
              >
                post
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
