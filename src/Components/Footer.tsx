import React from 'react'
import { useTheme } from '../Theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={` mt-auto py-4 ${theme === 'dark' ? 'bg-light shadow-custom-light' : 'bg-dark shadow-custom-dark'}`}>
            <div className="container px-3">
                <div className=" d-flex align-items-center justify-content-center text-bg-light">
                  Thank You !! For visting my portfolio.
                </div>
            </div>
        </footer>
  )
}

export default Footer
