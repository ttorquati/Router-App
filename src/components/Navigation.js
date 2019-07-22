import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
        <li><NavLink to="/Error404BrokenLink">Broken Link</NavLink></li>        
      </ul>
    </div>
  );
};

export default Navigation;