import React from 'react';
import projectPhoto from "../../../images/Stock_Investigator.PNG"
import "./style.css"


const StockNewsApp = () => {
  return <div className="container p-5">

    <div className="card col-12 p-4">
      <div className="row">
        <div className={"Project-Header col-12"}>
          <h1>Stock-News-Application</h1>
        </div>
      </div>
      <div className="row p-3">
        <div className={"Button1 col-6"}>
          <a href={'https://github.com/MannyLouHub/Stock-News-App'} className="btn btn-primary btn-block">
            GitHub
          </a>
        </div>
        <div className={"Button2 col-6"}>
          <a href={'https://mannylouhub.github.io/Stock-News-App/'} className="btn btn-primary btn-block">
            Site
          </a>
        </div>
      </div>
      <div className="row">
        <div className="project-image col-12">
          <a href={'https://mannylouhub.github.io/Stock-News-App/'}>
            <img src={projectPhoto} className="profile-photo"
                 alt="Project photo" width={"100%"} height={"100%"}
            />
          </a>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="project-description mt-2">
              This application was one of my very first. I combined my love of programming and my interest in the stock
              market to try and design a helpful webpage. The sole purpose of this site is for users to search a stock
              ticker and find relatable news based on the searched stock. We also allowed users to save their favorite
              tickers for ease of access when leaving and coming back to the webpage. We grabbed all of the information
              from APIs that allowed us to create a chart for the stock price and show news related to it.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default StockNewsApp;