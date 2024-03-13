import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./Theme/ThemeContext";
const Home = () => {
  const { theme } = useTheme();

  return (
    <main className="flex-shrink-0">
        <header className="py-5">
          <div className="container px-3 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                {/* <!-- Header text content--> */}
                <div className="text-center text-xxl-start">
                  <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                    <div className="text-uppercase">
                      Design &middot; Development &middot; ForntEnd
                    </div>
                  </div>
                  <div className="fs-3 fw-light text-muted">
                    I can help your business to
                  </div>
                  <h1 className="display-3 fw-bolder mb-5">
                    <span className="text-gradient d-inline">
                      Get online and grow fast
                    </span>
                  </h1>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <Link
                      className="btn btn-primary btn-lg px-3 py-3 me-sm-3 fs-6 fw-bolder"
                      to="resume"
                    >
                      Resume
                    </Link>
                    <Link
                      className="btn btn-outline-dark btn-lg px-3 py-3 fs-6 fw-bolder text-bg-light"
                    to="projects"
                    style={{ borderColor:"#6610f2"}}
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 ">
                {/* <!-- Header profile picture--> */}
                <div className="d-flex justify-content-center justify-content-lg-end mt-5 mt-xxl-0">
                  <div className="profile bg-gradient-primary-to-secondary ">
                    <img
                      className="profile-img"
                      src="img/Profile.png"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <section className={`bg-light py-5 ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}>
          <div className="container px-3">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center my-5">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">About Me</span>
                  </h2>
                  <p className="lead fw-light mb-4">
                    My name is Mohsin Ali Syed and I help brands to grow.
                  </p>
                  <p className="text-muted">
                    Experienced Front End Developer proficient in HTML, CSS, JavaScript, Typescript, and React.js, with a track record of optimizing codebase for speed and scalability. Demonstrated expertise in front end tools and technologies, collaborating on diverse projects while adhering to industry standards.
                  </p>
                  <div className="d-flex justify-content-center fs-2 gap-4">
                    <a className="text-gradient" href="#!">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="text-gradient" href="https://www.linkedin.com/in/mohsin-ali-syed-10a16b215">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a className="text-gradient" href="https://bitbucket.org/mohsin__5775/workspace/repositories">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main> 
  );
};

export default Home;
