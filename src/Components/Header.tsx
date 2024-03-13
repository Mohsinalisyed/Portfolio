import React from 'react'
import { Link } from 'react-router-dom'
import { TiWeatherSunny } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";

import { ThemeContext, themes, useTheme } from '../Theme/ThemeContext';
const Header = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const { theme } = useTheme();
  return (
       <main className="flex-shrink-0 navbarStyle">
      <nav className={`navbar navbar-expand-lg navbar-light py-3 ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}>
          <div className="container px-3">
            <Link className="navbar-brand" to="/">
              <span className="fw-bolder text-primary">PortFolio</span></Link>
            <button className="navbar-toggler" 
            type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse flex justify-content-between aligns-items-center" id="navbarSupportedContent">
               <ul className="navbar-nav mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item"><Link className={`nav-link text-bg-light `}to="/">Home</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `}to="/resume">Resume</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `}to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className={`nav-link text-bg-light `}to="/contact">Contact</Link></li>
              </ul>
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                <button
                  className='togglebtn text-bg-light px-0'
                    onClick={() => {
                      setDarkMode(!darkMode);
                      changeTheme(darkMode ? themes.light : themes.dark);
                    }}
                  >
                  {theme === 'light' ? <TiWeatherSunny /> : <MdDarkMode />}<span className='px-1'> {theme === 'light' ? 'Light' : 'Dark' }</span>
                  </button>
                )}
              </ThemeContext.Consumer>
                    </div>
                </div>
            </nav>
       </main>
   
  )
}

export default Header
