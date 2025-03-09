import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./Theme/ThemeContext";
const Home = () => {
  const { theme } = useTheme();

  return (
    <main className="flex-shrink-0">
        <header className="py-5">
          <div className="container px-3">
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
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3 ">
                    <Link
                    className="btn btn-primary btn-lg px-3 py-3 me-sm-3 fs-6 fw-bolder homeBtn"
                    to="resume"
                    >
                      Resume
                    </Link>
                    <Link
                    className="btn btn-outline-dark btn-lg px-3 py-3 fs-6 fw-bolder text-bg-light homeBtn"
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
      <section className={` py-5 ${theme === 'dark' ? 'bg-light' : 'bg-gradient'}`}>
        <div className="container px-3">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center">
                  <h2 className="display-5 fw-bolder">
                    <span className="text-gradient d-inline">About Me</span>
                  </h2>
                  <p className="lead fw-light mb-3">
                    My name is Mohsin Ali Syed and I help brands to grow.
                  </p>
                  <p className="text-muted">
                  3+ year's experienced front-end developer specialized in React.js and Next.js with a robust portfolio of projects
                  evidencing expertise in UI design and development. Skilled in integrating APIs, utilizing state management tools
                  like Redux, and with a solid foundation in responsive design principles. Passionate about creating intuitive and
                  dynamic user experiences, evidenced by successful project outcomes and constant learning.                  </p>
                  <div className="d-flex justify-content-center fs-2 gap-4">
                  <Link to="#!" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/in/mohsin-ali-syed-10a16b215" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                  </Link>
                  <Link to="https://bitbucket.org/mohsin__5775/workspace/repositories" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                  </Link>
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
