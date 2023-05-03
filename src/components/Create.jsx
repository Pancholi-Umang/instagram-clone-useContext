import React, { useContext, useEffect, useState } from "react";
import "./Component.css";
import { providedata } from "../Global/Context";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");

  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};

const Create = () => {
  const [text, setText] = useState("");
  const [image, setImages] = useState([]);
  const { create } = useContext(providedata);
  let { name, id } = LocalStorageCartItem();

  const createPost = (e) => {
    e.preventDefault();
    create({ text, image, name, id });
    setImages([]);
    setText("");
  };

  //multiple image in base64
  const handleImage = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.readAsDataURL(files[i]);

      reader.onload = () => {
        newImages.push(reader.result);
        if (newImages?.length === files?.length) {
          setImages([...image, ...newImages]);
        }
      };
    }
  };

  // ------> Store Single Image  <-----
  //   const handleImage = (event) => {
  //     let files = event.target.files[0];
  //     let reader = new FileReader();
  //     reader.readAsDataURL(files);
  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };
  //   };

  return (
    <>
      <form className="container create_bg" onSubmit={createPost}>
        <div className="text-center">
          <input
            type="text"
            style={{
              fontSize: "20px",
              width: "70%",
              paddingLeft: "10px",
              marginTop: "5px",
            }}
            placeholder="what are in your mind..."
            onChange={(e) => setText(e?.target?.value)}
            value={text}
            required
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <label htmlFor="fileInput">
            <i
              style={{ fontSize: "27px", color: "black", cursor: "pointer" }}
              className="bi bi-camera"
            ></i>
          </label>
          <button className="btn btn-sm btn-outline-dark" type="submit">
            Add Post...
          </button>
          <input
            type="file"
            className="d-none"
            id="fileInput"
            multiple
            onChange={handleImage}
            required
          />
        </div>
      </form>
    </>
  );
};

export default Create;
