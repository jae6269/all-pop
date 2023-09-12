import React from 'react';
import '../css/header.css';

function Header() {
  return (
    <div className="wrapper__head">
      <div className="head__logo">
        <h1>ALPOP</h1>
      </div>
      <div className="head__menu">
        <a href="./joby_home.html">
          <span id="menu__home">Home</span>
        </a>
        <a href="./joby_story.html">
          <span id="menu__story">Map</span>
        </a>

        <a href="./joby_newsroom.html">
          <span id="menu__newsroom">Login</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
