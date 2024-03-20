import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiWeatherSunny } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";

import { ThemeContext, themes, useTheme } from '../Theme/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to manage navbar collapse
  const { theme } = useTheme();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <main className="flex-shrink-0 navbarStyle">
      <nav className={`navbar navbar-expand-lg navbar-light py-3 ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}>
        <div className="container px-3">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}> {/* Close navbar on brand click */}
            <span className="fw-bolder text-primary">PortFolio</span>
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}> {/* Toggle navbar on button click */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`flex justify-content-between collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}> {/* Use show class to toggle navbar collapse */}
            <ul className="navbar-nav mb-2 mb-lg-0 small fw-bolder" onClick={closeNavbar}> {/* Close navbar on link click */}
              <li className="nav-item"><Link className={`nav-link text-bg-light `} to="/">Home</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `} to="/resume">Resume</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `} to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `} to="/contact">Contact</Link></li>
            </ul>
            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <button
                  className='togglebtn px-0'
                  style={{ color: theme === 'dark' ? '#6c757d' : 'white' }}
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                >
                  {theme === 'light' ? <TiWeatherSunny /> : <MdDarkMode />} <span className='px-1'>{theme === 'light' ? 'Light' : 'Dark'}</span>
                </button>
              )}
            </ThemeContext.Consumer>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Header;
