import React from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/Blog/Title/Title";
import AgencySection from "../../components/Agency/Agency";
import Footer from "../../components/Footer/Footer";
import FAQSection from "../../components/FAQ/FAQSection";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import JobsTable from "../../components/Jobs/JobsTable";
import PositionsSection from "../../components/Recruiting/PositionsSection";
import { FaFingerprint } from "react-icons/fa";
import AboutStyleThree from "../../components/About/About-three-style/AboutThreeStyle";
import ClientsSection from "../../components/Client/Client";
import { useLocation } from "react-router-dom";
import './PositionDetail.css'
const PositionDetail = () => {

    const location = useLocation();
    const { title, detail } = location.state || { title: "No Title", detail: "No detail" };


  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle
        title={title}
    
       
      />

      <p className="position-detail">
        {detail}
      </p>

      {/* <PositionsSection /> */}
      {/* <ClientsSection /> */}
      <AboutStyleThree />

      <AgencySection />
      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default PositionDetail;
