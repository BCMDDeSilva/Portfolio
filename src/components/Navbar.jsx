import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Malith's Portfolio
      </Link>
      <div className="nav-links">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/about" className={isActive('/about')}>About</Link>
        <Link to="/skills" className={isActive('/skills')}>Skills</Link>
        <Link to="/projects" className={isActive('/projects')}>Projects</Link>
        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
