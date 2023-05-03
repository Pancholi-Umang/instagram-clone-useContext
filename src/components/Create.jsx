import React, { useContext, useState } from "react";
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
  const [image, setImage] = useState("");
  const { create } = useContext(providedata);
  let { name, id } = LocalStorageCartItem();
  console.log(image);
  //create function ne context.jsx ma banavayu chhe tene value mathii export karavyu chhe and ahithi data pass thay chhe
  const createPost = (e) => {
    e.preventDefault();
    create({ text, image, name, id });
    setImage("");
    setText("")
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
          </label>{" "}
          <button className="btn btn-sm btn-outline-dark" type="submit">
            Add Post...
          </button>
          <input
            type="file"
            className="d-none"
            id="fileInput"
            accept=".jpg, .jpeg, .png"
            onChange={handleImage}
            required
          />
        </div>
      </form>
    </>
  );
};

export default Create;
