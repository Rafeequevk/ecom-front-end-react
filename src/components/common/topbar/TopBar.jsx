import React from "react";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <div>
      <div className='topbar'>
        <div className='container-tp'>
          <div className='left'>
            <span className='ico'>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className='cont'> +221 33 66 22 </span>

            <span className='ico'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className='cont'> support@elextra.io </span>
          </div>
          <div className='right'>
            <span className='ico'>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className='cont'> Locations | $ Dollar (US) </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
