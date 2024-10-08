import React from "react";
import ExperienceCard from "./Components/ExperienceCard";
import EductionCard from "./Components/EductionCard";
import { saveAs } from "file-saver";
import { useTheme } from "./Theme/ThemeContext";
import { FaReact, FaHtml5, FaJava, FaCss3, FaSass, FaFigma, FaGithub, } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiStrapi, SiWeb3Dotjs } from "react-icons/si";
import { MdOutlineImportantDevices, MdLineStyle } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { TbBrandBitbucket, TbBrandTypescript } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";


const Resume = () => {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-light' : 'bg-dark'
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
        
        {/* <!-- Page Content--> */}
        <div className="container px-3">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Resume</span>
            </h1>
          </div>
          <div className="row gx-12 justify-content-center">
            <div className="col-lg-12 col-xl-12 col-xxl-12">
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                  <button
                    className="btn btn-primary px-4 py-2"
                    onClick={downloadPDF}
                  >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Resume
                  </button>
                </div>
                {/* <!-- Experience Card 1--> */}
                <ExperienceCard
                  startDate="Oct 22"
                  endDate="Continue"
                  position="Front End/React Developer"
                  company="Ideofuzion Pvt Ltd"
                  location="Bahria Phase 4 Rawalpindi"
                  desc={(
                    <ul>
                      <li>Reviewing application requirements and interface designs.</li>
                      <li>Implementing a single-page application utilizing React.js and Redux.</li>
                      <li>Debugging application code and troubleshooting interface software.</li>
                      <li>Tracking and enhancing front-end efficiency.</li>
                      <li>Performing testing and fixing issues discovered during testing before deploying code to production.</li>
                    </ul>
                  )}
                />

                {/* <!-- Experience Card 2--> */}
                <ExperienceCard
                  startDate="July 20"
                  endDate="Sep 20"
                  position="Front End Developer"
                  company="Techozon Software"
                  location="Gulberg Green Islamabad"
                  desc={(
                    <ul>
                      <li>Designing and developing front-end interfaces using HTML, CSS, JavaScript, and React.js.</li>
                      <li>Collaborating with developers, designers, and project managers.</li>
                      <li>Developing and implementing front-end architecture to support user interface concepts.</li>
                      <li>Identifying web-based user interactions and improving the user experience.</li>
                      <li>Working in a team to understand project requirements and follow best practices in front-end development.</li>
                    </ul>
                  )}
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
                <div className="card shadow border-0 rounded-4 mb-5  bg-gradient">
                  <div className="card-body res-p pb-0">
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
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaReact /> <span className='px-2'>React Js </span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <TbBrandNextjs /> <span className='px-2'>Next Js </span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <SiRedux /> <span className='px-2'>Redux </span>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaHtml5/> <span className='px-2'>Html5</span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaJava /> <span className='px-2'>Javascript</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <TbBrandTypescript />  <span className='px-2'>Typescript</span>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaCss3/> <span className='px-2'>Css3</span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <BsBootstrap /> <span className='px-2'>Bootstrap</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100  text-bg-light ${bgColor}`}>
                            <SiTailwindcss/> <span className='px-2'>Tailwind css</span>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaSass/> <span className='px-2'>Sass</span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <MdLineStyle />  <span className='px-2'>Styled components</span>
                          </div>
                        </div>
                        <div className="col mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <MdOutlineImportantDevices /> <span className='px-2'>Responsive Design</span>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaFigma/> <span className='px-2'>Figma</span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <SiStrapi/> <span className='px-2'>Strapi(cms)</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <AiOutlineApi /> <span className='px-2'>Api integration</span>
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <FaGithub /> <span className='px-2'>Github</span>
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <TbBrandBitbucket /> <span className='px-2'>BitBucket</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={`d-flex align-items-center rounded-4 p-3 h-100 text-bg-light ${bgColor}`}>
                            <SiWeb3Dotjs/> <span className='px-2'>Web3</span>
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
     
    </div>
  );
};

export default Resume;
