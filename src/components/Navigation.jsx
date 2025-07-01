import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'} end>
            Accueil
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav__link active' : 'nav__link'}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;