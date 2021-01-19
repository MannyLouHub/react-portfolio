import React from 'react';
import Thumbnail from './Thumbnail';
import netflix from '../images/netflix.jpg'
import stockNews from '../images/pexels-stock.jpg'
import weatherDashboard from '../images/weather-dashboard.jpg'
import dayPlanner from '../images/dayplanner.jpg'
import movieReviewSite from '../images/movie-review-site.jpg'
import {Link} from "react-router-dom";

const stockDesc = 'This is my first team project, the purpose of this app was to allow users to have a place where they can save and track their favorite stocks. This app also uses and free open-source API\'s to get a stock price information, as well as related news base on the user-selected stock. All this information would be displayed on a dashboard and saved to local storage, meaning as long as the user does not clear their cookies and temp files they should be able to save their favorite stocks come back and view them again at any time.' ;

const subDesc = 'My favorite team project, Sub-track is a subscription tracking service. Users will be able to log into this webpage and create a custom tracking service of their current subscription services. This website also contains a huge list of popular subscription services as well as their current price, which allows users to add, remove, and modify the list to their personal preferences. ';

const movieDesc = 'An app that makes it easier for users to find new movies and tv shows. This app will allow users to be able to review, search, and save movies to their profile. The point of this app was to give a social aspect to sharing movies and tv shows with others while finding new ones to enjoy. We tried to make a blend of rotten tomatoes and Facebook.';

const weatherDesc = 'A very very simple weather dashboard application. The only purpose of this app was to get myself familiar with pulling information from an API and displaying it on a webpage. Other than that this app also allowed me to flex my front-end developer experience to make certain items on this webpage to display base on the color.';


function Projects(props) {
  return (
      <div className={'container p-5'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <h3 className={'project-title col-12'}> Projects</h3>
            <div>
              <div className={'row'}>

                <Thumbnail
                    href='/MovieReviewSite'
                    image={netflix}
                    title='Subscription Tracker'
                    desc={subDesc}
                />
                <Thumbnail
                    href='https://mannylouhub.github.io/Stock-News-App/'
                    image={stockNews}
                    title='Stock-New-App'
                    desc={stockDesc}
                />
              </div>
              <div className={'row'}>
                <Thumbnail
                    href='https://mannylouhub.github.io/Weather-Dashboard/'
                    image={weatherDashboard}
                    title='Weather Dashboard'
                    desc={weatherDesc}
                />
                <Thumbnail
                    href='https://boiling-beyond-54963.herokuapp.com/'
                    image={movieReviewSite}
                    title='Movie Review Site'
                    desc={movieDesc}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}


export default Projects;