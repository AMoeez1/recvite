import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div
        className="footer-top"
        style={{
          backgroundImage: "url(assets/images/background/footer-1.jpg)",
        }}
      >
        <div className="auto-container">
          <div className="footer-info clearfix">
            <FooterInfoItem
              icon="flaticon-mail"
              title="Email"
              content={
                <Link to="mailto:needhelp@example.com">needhelp@example.com</Link>
              }
            />
            <FooterInfoItem
              icon="flaticon-phone"
              title="Call"
              content={<Link to="tel:928886660000">+ 92 888 666 0000</Link>}
            />
            <FooterInfoItem
              icon="flaticon-address"
              title="Address"
              content="Suite 20 Golden Street USA"
            />
          </div>
          <div className="widget-section">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <LogoWidget />
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <LinksWidget
                  title="Explore"
                  links={[
                    "About",
                    "Our Solutions",
                    "Team Members",
                    "News & Articles",
                    "Contact Us",
                  ]}
                />
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <LinksWidget
                  title="Links"
                  links={[
                    "Employers",
                    "Job Seekers",
                    "How It Works",
                    "Pricing & Plans",
                    "Our Departments",
                  ]}
                 
                  className="ml-30"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <NewsWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="copyright pull-left">
              <p>
                &copy; Copyright 2020 by <Link to="/">Recvite</Link>
              </p>
            </div>
            <ul className="footer-nav pull-right">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterInfoItem = ({ icon, title, content }) => (
  <div className="single-item">
    <div className="inner">
      <div className="icon-box">
        <i className={icon}></i>
      </div>
      <h6>{title}</h6>
      <p>{content}</p>
    </div>
  </div>
);

const LogoWidget = () => (
  <div className="footer-widget logo-widget">
    <figure className="footer-logo">
      <Link to="/">
        <img src="assets/images/footer-logo.png" alt="" />
      </Link>
    </figure>
    <p>Join our newsletter and get latest updates</p>
    <form action="contact.html" method="post">
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required=""
        />
        <button>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </form>
    <ul className="social-links clearfix">
      <li>
        <h6>Connect:</h6>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-facebook-square"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-pinterest-p"></i>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fab fa-instagram"></i>
        </Link>
      </li>
    </ul>
  </div>
);

const LinksWidget = ({ title, links, className = "" }) => (
  <div className={`footer-widget links-widget ${className}`}>
    <div className="widget-title">
      <h4>{title}</h4>
    </div>
    <div className="widget-content">
      <ul className="links-list clearfix">
        {links.map((link, index) => (
          <li key={index}>
            <Link to="/">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const NewsWidget = () => (
  <div className="footer-widget post-widget ml-50">
    <div className="widget-title">
      <h4>News</h4>
    </div>
    <div className="post-inner">
      <NewsItem
        image="assets/images/resource/footer-post-1.jpg"
        title="How to guide to HR adviser and clients lessening"
        date="20 Aug, 2020"
      />
      <NewsItem
        image="assets/images/resource/footer-post-2.jpg"
        title="Providing the best stuffing solutions"
        date="19 Aug, 2020"
      />
    </div>
  </div>
);

const NewsItem = ({ image, title, date }) => (
  <div className="post">
    <figure className="post-thumb">
      <Link to="/blog-details">
        <img src={image} alt="" />
      </Link>
    </figure>
    <h6>
      <Link to="/blog-details">{title}</Link>
    </h6>
    <span className="post-date">{date}</span>
  </div>
);

export default Footer;
