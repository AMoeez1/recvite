// src/pages/Home.js
import React from "react";

import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

import PageTitle from "../../components/Blog/Title/Title";

import Footer from "../../components/Footer/Footer";
import AboutStyleThree from "../../components/About/About-three-style/AboutThreeStyle";
import ClientsSection from "../../components/Client/Client";
import TestimonialSection from "../../components/Testimonial/Testimonial";
import AgencySection from "../../components/Agency/Agency";
import FunfactSection from "../../components/FunFact/Funfact";
import TeamSection from "../../components/Team/TeamSection";
import Cta from "../../components/CtaStyletwo/Cta";
const About = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle title={"About Us"} text={"About"} />
      <AboutStyleThree />
      <ClientsSection />
      <TestimonialSection />
      <AgencySection />
      <FunfactSection />
      <TeamSection />
      <Cta />

      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default About;
