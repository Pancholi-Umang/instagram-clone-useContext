import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { providedata } from "../Global/Context";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");

  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
};


const EditProfile = () => {

  const navigate = useNavigate();
  const myFunction = () => {
    document.getElementById('clickImage').click();
  }

  const { putdata } = useContext(providedata);

  const [value, setValue] = useState(LocalStorageCartItem());
  const [imageSrc, setImageSrc] = useState("");


  const onImageChange = (event) => {
    let files = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
  }

  const clickHandleData = (e) => {
    e.preventDefault();
    const {id} = value;
    if (imageSrc == "") {
      putdata({name,id})
      navigate("/");
      
    } else if (imageSrc != "") {
      const profile = imageSrc;
      putdata({name,profile,id})
      navigate("/");
    }

  }

  const [name, setName] = useState(value?.name)

  return (
    <div className="profile_body">
      <div className="profile_container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              {
                imageSrc == "" ? (
                  <img
                    src={value?.profile}
                    className="my-2 pointer rounded-circle"
                    width="100"
                    height="100"
                    onClick={myFunction}
                  />
                ) : (
                  <img
                    src={imageSrc}
                    className="my-2 pointer rounded-circle"
                    width="100"
                    height="100"
                    onClick={myFunction}
                  />
                )
              }

            </div>
          </div>
          <input type="file" className="d-none" id="clickImage" onChange={onImageChange} />
          <div className="my-3 text-center">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <span className="text-muted d-block mb-2">{value?.email}</span>

            {
              name == "" ? (null) :
                <button className="btn btn-primary btn-sm follow" onClick={clickHandleData}>Submit</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile