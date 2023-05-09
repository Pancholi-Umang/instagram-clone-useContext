import React, { useContext } from "react";
import { providedata } from "../Global/Context";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");
  
  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
}; 

const Profile = () => {
  const checkUsers = useContext(providedata);
  console.log(checkUsers?.userData)

  const myFunction = () => {
    document.getElementById('clickImage').click();
  }
  const data = LocalStorageCartItem();
  console.log(data)
  return (
    <div className="profile_body">
      <div className="profile_container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>

          <div className="user text-center">
            <div className="profile">
              <img
                src={data?.profile}
                className="rounded-circle pointer"
                width="80"
                onClick={myFunction}
              />
            </div>
          </div>
          <input type="file" className="d-none" id="clickImage" />
          <div className="my-3 text-center">
            <h4 className="mb-0">{data?.name}</h4>
            <span className="text-muted d-block mb-2">{data?.email}</span>
            <button className="btn btn-primary btn-sm follow">EDIT PROFILE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
