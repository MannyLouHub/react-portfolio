import React from 'react';
import projectPhoto from "../../../images/Weather_Dashboard.PNG"
import "./style.css"


//Name of Project here
const WeatherDashboard = () => {
  return <div className="container p-5">

    <div className="card col-12 p-4">
      <div className="row">
        <div className={"Project-Header col-12"}>
          <h1>Weather Dashboard</h1>
        </div>
      </div>
      <div className="row p-3">
        <div className={"Button1 col-6"}>
          <a href={'https://github.com/MannyLouHub/Weather-Dashboard'} className="btn btn-primary btn-block">
            GitHub
          </a>
        </div>
        <div className={"Button2 col-6"}>
          <a href={'https://mannylouhub.github.io/Weather-Dashboard/'} className="btn btn-primary btn-block">
            Site
          </a>
        </div>
      </div>
      <div className="row">
        <div className="project-image col-12">
          {/*Link the project here.*/}
          <a href={'https://mannylouhub.github.io/Weather-Dashboard/'}>
            <img src={projectPhoto} className="profile-photo"
                 alt="Project photo" width={"100%"} height={"100%"}
            />
          </a>
        </div>
        <div className="col-12">
          <div className="row">
            {/*The reason for the project goes here*/}
            <p className="col-12">
              This is one of the applications from my FullStack Developer Course. The purpose of this app was to get
              myself familiar with pulling information from an API and showing it on a webpage. It's not a complicated
              webpage, but it taught me how to download sublibraries and to use the local storage to temporarily store
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default WeatherDashboard;