import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


export const providedata = createContext();

const Context = (props) => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  // const navigate = useNavigate();

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
    axios
      .delete(
        `https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${RemovePostId}`
      )
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

  const commentPosting = async (data) => {
    console.log(data);
    await axios
      ?.put(
        `https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${data?.post_id}`,
        data
      )
      .then((res) => {
        console.log(res?.data);
        getPost();
      })
      .catch((error) => console.error(error));
  };

  const editPostView = async ({ myState, image, emptyImage, user_ids }) => {
    if (myState?.length !== 0 && image?.length !== 0) {
      await axios
        ?.put(
          `https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${user_ids}`,
          {
            text: myState,
            image: image,
          }
        )
        .then((res) => {
          console.log(res?.data);
          getPost();
        })
        .catch((error) => {
          console.log(error);

        });

    } else if (myState?.length !== 0 && image?.length === 0) {
      axios
        ?.put(
          `https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${user_ids}`,
          {
            text: myState,
            image: emptyImage,
          }
        )
        .then((res) => {
          console.log(res?.data);
          getPost();
        })
        .catch((error) => console.log(error));

    }  else {
      alert("proper Edit");
    }
  };

  useEffect(() => {
    GetUsers();
    getPost();
  }, []);
  return (
    <providedata.Provider
      value={{
        userData,
        create,
        postData,
        removePost,
        commentPosting,
        editPostView,
      }}
    >
      {props.children}
    </providedata.Provider>
  );
};

export default Context;
