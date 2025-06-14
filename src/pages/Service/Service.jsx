// src/pages/Home.js
import React from "react";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

import PageTitle from "../../components/Blog/Title/Title";

import Footer from "../../components/Footer/Footer";
import ServicePageSection from "../../components/Service/Service-section/ServiceSection";
import SectionThree from "../../components/Home/section3/SectionThree";
import ServiceSectionOne from "../../components/Service/section1/ServiceSectionOne";
const Service = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle
        title={"Recruitment & Development"}
        text={
          "Since the exceptionally starting of our commerce, we’ve been interfacing our clients with difficult discoverability within the Data Innovation space. Our recruitment consulting firm ability ranges over a wide cluster of subdomains counting Recruitment & Development"
        }
      />

      <SectionThree serv />
      <ServiceSectionOne />
      <SectionThree serv />
      <ServiceSectionOne />
      <SectionThree serv />

      {/* <ServicePageSection /> */}

      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Service;
