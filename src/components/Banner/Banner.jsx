import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
const BannerSection = () => {
  const owlOptions = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };

  return (
    <section className="banner-section">
      <OwlCarousel className="banner-carousel owl-theme" {...owlOptions}>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/banner-1.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>
                There are many of passages of lorem Ipsum, but the majori have
                suffered alteration in some form.
              </p>
              <div className="btn-box">
                <Link to="/" className="theme-btn-one">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/banner-2.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>
                There are many of passages of lorem Ipsum, but the majori have
                suffered alteration in some form.
              </p>
              <div className="btn-box">
                <Link to="/" className="theme-btn-one">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;
