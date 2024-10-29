// src/pages/Home.js
import React from "react";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import PageTitle from "../../components/Blog/Title/Title";
import Footer from "../../components/Footer/Footer";
import ContactInfoSection from "../../components/Contact/Contact-into/ContactInfo";
import ContactSection from "../../components/Contact/Contact-section/ContactSection";
import GoogleMap from "../../components/Contact/Goggle-map/GoogleMap";


const Contact = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle title={"Contact Us"} text={"Contact"} />
      <ContactInfoSection />
      <ContactSection />
      <GoogleMap />
      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Contact;
