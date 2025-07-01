import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import logo from '../assets/kasa.png';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo Kasa" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
