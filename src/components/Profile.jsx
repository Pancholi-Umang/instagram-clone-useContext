import React from "react";
import { Link } from "react-router-dom";

const LocalStorageCartItem = () => {
  let userDetails = localStorage.getItem("User");
  
  if (userDetails) {
    return JSON.parse(localStorage.getItem("User"));
  } else {
    return [];
  }
}; 

const Profile = () => {
  const data = LocalStorageCartItem();

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
                className="my-2 pointer"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className="my-3 text-center">
            <h4 className="mb-0">{data?.name}</h4>
            <span className="text-muted d-block mb-2">{data?.email}</span>
            <Link to={`edit_profile/${data?.id}`} className="btn btn-primary btn-sm follow">EDIT PROFILE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
