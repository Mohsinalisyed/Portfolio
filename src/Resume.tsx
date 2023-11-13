import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ExperienceCard from "./Components/ExperienceCard";
import EductionCard from "./Components/EductionCard";
import { saveAs } from "file-saver";
const Resume = () => {
  const downloadPDF = () => {
    const fileUrl = "img/CV.pdf"; // Replace with the local path to your PDF file
    const fileName = "CV.pdf"; // Replace with the desired filename for the downloaded PDF

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };
  return (
    <div>
      <main className="flex-shrink-0">
        <Header />
        {/* <!-- Page Content--> */}
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Resume</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* <!-- Experience Section--> */}
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                  {/* <!-- Download resume button--> */}
                  {/* <!-- Note: Set the link href target to a PDF file within your project--> */}
                  <button
                    className="btn btn-primary px-4 py-3"
                    onClick={downloadPDF}
                  >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download Resume
                  </button>
                </div>
                {/* <!-- Experience Card 1--> */}
                <ExperienceCard
                  startDate="Oct 22"
                  endDate="Continue"
                  position="Jr React Developer"
                  company="Ideofuzion Pvt Ltd"
                  location="Bahria Phase 4 Rawalpindi"
                  desc="Reviewing application requirements and interface designs,
                        implementing a single-page application utilizing React js and
                        Redux, and meeting with the development team to discuss
                        user interface concepts all contributed to better user
                        experience and overall performance. Debugging application
                        code and troubleshooting interface software. tracking and
                        enhancing front-end efficiency.Before deploying produced
                        code to production settings,performed testing , fix issues
                        discovered during testing .
                        "
                />

                {/* <!-- Experience Card 2--> */}
                <ExperienceCard
                  startDate="July 20"
                  endDate="Sep 20"
                  position="InternShip"
                  company="Techozon Software"
                  location="Gulberg Green Islamabad"
                  desc="Designing and developing front-end interfaces using HTML, CSS,
                        JavaScript and React js. It often provide the chance to work
                        alongside experienced developers, designers, and project
                        managers. Developing and implementing front-end architecture
                        to support user interface concepts. Identifying web-based user
                        interactions. Collaborating with the team will help me
                        understand the project requirements, receive guidance, and
                        learn best practices in front-end development.
                        "
                />
              </section>
              {/* <!-- Education Section--> */}
              <section>
                <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                {/* <!-- Education Card 1--> */}
                <EductionCard startDate="2018" endDate="2022 " degree="Bacholer's CS" location1="University Of Lahore" location2=" Islamabad Campus" grade="Grade A" />
                {/* <!-- Education Card 2--> */}
                <EductionCard startDate="2016" endDate="2018" degree="Intermediate" location1="Punjab College" location2=" Rawalpindi" grade="Grade B" />
                {/* <!-- Education Card 3--> */}
                <EductionCard startDate="2014" endDate="2016" degree="Matricpulation" location1="IMCB Humak" location2="Islamabad" grade="Grade B" />
              </section>
              {/* <!-- Divider--> */}
              <div className="pb-5"></div>
              {/* <!-- Skills Section--> */}
              <section>
                {/* <!-- Skillset Card--> */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    {/* <!-- Professional skills list--> */}
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-tools"></i>
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">
                            Professional Skills
                          </span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            React Js
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Angular Js
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Next Js
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                       Web Development
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                           Figma
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Api Integration
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Redux
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            GitHub
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            BitBucket
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            HTML5
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            CSS3
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            JavaScript
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            TypeScript
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Sass
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Styled Component
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
};

export default Resume;
