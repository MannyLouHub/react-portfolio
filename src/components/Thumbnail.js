import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './CSS/thumbnail.css'

function Thumbnail(props) {
  return (
      <div className="card project col-12 p-4 mb-4">
        <div className={'row'}>
          <div className="project-image col-md-12 col-lg-3">
            <Link to={props.href}>
              <img src={props.image} alt="Project Image" width={"100%"} height={"100%"}/>
            </Link>
          </div>
          <div className={'project-body col-md-12 col-lg-9'}>
            <Link to={props.href}>
              <div className="project-title">{props.title}</div>
            </Link>
            <div className={'project-description'}>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Thumbnail;