import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { providedata } from "../Global/Context";

const EditPost = () => {
  const { user_ids } = useParams();
  const [myState, setMyState] = useState("");
  const [image, setImages] = useState([]);
  const [emptyImage, setEmptyImage] = useState([]);
  const { editPostView } = useContext(providedata);
  const navigate = useNavigate();

  const handleImage = (event) => {
    const files = event?.target?.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);

      reader.onload = () => {
        newImages?.push(reader.result);
        if (newImages?.length === files?.length) {
          setImages([...image, ...newImages]);
        }
      };
    }
  };

  const getData = () => {
    axios
      ?.get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${user_ids}`)
      .then((res) => {
        setMyState(res?.data?.text);
        setEmptyImage(res?.data?.image);
      })
      .catch((error) => console?.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const postEdit = () => {
    editPostView({ myState, image, emptyImage, user_ids });
    navigate('/')
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <Link to="/" className="btn btn-primary text-dark mb-2">
          back to home page
        </Link>
        <textarea
          type="text"
          name="text"
          className="mb-2"
          style={{ height: "40px", paddingLeft: "10px" }}
          onChange={(e) => setMyState(e?.target?.value)}
          required
          value={myState || ""}
        />
        <input
          type="file"
          onChange={handleImage}
          style={{ width: "200px" }}
          name="image"
          multiple
          className="mb-2 border border-primary"
        />
        <button onClick={postEdit} className="btn btn-secondary">
          complate Edited
        </button>
      </div>
    </div>
  );
};

export default EditPost;
