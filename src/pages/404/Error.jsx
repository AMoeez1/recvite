// src/pages/Home.js
import React from "react";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import PageTitle from "../../components/Blog/Title/Title";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div class="preloader"></div>
      <Header />
      <MobileMenu />
      <PageTitle title={"404"} text={"404"} />
      <section className="error-section centred">
        <div className="auto-container">
          <div className="inner-box">
            <h1>404</h1>
            <h2>
              page is not found. <br />
              the page is doesn't exist or deleted
            </h2>
            <Link to="/" className="theme-btn-one">
              Go Back Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
    </div>
  );
};

export default Contact;
