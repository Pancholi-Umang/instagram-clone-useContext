import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ removePost, post_value, id, name, commentPosting, deletePostComment, PostToLike, deletePostLike, profile }) => {
  const deletePost = (postId) => {
    removePost(postId);
  };

  // console.log(post_value)

  const date = new Date(post_value?.createdAt);
  const navigate = useNavigate();

  const [userComment, setUserComment] = useState("");

  const PostComment = (post_id) => {
    if (userComment?.length !== 0) {
      commentPosting({
        post_id: post_id,
        comment: [...post_value?.comment, { id, name, post_id, userComment, profile }],
        // createdAt: post_value?.createdAt, id: post_value?.id, name: post_value?.name,
        // text: post_value?.text, like: post_value?.like, image: post_value?.image,
      });
      setUserComment("");
    } else {
      alert("please Enter Comment Content");
    }
  };

  const editComment = (allCommentData, index) => {
    const { post_id } = allCommentData;
    navigate(`/edit-comment/${post_id}/${index}`);
  };

  const Editdata = (id) => {
    navigate(`/edit-items/${id}`);
  };

  const commentDelete = (val) => {
    const { post_id } = val;
    const filter = post_value?.comment?.filter((value) => {
      return value !== val;
    });
    deletePostComment({ filter, post_id });
  };

  const LikePost = (post_id) => {
    const dat = post_value?.like?.filter((value) => {
      return value?.id == id && value?.post_id && post_id;
    });

    // console.log(dat)
    if (dat.length == 0) {
      console.log("not liked");
      PostToLike({
        post_id: post_id,
        like: [...post_value?.like, { id, name, post_id, profile }],
      });
    } else {
      console.log("liked");
      const remove = post_value?.like?.filter((value) => {
        return value?.id !== id;
      });
      deletePostLike({ remove, post_id });
    }
  };

  const toggleLikeButton = post_value?.like?.filter((value) => {
    return value?.id == id && value?.post_id && post_value?.post_id;
  });

  return (
    <>
      <section className="main mb-3">
        <div className="left-col">
          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic">
                  {/* add image user profile */}
                  <img className="post-image rounded-circle" alt="First slide"
                    src={post_value?.profile} />
                </div>
                <p className="mt-3 username">{post_value?.name}</p>
              </div>
            </div>
            <p className="classMade">
              <strong>Title:-&nbsp;</strong>
              {post_value?.text}
            </p>

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
                {toggleLikeButton.length == 0 ? (
                  <i
                    className="bi bi-heart icon"
                    onClick={() => LikePost(post_value?.post_id)}
                  ></i>
                ) : (
                  <i
                    className="bi bi-heart-fill icon"
                    onClick={() => LikePost(post_value?.post_id)}
                  ></i>
                )}

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
              {post_value?.like?.length >= 2 ? (
                <p className="likes" >
                  <Link style={{ textDecoration: "none", color: "black" }} to={`perticularPostLike/${post_value?.post_id}`}>{`Liked by ${post_value?.like?.[post_value?.like?.length - 1]?.name
                    } and ${post_value?.like?.length - 1} others `}</Link>
                </p>
              ) : (
                <p className="likes"><Link to={`perticularPostLike/${post_value?.post_id}`} style={{ textDecoration: "none", color: "black" }}>{`${post_value?.like?.length} Like`}</Link></p>
              )}

              <p className="description" disabled>
                {`${date.getDate()}/${date.getMonth() + 1
                  }/${date.getFullYear()}`}
              </p>
              <div className="description">
                {post_value?.comment?.map((value, index) => {
                  // comment valu
                  return (
                    <div
                      key={index}
                      className="d-flex justify-content-between "
                      style={{ height: "30px" }}
                    >
                      
                      <p className="d-inline ">
                        <img src={value?.profile} style={{height:"25px",width:"25px",marginRight:"5px", backgroundSize:"cover"}} className="rounded-circle" alt="" />
                        <strong>{value?.name}</strong>&nbsp;{value?.userComment}
                      </p>
                      {/* here only id means login id and value?.id that means login id also */}
                      {value?.id === id ? (
                        <span>
                          <i
                            className="bi bi-pencil-square icon"
                            onClick={() => editComment(value, index)}
                          ></i>
                          <i
                            className="bi bi-trash save icon"
                            style={{ marginLeft: "15px" }}
                            onClick={() => commentDelete(value)}
                          ></i>
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
