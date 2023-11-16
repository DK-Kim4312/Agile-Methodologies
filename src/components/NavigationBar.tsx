import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to="/"  className="navigation-bar-button">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/agile-principles" className="navigation-bar-button">
            Principles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
