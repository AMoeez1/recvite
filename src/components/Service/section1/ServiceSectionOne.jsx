import React from "react";
import "./ServiceSectionOne.css";

const ServiceSectionOne = () => {
  return (
    <section className="section-container">
      <div className="header">
        <div className="horizontal-line-serv"></div>
        {/* <span className="header-line">EXPLORE OUR EXPERTISE</span> */}
      </div>
      <div className="content">
        <div className="image-content">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Placeholder"
            className="section-image"
          />
        </div>
        <div className="text-content-home">
          <h2 className="section-title">
            We are a client-needs driven company
          </h2>
          <p className="section-description">
            Our job is to make sure that you have the peace of mind when hiring
            an individual while working on securing a permanent contract with
            different agencies. Our reach goes out to different industries and
            business realms through which we have made a trustworthy network of
            professional candidates filling in the in-demand jobs. Our network
            spans across the USA as well, connected to enterprises, small or
            large, making sure we provide the best recruiting consulting
            services with the best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionOne;
