import React from 'react';
import { Link } from 'react-router-dom';
import voice from '../images/voice.png';
import settings from '../images/settings.png';
import arrow from '../images/back-arrow.png';

function NavLink() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={arrow} alt="Back Arrow" />
      </Link>
      <div>
        <img src={voice} alt="Voice recorder" />
        <img src={settings} alt="Settings" />
      </div>
    </nav>
  );
}

export default NavLink;
