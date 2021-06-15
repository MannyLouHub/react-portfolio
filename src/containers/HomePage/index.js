import React from 'react';
import profilePhoto from "../../images/Photo.jpg"
import "../../components/CSS/homepage.css"

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
            <p className="col shortDesc">
              Full-stack web developer with a background in Corporate IT, Healthcare IT, and Computer Software
              Engineering
              Degree. Comfortable with being a team player, coordinating well with others, and passionate about my
              problem-solving skills. I like to challenge myself to find the best possible outcome for any given
              scenario. This attitude
              allowed me to achieve a Full Stack Certificate in 6 months to jump-start my dream job as a Software
              Developer. This
              keeps me focused on my long-term goal to have a career in software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default HomePage;