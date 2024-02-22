import React from 'react'
import ProjectCard from './Components/ProjectCard'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div>
            
            {/* <!-- Projects Section--> */}
            <section className="pt-5">
                <div className="container px-3 mt-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-12 col-xl-12 col-xxl-12">
                            {/* <!-- Project Card 1--> */}
                            <ProjectCard projectName='E-Commerce' status='inprocess'
                                desc='Implementing an e-commerce platform with secure cryptocurrency payment integration for seamless transactions.' />
                            {/* <!-- Project Card 2--> */}
                            <ProjectCard projectName='Gamesfi' link='https://www.gamesfi.live/'
                                desc='Gamesfi is the build for play to earn games. Play for fun and earn for real. 
                                Cash out easily to your Binance P2P or Coinbase instantly without fee.
                                 It is intended solely for entertainment 
                                purposes.Easy and
                                 fun, yet challenging unique levels!
' />
                            {/* <!-- Project Card 3--> */}
                            <ProjectCard projectName='KwikTrust' link='https://kwiktrust.com/'
                                desc='Experience the freedom of unlimited digital signatures with KwikSign.
                                      Seamlessly send or sign any file format, any time, without restrictions.
                                      Perfect for businesses of all sizes, ensuring you have a solution that
                                      fits your requirements exactly when you need it.'/>
                            {/* <!-- Project Card 4--> */}
                            <ProjectCard projectName='Pixel Paddle' link='https://www.pixelpaddle.com/'
                                desc='Discover all the different areas within the PixelPaddle sports metaverse
                                 and enjoy the activities and experiences with your friends and fellow fans.
                                      Digital collectibles refer to unique, non-fungible digital assets that can be bought,
                                 sold, and traded on various online platforms using blockchain technology. ' />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Call to action section--> */}
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-3 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <Link className="btn btn-outline-light btn-lg px-3 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default Project
