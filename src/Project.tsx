import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProjectCard from './Components/ProjectCard'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div>
            <Header />
            {/* <!-- Projects Section--> */}
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* <!-- Project Card 1--> */}
                            <ProjectCard projectName='Tote' link='https://friendly-dragon-bfd3f3.netlify.app/' />
                            {/* <!-- Project Card 2--> */}
                            <ProjectCard projectName='Gamesfi' link='https://www.gamesfi.live/'  />
                            {/* <!-- Project Card 3--> */}
                            <ProjectCard projectName='KwikTrust' link='https://kwiktrust.com/' />
                            {/* <!-- Project Card 4--> */}
                            <ProjectCard projectName='Pixel Paddle' link='https://www.pixelpaddle.com/' />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Call to action section--> */}
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Project
