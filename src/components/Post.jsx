import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Post = ({ removePost, post_value, id, name, commentPosting, deletePostComment }) => {
  const deletePost = (postId) => {
    removePost(postId);
  };
  const date = new Date(post_value?.createdAt);
  const navigate = useNavigate();

  const [userComment, setUserComment] = useState("");
  const PostComment = (post_id) => {
    if (userComment?.length !== 0) {
      commentPosting({
        post_id: post_value?.post_id,
        comment: [...post_value?.comment, { id, name, post_id, userComment }],
        // createdAt: post_value?.createdAt, id: post_value?.id, name: post_value?.name,
        // text: post_value?.text, like: post_value?.like, image: post_value?.image,
      });
      setUserComment("");
    } else {
      alert("please Enter Comment Content");
    }
  };

  const editComment = (allCommentData,index) => {
    const {post_id} = allCommentData;
    navigate(`/edit-comment/${post_id}/${index}`)
  }

  const Editdata = (id) => {
    navigate(`/edit-items/${id}`);
  };

  const commentDelete = (val) => {
    const { post_id } = val;
    const filter = post_value?.comment?.filter((value) => {
      return value !== val
    })
    deletePostComment({ filter, post_id })
  }

  return (
    <>
      <section className="main mb-3">
        <div className="left-col">
          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic">
                  {/* add image user profile */}
                  <img
                    className="post-image rounded-circle"
                    src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
                    alt="First slide"
                  />
                </div>
                <p className="mt-3 username">{post_value?.name}</p>
              </div>
            </div>
            <p className="classMade"><strong>Title:-&nbsp;</strong>{post_value?.text}</p>

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

            <div className="post-content">
              <div className="reaction-wrapper mt-0">
                <i className="bi bi-heart icon"></i>
                {post_value?.id === id ? (
                  <>
                    <i
                      className="bi bi-pencil-square icon"
                      onClick={() => Editdata(post_value?.post_id)}
                    ></i>
                    <i
                      className="bi bi-trash save icon"
                      onClick={() => deletePost(post_value?.post_id)}
                    ></i>
                  </>
                ) : null}
              </div>
              <p className="likes">1,012 likes</p>
              <p className="description" disabled>
                {`${date.getDate()}/${date.getMonth() + 1
                  }/${date.getFullYear()}`}
              </p>
              <div className="description">
                {post_value?.comment?.map((value, index) => {
                  // comment valu
                  return (
                    <div key={index} className="d-flex justify-content-between " style={{ height: "20px" }}>
                      <p className="d-inline">
                        <strong>{value?.name}</strong>&nbsp;{value?.userComment}
                      </p>
                      {/* here only id means login id and value?.id that means login id also */}
                      {value?.id === id ? (
                        <span>
                          <i className="bi bi-pencil-square icon" onClick={()=>editComment(value,index)}></i>
                          <i className="bi bi-trash save icon" style={{ marginLeft: "15px" }} onClick={() => commentDelete(value)}></i>
                        </span>
                      ) : null}

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
