import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component

function Thumbnail(props) {
  return (
      <div className="project col-lg-6">
        <a href={props.href} target={"_blank"} rel={'noreferrer noopener'}>
          <div className="project-title">{props.title}</div>
          <div className="project-image">
            <img src={props.image} alt="Project Image" width={"300"} height={"300"}/>
          </div>
        </a>
      </div>

  );
}

export default Thumbnail;