import React from 'react';
import Thumbnail from './Thumbnail';
import netflix from '../images/netflix.jpg'
import stockNews from '../images/pexels-stock.jpg'
import weatherDashboard from '../images/weather-dashboard.jpg'
import dayPlanner from '../images/dayplanner.jpg'

function Projects(props) {
  return (
      <div className={'container p-5'}>
        <div className={'row'}>
          <div className={'col-md-9'}>
            <div className={'card p-4'}>
              <h3> Projects</h3>
            <div className={'row'}>
              <Thumbnail
                  href='https://glacial-shore-36326.herokuapp.com/ '
                  image={netflix}
                  title='Subscription Tracker'
              />
              <Thumbnail
                  href='https://mannylouhub.github.io/Stock-News-App/'
                  image={stockNews}
                  title='Stock-New-App'
              />
            </div>
            <div className={'row'}>
              <Thumbnail
                  href=' https://mannylouhub.github.io/Weather-Dashboard/ '
                  image={weatherDashboard}
                  title='Weather Dashboard'
              />
              <Thumbnail
                  href=' https://mannylouhub.github.io/Day-Planner/ '
                  image={dayPlanner}
                  title='Work Day Planner'
              />
            </div>
          </div>
        </div>
          <div className={'col-lg-3 p-2'}>
            <div className={'card p-4'}>
            <h3>Description</h3>
              <p>Here is a list of Javascript Projects that I worked on by myself and some with a team.</p>
          </div>
        </div>
      </div>

      </div>
  )
}


export default Projects;