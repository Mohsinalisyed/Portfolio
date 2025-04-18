import React, { useState } from "react";
import { Link } from "react-router-dom";

import HmrealtorsImg from "./assets/hmrealtors.png";
import pantagonWalletImg from "./assets/pentagon-wallet.png";
import pantagonWebsiteImg from "./assets/pentagon-website.png";
import QuickBuyImg from "./assets/quick-buy.png";
import gamesfiImg from "./assets/gamesfi.png";
import SynkedImg from "./assets/Synked.png";
import ScribePayImg from "./assets/scribepay.png";
import kwiktrustImg from "./assets/kwiktrust.png";

interface ProjectData {
  url: string;
  caption: string;
  name: string;
  category: "first" | "second" | "third"; // 'third' for Angular JS
  isLive: boolean;
}

const projects: ProjectData[] = [
  {
    url: gamesfiImg,
    caption: "https://www.gamesfi.live/",
    name: "Gamesfi",
    category: "first",
    isLive: true,
  },
  {
    url: ScribePayImg,
    caption: "https://scribepay.org/",
    name: "Scribe Pay",
    category: "first",
    isLive: true,
  },
  {
    url: pantagonWalletImg,
    caption: "https://pentaswap.io/#/swap",
    name: "Pentagon Wallet",
    category: "first",
    isLive: true,
  },
  {
    url: pantagonWebsiteImg,
    caption: "https://pen.bcsh.xyz/",
    name: "Pentagon Website",
    category: "second",
    isLive: true,
  },
  {
    url: SynkedImg,
    caption: "https://www.synked.gg/",
    name: "Synked",
    category: "first",
    isLive: true,
  },
  {
    url: kwiktrustImg,
    caption: "https://kwiktrust.com/",
    name: "KwikTrust",
    category: "third",
    isLive: true,
  },
  {
    url: QuickBuyImg,
    caption: "https://quickbuyhere.xyz/",
    name: "QuickBuy",
    category: "second",
    isLive: true,
  },
  {
    url: HmrealtorsImg,
    caption: "https://hmrealtors.online/",
    name: "Hm Realtors",
    category: "first",
    isLive: false,
  },
];

const Project: React.FC = () => {
  const [filter, setFilter] = useState<{
    key: "all" | "category" | "isLive";
    value: any;
  }>({
    key: "all",
    value: null,
  });

  const filteredProjects = projects.filter((project) => {
    if (filter.key === "all") return true;
    if (filter.key === "category") return project.category === filter.value;
    if (filter.key === "isLive") return project.isLive === filter.value;
    return true;
  });

  return (
    <div>
      {/* Projects Section */}
      <section className="pt-5">
        <div className="container px-3 mt-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div className="container-xxl py-6 pt-5" id="project">
            <div className="container">
              <div className="row g-5 mb-5 align-items-center">
                <div className="col-lg-12 text-lg-end">
                  <ul className="list-inline mx-n3 mb-0 d-flex justify-content-end small fw-bolder">
                    <li
                      className={`mx-3 cursor-pointer ${
                        filter.key === "all" ? "active" : ""
                      }`}
                      onClick={() => setFilter({ key: "all", value: null })}
                    >
                      All Projects
                    </li>
                    <li
                      className={`mx-3 cursor-pointer ${
                        filter.key === "category" && filter.value === "first"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setFilter({ key: "category", value: "first" })
                      }
                    >
                      React Js
                    </li>
                    <li
                      className={`mx-3 cursor-pointer ${
                        filter.key === "category" && filter.value === "second"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setFilter({ key: "category", value: "second" })
                      }
                    >
                      Next Js
                    </li>
                    <li
                      className={`mx-3 cursor-pointer ${
                        filter.key === "category" && filter.value === "third"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setFilter({ key: "category", value: "third" })
                      }
                    >
                      Angular Js
                    </li>
                    {/* <li
                      className={`mx-3 cursor-pointer ${
                        filter.key === "isLive" && filter.value === true
                          ? "active"
                          : ""
                      }`}
                      onClick={() => setFilter({ key: "isLive", value: true })}
                    >
                      Live Projects
                    </li> */}
                  </ul>
                </div>
              </div>

              {/* Project Cards */}
              <div className="row g-4 portfolio-container">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`col-lg-4 col-md-6 portfolio-item mb-4 ${project.category}`}
                  >
                    <div className="portfolio-img rounded overflow-hidden">
                      <img
                        className="img-fluid"
                        src={project.url}
                        alt={project.name}
                      />
                      <div className="portfolio-btn">
                        <a
                          className="btn btn-lg-square btn-outline-primary border-2 mx-1"
                          href={project.caption}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div>
                            <i className="bi bi-link" style={{paddingRight:"8px"}}></i>
                          Website Link
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-secondary fw-bolder mb-2">
                      {project.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-3 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <Link
              className="btn btn-outline-light btn-lg px-3 py-3 fs-6 fw-bolder"
              to="/contact"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
