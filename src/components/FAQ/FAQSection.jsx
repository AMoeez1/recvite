import React, { useState } from "react";
import "./FAQ.css"; // Assuming you have an external CSS file
import { Link } from "react-router-dom";
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if it's already open
    } else {
      setActiveIndex(index); // Open the selected one
    }
  };

  return (
    <div className="faq">
      <div className="faq-item">
        <h2 className="faq-title" onClick={() => toggleFAQ(0)}>
          + What Does Hi5 Consulting Do?
        </h2>
        {activeIndex === 0 && (
          <p className="faq-content">
            Our goal at Hi5 consulting is to provide business with top-notch services available at the lowest price. Our services include recruitment, so your company can hire capable and skilled individuals best suited for your company from our large and diverse pool of candidates. 
            We also offer development services for your company’s needs, which includes developing web applications, mobile applications, and other software.
          </p>
        )}
      </div>

      <div className="faq-item">
        <h2 className="faq-title" onClick={() => toggleFAQ(1)}>
          + What Industries Have You Recruited For?
        </h2>
        {activeIndex === 1 && (
          <div>
          <p className="faq-content">We have helped recruit across multiple industries, these include:</p>
            <ul className="faq-content">
              <li>Aerospace & Defense</li>
              <li>US Federal Government</li>
              <li>Information Technology/Software</li>
              <li>Health Care</li>
              <li>Energy</li>
              <li>Commercial Construction</li>
              <li>Education</li>
              <li>Agriculture</li>
            </ul>

            <p className="faq-content">You can read about these in more detail at our <Link to={'/industries'} style={{color:'#28aa4a'}}>‘Industries’</Link> page.
            We have also placed candidates in the following agencies:</p>
            <ul className="faq-content">
              <li>Department of Defense</li>
              <li>Department of Labor</li>
              <li>Department of Justice</li>
              <li>Department of Health</li>
              <li>Department of Homeland Security</li>
              <li>Department of Energy</li>
            </ul>


            <p className="faq-content">Our team includes experienced individuals who are qualified to place highly capable candidates in hard to fill positions. We provide cleared recruiting that includes:</p>
            <ul className="faq-content">
              <li>Public Trust</li>
              <li>Secret Clearance</li>
              <li>Top Secret Clearance</li>
              <li>Top Secret SCI Clearance</li>
              <li>CI Polygraph</li>
              <li>Department of Energy</li>
            </ul>


          </div>

          
        )}
      </div>

      <div className="faq-item">
        <h2 className="faq-title" onClick={() => toggleFAQ(2)}>
          + Why Would We Hire Through Hi5 Consulting?
        </h2>
        {activeIndex === 2 && (
        <div>
          <p className="faq-content" style={{marginTop:'10px'}}>
          At Hi5 consulting, our goal is to make your hiring process easier for you. We make sure to connect businesses with individuals who would not only fit right into your company, but also help you unlock your company’s potential. Our pool of candidates consists of people who are highly skilled and multi-faceted.
          </p>
          <p className="faq-content">
          We want you to be fully satisfied with your hiring process and in doing so, we will collaborate with you to get you the best fit for your company.
          </p>
          </div>
        )}
      </div>

      <div className="faq-item">
        <h2 className="faq-title" onClick={() => toggleFAQ(3)}>
          + What Other Services Do You Offer?
        </h2>
        {activeIndex === 3 && (
            <div>
            <p className="faq-content">We have helped recruit across multiple industries, these include:</p>
            <ul className="faq-content">
              <li>Web Development and Designing</li>
              <li>Social Media Marketing</li>
              <li>Graphic Designing</li>
              <li>Search Engine Optimization</li>
            </ul>
            <p className="faq-content">
            We are basically your one stop to taking your business to the next level!
            </p>
            </div>
        )}
      </div>

      <div className="faq-item">
        <h2 className="faq-title" onClick={() => toggleFAQ(4)}>
          + How Do We Connect?
        </h2>
        {activeIndex === 4 && (
          <p className="faq-content">
          Make an appointment with us! Visit our website’s <Link to={'/contact'} style={{color:'#28aa4a'}}>Contact Us</Link> page and submit your details in order to start your journey with us.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
