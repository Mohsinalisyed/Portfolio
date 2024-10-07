import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toteImg from './assets/tote.png'
import buyShoeImg from './assets/buy-shoe.png'
import pantagonWalletImg from './assets/pentagon-wallet.png'
import pantagonWebsiteImg from './assets/pentagon-website.png'
import quickBuyImg from './assets/quick-buy.png'
import realEstateImg from './assets/real-estate.png'
import tidalImg from './assets/tidal.png'
import shetyleImg from './assets/shetyle.png'
import gamesfiImg from './assets/gamesfi.png'

const projects = [
    {
        url: toteImg,
        caption: 'https://thetote.io/',
        name: 'TOTE',
        category: 'first'
    },
    {
        url: gamesfiImg,
        caption: 'https://www.gamesfi.live/',
        name: 'Gamesfi',
        category: 'first'
    },
    {
        url: pantagonWalletImg,
        caption: 'https://pentagon-uniswap.netlify.app/',
        name: 'Pentagon Wallet',
        category: 'first'
    },
    {
        url: pantagonWebsiteImg,
        caption: 'http://bcsh.xyz/',
        name: 'Pentagon Website',
        category: 'second'
    },
    {
        url: quickBuyImg,
        caption: 'https://e-buy-online.netlify.app/',
        name: 'Quick Buy',
        category: 'second'
    },
    {
        url: realEstateImg,
        caption: 'http://hmrealtors.online/',
        name: 'Real Estate Portfolio',
        category: 'first'
    },
    {
        url: tidalImg,
        caption: 'https://mohsinalisyed-portfolio.netlify.app/',
        name: 'Tidal',
        category: 'first'
    },
    {
        url: buyShoeImg,
        caption: 'https://mohsinalisyed-portfolio.netlify.app/',
        name: 'Buy Shoe',
        category: 'first'
    },
    {
        url: shetyleImg,
        caption: 'https://shetyle.com/',
        name: 'Shetyle',
        category: 'first'
    },
];
const Project = () => {
    const [filter, setFilter] = useState('*');

    const filteredProjects = filter === '*'
        ? projects
        : projects.filter(project => project.category === filter.slice(1));

    return (
        <div>    
            {/* <!-- Projects Section--> */}
            <section className="pt-5">
                <div className="container px-3 mt-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="container-xxl py-6 pt-5" id="project">
                        <div className="container">
                            <div className="row g-5 mb-5 align-items-center">
                                <div className="col-lg-12 text-lg-end">
                                    <ul className="list-inline mx-n3 mb-0 d-flex justify-content-end small fw-bolder" id="portfolio-flters">
                                        <li className={`mx-3 ${filter === '*' ? 'active' : ''}`} data-filter="*" onClick={() => setFilter('*')}>All Projects</li>
                                        <li className={`mx-3 ${filter === '.first' ? 'active' : ''}`} data-filter=".first" onClick={() => setFilter('.first')}>React Js</li>
                                        <li className={`mx-3 ${filter === '.second' ? 'active' : ''}`} data-filter=".second" onClick={() => setFilter('.second')}>Next Js</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row g-4 portfolio-container">
                                {filteredProjects.map((project, index) => (
                                    <div key={index} className={`col-lg-4 col-md-6 portfolio-item mb-4 ${project.category}`}>
                                        <div className="portfolio-img rounded overflow-hidden">
                                            <img className="img-fluid" src={project.url} alt={project.name} />
                                            <div className="portfolio-btn">
                                                <a className="btn btn-lg-square btn-outline-primary border-2 mx-1" href={project.url} data-lightbox="portfolio">
                                                    <i className="bi bi-eye"></i>
                                                </a>
                                                <a className="btn btn-lg-square btn-outline-primary border-2 mx-1" href={project.caption} target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-link"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-secondary fw-bolder mb-2">{project.name}</div>
                                    </div>
                                ))}
                            </div>
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
