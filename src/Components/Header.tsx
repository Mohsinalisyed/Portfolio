import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div >
       <main className="flex-shrink-0 navbarStyle">
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container px-3">
            <Link className="navbar-brand" to="/">
              <span className="fw-bolder text-primary">PortFolio</span></Link>
            <button className="navbar-toggler" 
            type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </main>
    </div>
  )
}

export default Header
