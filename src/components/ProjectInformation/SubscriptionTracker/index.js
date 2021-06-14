import React from 'react';
import projectPhoto from "../../../images/Subtract_Screenshot.PNG"

const SubscriptionTracker = () => {
  return <div className="container p-5">

    <div className="card col-12 p-4">
      <div className="row">
        <div className={"Project-Header col-12"}>
          <h1>Subscription Tracker App</h1>
        </div>
      </div>
      <div className="row">
        <div className="project-image col-12">
          <a href={'https://glacial-shore-36326.herokuapp.com/members'}>
            <img src={projectPhoto} className="profile-photo"
                 alt="Project photo" width={"100%"} height={"100%"}
            />
          </a>
        </div>
        <div className="col-12">
          <div className="row">
            <p className={"col-12 project-description"}>
              The subscription tracker is a web-based application that has user authentication and User Account creation. After users log in or create their account, they can use this webpage to search available subscription services provided by a back-end Database. Once the user              finds a subscription service that matches what they use or pays for monthly, they can add it to the "Your Subscription Service" Tab. Once the user has multiple items on that tab the site will calculate the monthly price of all their subscription services. Users can              also create custom subscription services that are not provided by our back-end Database. These custom services will also be calculated within the users' monthly price once added.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default SubscriptionTracker;