import React from 'react'
import { useTheme } from '../Theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  return (
      <footer className={` mt-auto py-4 ${theme === 'dark' ? 'bg-light' : 'bg-dark'}` } style={{ boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'}}>
            <div className="container px-3">
                <div className=" d-flex align-items-center justify-content-center text-bg-light">
                  Thank You !! For visting my portfolio.
                </div>
            </div>
        </footer>
  )
}

export default Footer
