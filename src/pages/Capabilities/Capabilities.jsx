import React from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/Blog/Title/Title";
import AgencySection from "../../components/Agency/Agency";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import CapabilitiesSection from "../../components/CapabilitiesSection/CapabilitiesSection";

const Capabilities = () => {
  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      <PageTitle title={"Capabilities"} />
      <CapabilitiesSection />
      <AgencySection />
      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Capabilities;
