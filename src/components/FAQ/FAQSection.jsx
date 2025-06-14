import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";

const FAQSection = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="row faq bg-light">
      <div className="col-md-7 faq-total-content">
        <h1 className="faq-main-title">Frequently Asked Questions</h1>

        {faqData.map((faq, index) => (
          <>
            <div className="faq-item" key={index}>
              {/* <div
                className="faq-heading-container"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="text-black" style={{ color: "black" }}>
                  {activeIndex === index ? "" : "+"} {faq.question}
                </h5>
                <p className="faq-close">{activeIndex === index ? "-" : ""}</p>
              </div> */}
              <div
                className="faq-heading-container"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="faq-title">{faq.question}</h5>
                <p className="faq-close">{activeIndex === index ? "-" : "+"}</p>
              </div>

              {activeIndex === index && (
                <div className="faq-content-container">{faq.answer}</div>
              )}
              <hr />
            </div>
          </>
        ))}
      </div>
      <div
        className="col-md-5 col-0"
        style={{
          backgroundImage: image,
          borderRadius: '20px'
        }}
      ></div>
    </div>
  );
};

const faqData = [
  {
    question: "What Does Hi5 Consulting Do?",
    answer: (
      <p className="faq-content">
        Our goal at Hi5 consulting is to provide businesses with top-notch
        services available at the lowest price. We offer recruitment and
        development services including web/mobile applications and other
        software.
      </p>
    ),
  },
  {
    question: "What Industries Have You Recruited For?",
    answer: (
      <div>
        <p className="faq-content">
          We have helped recruit across multiple industries:
        </p>
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
        <p className="faq-content">
          Learn more on our{" "}
          <Link to="/industries" className="faq-link">
            Industries
          </Link>{" "}
          page.
        </p>
      </div>
    ),
  },
  {
    question: "Why Would We Hire Through Hi5 Consulting?",
    answer: (
      <div>
        <p className="faq-content">
          We simplify your hiring process, connecting you with skilled,
          multi-faceted individuals who fit your company’s needs.
        </p>
      </div>
    ),
  },
  {
    question: "What Other Services Do You Offer?",
    answer: (
      <div>
        <ul className="faq-content">
          <li>Web Development and Designing</li>
          <li>Social Media Marketing</li>
          <li>Graphic Designing</li>
          <li>Search Engine Optimization</li>
        </ul>
        <p className="faq-content">
          We’re your one-stop-shop to scale your business!
        </p>
      </div>
    ),
  },
  {
    question: "How Do We Connect?",
    answer: (
      <p className="faq-content">
        Visit our{" "}
        <Link to="/contact" className="faq-link">
          Contact Us
        </Link>{" "}
        page and submit your details to get started.
      </p>
    ),
  },
];

export default FAQSection;
