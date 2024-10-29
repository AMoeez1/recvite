import React from "react";
import "./CapabilitiesSection.css";
const CapabilitiesSection = () => {
  return (
    <div className="recruitment-container">
      <h1 className="rec_heading">Recruitment Process Outsourcing</h1>
      <hr className="divider" />
      <div className="sourcing-section">
        <div className="logos">
          {/* Replace `src` attribute with actual logo URLs when available */}
          <div className="logo-item">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Naukri Gulf Logo"
            />
          </div>
          <div className="logo-item">
            <img src="https://via.placeholder.com/200x150" alt="Indeed Logo" />
          </div>
          <div className="logo-item">
            <img src="https://via.placeholder.com/200x150" alt="Bayt Logo" />
          </div>
          <div className="logo-item">
            <img
              src="https://via.placeholder.com/200x150"
              alt="LinkedIn Logo"
            />
          </div>
        </div>
        <div className="text-content">
          <h2>Our Sourcing Partners</h2>
          <p>
            You can count on us to provide you with a variety of candidates
            available through our trustworthy sourcing partners which include
            ZipRecruiter, LinkedIn, Dice, and Indeed. Our versatile pool of
            candidates is filled with highly capable and qualified individuals
            that would easily cater to any company's particular needs, helping
            out in making the hiring process run smoothly.
          </p>
        </div>
      </div>

      <div className="sourcing-section">
        <div className="text-content">
          <h2>Partner for Federal Opportunities</h2>
          <hr className="divider" />
          <p className="" style={{ width: "80%" }}>
            We can provide you with qualified candidates that can be potential
            permanent hires that will stick with you while you connect with
            different federal opportunities that you might be interested in. It
            is our intent to make sure to give you the peace of mind when hiring
            an individual while working on securing a permanent contract with
            different agencies. Our candidates have also been placed in the US
            Federal Agencies such as, the Department of Defense, Air Force, US
            Navy, NASA, NGA, DHS, CBP, UST and FBI.
          </p>
        </div>
      </div>

      <div className="sourcing-section">
        <div className="text-content">
          <h2>Cost effectiveness</h2>
          <p style={{ width: "70%" }}>
            The typically possibility based commission approach can without much
            of a stretch have a huge effect on any organization’s main concern.
            Rather than the typical possibility based commission approach, our
            Recruiting-as-a-Service model gives critical influence to
            organizations that enroll in volume, as this assistance structure
            permits them to make numerous situations at a level month to month
            expense of $3000 with no covered up costs.
          </p>
        </div>

        <div className="">
          {/* Replace `src` attribute with actual logo URLs when available */}
          <div className="cost-effective-logo">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Naukri Gulf Logo"
            />
          </div>
        </div>
      </div>

      <div className="sourcing-section">
        <div className="text-content">
          <h2>Development Platforms</h2>
          <p>
            You can count on us to develop your business Websites, CRM & Mobile
            Applications on WordPress, using different programming languages as
            per your need such as HTML/CSS, PHP, JAVA and Asp .NET. Our
            Developers highly capable and qualified individuals that would
            easily cater to any company’s particular needs, helping out in
            making the process smoothly.
          </p>
        </div>

        <div className="logos">
          {/* Replace `src` attribute with actual logo URLs when available */}
          <div className="logo-item">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Naukri Gulf Logo"
            />
          </div>
          <div className="logo-item">
            <img src="https://via.placeholder.com/200x150" alt="Indeed Logo" />
          </div>
          <div className="logo-item">
            <img src="https://via.placeholder.com/200x150" alt="Bayt Logo" />
          </div>
          <div className="logo-item">
            <img
              src="https://via.placeholder.com/200x150"
              alt="LinkedIn Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
