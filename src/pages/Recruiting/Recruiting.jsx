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
  FaArrowsDownToPeople,
} from "react-icons/fa6";
import { FaFighterJet, FaServer } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import PageTitle from "../../components/Blog/Title/Title";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { GiLaptop } from "react-icons/gi";
import { SiGoogledataproc } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { RiDatabaseLine } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";

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
      <div className="container mt-17 develop">
        <div className="">
          <h1 className="industrytitle mt-5" style={{ fontWeight: "bolder" }}>
            Positions we are
            <br />
            Recruiting for
          </h1>
          <img
            src="/assets/images/web images/industrydot.JPG"
            alt="decorative dots"
            style={{ marginTop: "10px", maxWidth: "100%" }}
          />
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-4  row d-flex align-items-center">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaFingerprint
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/cybersecurity">
                <h2>Cybersecurity</h2>
              </Link>
            </div>
          </div>
          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaFighterJet
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/aerospace">
                <h2>Aerospace</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <RiDatabaseLine
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/systems_engineering_&_administration">
                <h2>Systems Engineering & Administration</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaNetworkWired
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/network_design_&_architecture">
                <h2>Network Design & Architecture</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaArrowsDownToPeople
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/program_&_project_management">
                <h2>Program & Project Management</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <SiGoogledataproc
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/information_systems_security_Officer/Engineer">
                <h2>Information Systems Security Officer/Engineer</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <GiLaptop
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/software_engineer">
                <h2>Software Engineer</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaConnectdevelop
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/sharePoint_developer">
                <h2>SharePoint Developer</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaDev
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/peopleSoft_developer">
                <h2>PeopleSoft Developer</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <BsDatabaseFillGear
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/database_administrator">
                <h2>Database Administrator</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FiDatabase
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/bigData_architect">
                <h2>BigData Architect</h2>
              </Link>
            </div>
          </div>

          <div className="col-md-4 row d-flex align-items-center mb-3">
            <div className="col-3 box d-flex justify-content-center py-2">
              <FaSitemap
                size={60}
                style={{
                  color: "black",
                  padding: "10px",
                  border: "1px solid",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-9">
              <Link to="/recruiting/IT_specialist">
                <h2>IT Specialist</h2>
              </Link>
            </div>
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
