// src/pages/Home.js
import React from "react";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import BannerSection from "../../components/Banner/Banner";
import FeatureSection from "../../components/Feature/Feature";
import Quote from "../../components/Quote/Quote";
import AboutSection from "../../components/About/About";
import ServiceSection from "../../components/Service/Service";
import AgencySection from "../../components/Agency/Agency";
import FunfactSection from "../../components/FunFact/Funfact";
import ProjectSection from "../../components/Project/Project";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import Cta from "../../components/CtaStyletwo/Cta";
import ProgressSection from "../../components/Progress/Progress";
import TestimonialSection from "../../components/Testimonial/Testimonial";
import ClientsSection from "../../components/Client/Client";
import NewsSection from "../../components/News/News";
import Footer from "../../components/Footer/Footer";
import SectionOne from "../../components/Home/SectionOne";
import SectionTwo from "../../components/Home/section2/SectionTwo";
import SectionThree from "../../components/Home/section3/SectionThree"
import NewsLetter from "../../components/NewsLetter/NewsLetter";
const Home = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      {/* <MobileMenu /> */}
      <BannerSection />

      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>


      {/* <FeatureSection />
      <Quote />
      <AboutSection />


      <ServiceSection /> */}
      <AgencySection />
      <FunfactSection />
      <ProjectSection />
      <WorkingProcess />
      <Cta />
      <ProgressSection />
      <TestimonialSection />
      <ClientsSection />
      <NewsSection />
      <NewsLetter/>
      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Home;
