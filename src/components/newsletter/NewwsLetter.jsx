import React from "react";
import "../newsletter/NewwsLetter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

function NewwsLetter() {
  return (
    <div className='newsletter'>
      <div className='container-nl'>
        <div className='mail-info'>
          <span className='mail'>
            <FontAwesomeIcon icon={faMailBulk} />
          </span>
          <div className='mail-inv'>
            <h1>Sign Up for Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className='input-container'>
          <input placeholder='Enter Your Email Here' type='text' />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default NewwsLetter;
