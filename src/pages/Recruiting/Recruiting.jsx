// import React from "react";
// import Header from "../../components/Header/Header";
// import PageTitle from "../../components/Blog/Title/Title";
// import AgencySection from "../../components/Agency/Agency";
// import Footer from "../../components/Footer/Footer";
// import FAQSection from "../../components/FAQ/FAQSection";
// import MobileMenu from "../../components/MobileMenu/MobileMenu";
// import JobsTable from "../../components/Jobs/JobsTable";
// import PositionsSection from "../../components/Recruiting/PositionsSection";
// import { FaFingerprint } from "react-icons/fa";
// import AboutStyleThree from "../../components/About/About-three-style/AboutThreeStyle";
// import ClientsSection from "../../components/Client/Client";
// const Recruiting = () => {
//   return (
//     <div className="page-wrapper">
//       {/* <div class="preloader"></div> */}
//       <Header />
//       <MobileMenu />
//       <PageTitle
//         title={"Recruiting"}
//         desc={
//           "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy."
//         }
//       />

//       <PositionsSection />
//       <ClientsSection />
//       <AboutStyleThree />

//       <AgencySection />
//       <Footer />

//       <button class="scroll-top scroll-to-target" data-target="html">
//         <span class="fa fa-arrow-up"></span>
//       </button>
//     </div>
//   );
// };

// export default Recruiting;
import { Link } from "react-router-dom";
import Agencies from "../Service/Agencies";
import { Commerical } from "./Commercial";
import { IndustryAbout } from "./IndusrtyAbout";
import {
  FaFingerprint,
  FaNetworkWired,
  FaConnectdevelop,
  FaDev,
  FaSitemap,
} from "react-icons/fa6";
import { FaFighterJet, FaServer } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import PageTitle from "../../components/Blog/Title/Title";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

export const Recruiting = () => {
  
  return (
    <>
      <Header />
      <MobileMenu />
      <PageTitle
        title={"Industries"}
        text={
          "Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy."
        }
        image="linear-gradient(to right, rgb(242 209 255), rgb(242 188 249), rgb(245 229 255))"
      />
      {/* <div className="Breadrum" style={{backgroundImage:'url(images/industry.jpeg)',backgroundSize:"100% 100%",height:"90vh"}}>
         <div className='content' style={{zIndex:'1200'}}>
                    <h1 className='animate__animated animate__fadeInUp servicebreadrumtitle1'>Industries</h1>
                    <p style={{fontWeight:"400",fontSize:"14px"}}>Our experience with different realms of industries has gained us a unique expertise that makes our clients trust us and our process without hesitancy.</p>
                </div>
       <div className="Breadrum-overlay" style={{height:"90vh"}}></div>
      </div> */}
      <div className="container mt-5 develop">
        <div className="text-center">
          {" "}
          <h1 className="industrytitle py-5">
            Positions we are
            <br />
            Recruiting for
          </h1>
          <img src="images/industrydot.JPG" />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-4">
            <Link to="/recruiting/cybersecurity">
              <FaFingerprint />
              <div className="box"></div>
              <h4>Cybersecurity</h4>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/recruiting/aerospace">
              <div className="box">
                <FaFighterJet />
              </div>
              <h4>Aerospace</h4>
            </Link>
          </div>
          <div className="col-md-4 abcd">
            <Link to="/recruiting/systems_engineering_&_administration">
              <div className="box">
                <img
                  src="images/system.JPG"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h4>Systems Engineering & Administration</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/network_design_&_architecture">
              <div className="box">
                <FaNetworkWired />
              </div>
              <h4>Network Design & Architecture</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/program_&_project_management">
              <div className="box">
                <img
                  src="images/use.JPG"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h4>Program & Project Management</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/information_systems_security_Officer/Engineer">
              <div className="box">
                <img
                  src="images/cloud.JPG"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h4>Information Systems Security Officer/Engineer</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/software_engineer">
              <div className="box">
                <img
                  src="images/software.JPG"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h4>Software Engineer</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/sharePoint_developer">
              <div className="box">
                <FaConnectdevelop />
              </div>
              <h4>SharePoint Developer</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/peopleSoft_developer">
              <div className="box">
                <FaDev />
              </div>
              <h4>PeopleSoft Developer</h4>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/recruiting/database_administrator">
              <div className="box">
                <img
                  src="images/database.JPG"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h4>Database Administrator</h4>
            </Link>
          </div>{" "}
          <div className="col-md-4">
            <Link to="/recruiting/bigData_architect">
              <div className="box">
                <FiDatabase />
              </div>
              <h4>BigData Architect</h4>
            </Link>
          </div>{" "}
          <div className="col-md-4">
            <Link to="/recruiting/IT_specialist">
              <div className="box">
                <FaSitemap />
              </div>
              <h4>IT Specialist</h4>
            </Link>
          </div>
        </div>
      </div>

      <Commerical title="Government" />
      <IndustryAbout />
      <Agencies />

      <NewsLetter />
      <Footer />
    </>
  );
};
