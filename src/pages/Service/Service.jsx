// src/pages/Home.js
import React from "react";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

import PageTitle from "../../components/Blog/Title/Title";

import Footer from "../../components/Footer/Footer";
import ServicePageSection from "../../components/Service/Service-section/ServiceSection";
const Service = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle title={'Our Solutions'} text={'Our Solutions'} />
    <ServicePageSection />
      

      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Service;
