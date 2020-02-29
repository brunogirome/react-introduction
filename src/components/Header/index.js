import React from 'react';

import './style.css';

import logo from '../../../assets/logo.png';

function Header() {
  return (
    <nav>
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <a href="#">My profile</a>
      </div>
    </nav>
  );
}

export default Header;
