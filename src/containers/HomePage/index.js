import React from 'react';
import profilePhoto from "../../images/magic_7 Profile Photo.jpg"

const HomePage = () => {
  return <div className="container p-5">
    <div className="card p-3">
      <div className="row">

        <div className="col-12 col-md-12 col-lg-3 text-center pt-5">
          <img src={profilePhoto} className="profile-photo"
               alt="Profile Picture of Lin Li" width="200" height="200"/>
        </div>
        <div className="col-12 col-md-12 col-lg-9 pt-5">
          <h2>About Me</h2>
          <div className="row">
            <p className="col">
              Looking to start my career in software development, My aim is to build professional
              experience as most of my experience in development is from all my personal work. I am close
              to graduating from my full stack development course and would like to use the skills I
              obtained to work somewhere where I can grow my professional experience in the field. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default HomePage;