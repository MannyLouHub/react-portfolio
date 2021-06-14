import React from 'react';
import projectPhoto from "../../../images/Movie_Review_Site.PNG"
//Name of Project here
const MovieReviewSite = () => {
  return <div className="container p-5">

    <div className="card col-12 p-4">
      <div className="row">
        <div className={"Project-Header col-12"}>
          <h1>Movie Review Site</h1>
        </div>
      </div>
      <div className="row">
        <div className="project-image col-12">
          {/*Link the project here.*/}
          <a href={'https://boiling-beyond-54963.herokuapp.com/'}>
            <img src={projectPhoto} className="profile-photo"
                 alt="Project photo" width={"100%"} height={"100%"}
            />
          </a>
        </div>
        <div className="col-12">
          <div className="row">
            {/*The reason for the project goes here*/}
            <p className="col-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default MovieReviewSite;