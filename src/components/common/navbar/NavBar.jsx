import React from "react";
import "../navbar/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-container'>
        <div className='dp'>
          All Categories{" "}
          <span className='ico-n'>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <ul className='nav-links'>
          <li className='nav-ink'>Books</li>
          <li className='nav-ink'>Electronics</li>
          <li className='nav-ink'>Real Estate</li>
          <li className='nav-ink'>Cars-bikes</li>
          <li className='nav-ink'> Dorm-furniture</li>
          <li className='nav-ink'>Men</li>
          <li className='nav-ink'>Women</li>
          <li className='nav-ink'>Music</li>
          <li className='nav-ink'>Hobbies Game</li>
          <li className='nav-ink'>Toys</li>
          <li className='nav-ink'>Kids</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
