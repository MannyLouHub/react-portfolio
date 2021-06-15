import React from 'react';
import projectPhoto from "../../../images/Movie_Review_Site.PNG"
import "./style.css"


//Name of Project here
const MovieReviewSite = () => {
  return <div className="container p-5">

    <div className="card col-12 p-4">
      <div className="row">
        <div className={"Project-Header col-12"}>
          <h1>Movie Review Site</h1>
        </div>
      </div>
      <div className="row p-3">
        <div className={"Button1 col-6"}>
          <a href={'https://github.com/MannyLouHub/MovieReviewSite'} className="btn btn-primary btn-block">
            GitHub
          </a>
        </div>
        <div className={"Button2 col-6"}>
          <a href={'https://boiling-beyond-54963.herokuapp.com/'} className="btn btn-primary btn-block">
            Site
          </a>
        </div>
      </div>
      <div className="row">
        <div className="project-image col-12">
          {/*Link the project here.*/}
          <a>
            <img src={projectPhoto} className="profile-photo"
                 alt="Project photo" width={"100%"} height={"100%"}
            />
          </a>
        </div>
        <div className="col-12">
          <div className="row">
            {/*The reason for the project goes here*/}
            <div className="col-12 project-description mt-2">
              An app that makes it easier for users to find new movies and tv shows. This app will allow users to be
              able to review, search, and save movies to their profile. The point of this app was to give a social
              aspect to sharing movies and tv shows with others while finding new ones to enjoy. We tried to make a
              blend of rotten tomatoes and Facebook.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default MovieReviewSite;