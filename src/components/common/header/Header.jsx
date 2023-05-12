import React from "react";
import "../header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBasketShopping,
  faCircleUser,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='header'>
      <div className='container-header'>
        <div className='logo'>LOGO</div>
        <div className='search'>
          <div className='classified'>
            Classifieds
            <span className='ico-h'>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          <div className='search-here'>
            Search here...
            <span className='ico-h'>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
        <div className='profile-area'>
          <span className='ico-h'>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className='ico-h'>
            <FontAwesomeIcon icon={faBasketShopping} />
          </span>
          <span className='ico-h'>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <button className='header-btn'>Classifieds</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
