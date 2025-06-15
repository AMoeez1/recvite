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
import SectionThree from "../../components/Home/section3/SectionThree";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import image from "../../components/Home/section3/data/lf30_editor_lvuzp9j4.json";
const Home = () => {
  const styles = {
    height: "500px",
    backgroundImage: 'url("/assets/images/web images/Home/Banner/Banner.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 0",
  };

  return (
    <div className="page-wrapper">
      {/* <div class="preloader"></div> */}
      <Header />
      <MobileMenu />
      {/* <BannerSection /> */}
      <div
        style={styles}
        className="job-banner d-flex align-items-center text-dark"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4">
              <h1 className="fw-bold mb-3" style={{ fontWeight: "bolder" }}>
                Join us & Explore <br /> Thousands of Jobs
              </h1>
              <p className="text-muted">
                Find Jobs, Employment & Career Opportunities
              </p>
            </div>

            <div className="col-md-7">
              <form
                className="row justify-content-center mx-auto g-3 p-4"
                style={{
                  background: "#fff",
                  borderRadius: "15px",
                  maxWidth: "1000px",
                }}
              >
                <div className="col-md-5">
                  <h6 className="text-start mb-1">What</h6>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-0">
                      {/* <FaBriefcase /> */}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job title, keywords…"
                      style={{ border: "none", borderRadius: "10px" }}
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  <h6 className="text-start mb-1">Where</h6>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-0">
                      {/* <FaSearchLocation /> */}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City or postcode"
                      style={{ border: "none", borderRadius: "10px" }}
                    />
                  </div>
                </div>

                <div className="col-md-2 d-flex align-items-end">
                  <button type="submit" className="btn btn-primary">
                    Find Jobs
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree
        title="We are a client-needs driven company"
        para="Our job is to make sure that you have the peace of mind when hiring an individual while working on securing a permanent contract with different agencies. Our reach goes out to different industries and business realms through which we have made a trustworthy network of professional candidates filling in the in-demand jobs. Our network spans across the USA as well, connected to enterprises, small or large, making sure we provide the best recruiting consulting services with the best."
        subtitle="EXPLORE OUR EXPERTISE"
        image={image}
      />

      {/* <SectionThree/> */}

      {/* <FeatureSection />
      <Quote />
      <AboutSection />


      <ServiceSection /> */}

      {/* This was removed by me */}
      {/* <AgencySection /> */}
      {/* <FunfactSection /> */}
      {/* <ProjectSection /> */}
      <WorkingProcess />
      {/* <Cta /> */}
      {/* <ProgressSection /> */}
      {/* <TestimonialSection /> */}
      {/* <ClientsSection /> */}
      {/* <NewsSection /> */}
      <NewsLetter />
      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Home;
