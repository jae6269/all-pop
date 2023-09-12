import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="wrapper__head">
      <div className="head__logo">
        <h1>ALPOP</h1>
      </div>
      <div className="head__menu">
        <Link to="/">Home</Link>

        <Link to="/map">Map</Link>

        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
