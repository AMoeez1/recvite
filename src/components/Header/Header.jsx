import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header style-one">
      <div className="header-top">
        <div className="top-inner clearfix">
          <ul className="info-list pull-left clearfix">
            <li>
              <i className="flaticon-email"></i>
              <a href="mailto:needhelp@example.com">needhelp@example.com</a>
            </li>
            <li>
              <i className="flaticon-telephone"></i>
              <a href="tel:928886660000">92 888 666 0000</a>
            </li>
            <li>
              <i className="flaticon-pin"></i>Suite 20 Golden Street USA
            </li>
          </ul>
          <div className="right-column pull-right clearfix">
            <ul className="social-links clearfix">
              <li>
                <Link to="/">
                  <i className="fab fa-facebook-square"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-twitter"></i>
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
            <div className="language-box">
              <img src="assets/images/icons/flag-1.png" alt="" />
              <Link to="/" className="text">
                English
              </Link>
              <ul className="language-list">
                <li>
                  <Link to="/">English</Link>
                </li>
                <li>
                  <Link to="/">Spanish</Link>
                </li>
                <li>
                  <Link to="/">Turky</Link>
                </li>
                <li>
                  <Link to="/">Chiness</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <Link to="/">
                <img src="assets/images/logo.png" alt="" />
              </Link>
            </figure>
          </div>
          <div className="menu-area">
            <div className="mobile-nav-toggler">
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
              <i className="icon-bar"></i>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <Link to="/">Home</Link>
                    <ul>
                      <li>
                        <Link to="/">Home Page 01</Link>
                      </li>
                      <li>
                        <Link to="/index-2">Home Page 02</Link>
                      </li>
                      <li>
                        <Link to="/index-onepage">OnePage Home</Link>
                      </li>
                      <li>
                        <Link to="/index-rtl">RTL Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Header Style</Link>
                        <ul>
                          <li>
                            <Link to="/">Header Style 01</Link>
                          </li>
                          <li>
                            <Link to="/index-2">Header Style 02</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/">Pages</Link>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/project">Latest Projects</Link>
                      </li>
                      <li>
                        <Link to="/project-details">Project Details</Link>
                      </li>
                      <li>
                        <Link to="/error">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/">Our Solutions</Link>
                    <ul>
                      <li>
                        <Link to="/service">Our Solutions</Link>
                      </li>
                      <li>
                        <Link to="/hr-consulting">HR Consulting</Link>
                      </li>
                      <li>
                        <Link to="/technology-resource">
                          Technology Resource
                        </Link>
                      </li>
                      <li>
                        <Link to="/staffing-solutions">Staffing Solutions</Link>
                      </li>
                      <li>
                        <Link to="/corporate-program">Corporate Program</Link>
                      </li>
                      <li>
                        <Link to="/leadership-training">
                          Leadership Training
                        </Link>
                      </li>
                      <li>
                        <Link to="/staff-management">Staff Management</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <Link to="/">Industries</Link>
                    <ul>
                      <li>
                        <Link to="/recruiting">Recruiting</Link>
                      </li>
                      <li>
                        <Link to="/development">Development</Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="dropdown">
                    <Link to="/">Elements</Link>
                    <div className="megamenu">
                      <div className="row clearfix">
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 1</h4>
                            </li>
                            <li>
                              <Link to="/about-element-1">About Block 01</Link>
                            </li>
                            <li>
                              <Link to="/about-element-2">About Block 02</Link>
                            </li>
                            <li>
                              <Link to="/service-element-1">
                                Service Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-element-2">
                                Service Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/feature-element-1">
                                Feature Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/feature-element-2">
                                Feature Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/news-element-1">News Block 01</Link>
                            </li>
                            <li>
                              <Link to="/news-element-2">News Block 02</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 2</h4>
                            </li>
                            <li>
                              <Link to="/team-element-1">Team Block 01</Link>
                            </li>
                            <li>
                              <Link to="/team-element-2">Team Block 02</Link>
                            </li>
                            <li>
                              <Link to="/funfact-element-1">
                                Counter Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/funfact-element-2">
                                Counter Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/process-element-1">
                                Process Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/process-element-2">
                                Process Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/agency-element">Agency Block</Link>
                            </li>
                            <li>
                              <Link to="/skills-element">Skills Block</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 3</h4>
                            </li>
                            <li>
                              <Link to="/testimonial-element">
                                Testimonial Block
                              </Link>
                            </li>
                            <li>
                              <Link to="/clients-element">Clients Block</Link>
                            </li>
                            <li>
                              <Link to="/cta-element">CTA Block</Link>
                            </li>
                            <li>
                              <Link to="/video-element">Video Block</Link>
                            </li>
                            <li>
                              <Link to="/feature-element-3">
                                Feature Block 03
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  <li className="dropdown">
                    <Link to="/jobs">Jobs</Link>

                  </li>


                  <li className="dropdown">
                    <Link to="/blog">Blog</Link>
                    {/* <ul>
                      <li>
                        <Link to="/blog">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/blog-2">Blog Standard</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="menu-right-content clearfix">
            <div className="search-box-outer">
              <div className="dropdown">
                <button
                  className="search-box-btn"
                  type="button"
                  id="dropdownMenu3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon-magnifying-glass"></i>
                </button>
                <div
                  className="dropdown-menu search-panel"
                  aria-labelledby="dropdownMenu3"
                >
                  <div className="form-container">
                    <form method="post" action="blog">
                      <div className="form-group">
                        <input
                          type="search"
                          name="search-field"
                          value=""
                          placeholder="Search...."
                          required=""
                        />
                        <button type="submit" className="search-btn">
                          <span className="fas fa-search"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <Link to="/contact" className="theme-btn-one">
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header">
        <div className="outer-box">
          <div className="logo-box">
            <figure className="logo">
              <Link to="/">
                <img src="assets/images/logo.png" alt="" />
              </Link>
            </figure>
          </div>
          <div className="menu-area">
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="current dropdown">
                    <Link to="/">Home</Link>
                    <ul>
                      <li>
                        <Link to="/">Home Page 01</Link>
                      </li>
                      <li>
                        <Link to="/index-2">Home Page 02</Link>
                      </li>
                      <li>
                        <Link to="/index-onepage">OnePage Home</Link>
                      </li>
                      <li>
                        <Link to="/index-rtl">RTL Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/">Header Style</Link>
                        <ul>
                          <li>
                            <Link to="/">Header Style 01</Link>
                          </li>
                          <li>
                            <Link to="/index-2">Header Style 02</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/">Pages</Link>
                    <ul>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/project">Latest Projects</Link>
                      </li>
                      <li>
                        <Link to="/project-details">Project Details</Link>
                      </li>
                      <li>
                        <Link to="/error">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="/">Our Solutions</Link>
                    <ul>
                      <li>
                        <Link to="/service">Our Solutions</Link>
                      </li>
                      <li>
                        <Link to="/hr-consulting">HR Consulting</Link>
                      </li>
                      <li>
                        <Link to="/technology-resource">
                          Technology Resource
                        </Link>
                      </li>
                      <li>
                        <Link to="/staffing-solutions">Staffing Solutions</Link>
                      </li>
                      <li>
                        <Link to="/corporate-program">Corporate Program</Link>
                      </li>
                      <li>
                        <Link to="/leadership-training">
                          Leadership Training
                        </Link>
                      </li>
                      <li>
                        <Link to="/staff-management">Staff Management</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <Link to="/">Industries</Link>
                    <ul>
                      <li>
                        <Link to="/recruiting">Recruiting</Link>
                      </li>
                      <li>
                        <Link to="/development">Development</Link>
                      </li>
                    </ul>
                  </li>


                  {/* <li className="dropdown">
                    <Link to="/">Elements</Link>
                    <div className="megamenu">
                      <div className="row clearfix">
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 1</h4>
                            </li>
                            <li>
                              <Link to="/about-element-1">About Block 01</Link>
                            </li>
                            <li>
                              <Link to="/about-element-2">About Block 02</Link>
                            </li>
                            <li>
                              <Link to="/service-element-1">
                                Service Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/service-element-2">
                                Service Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/feature-element-1">
                                Feature Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/feature-element-2">
                                Feature Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/news-element-1">News Block 01</Link>
                            </li>
                            <li>
                              <Link to="/news-element-2">News Block 02</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 2</h4>
                            </li>
                            <li>
                              <Link to="/team-element-1">Team Block 01</Link>
                            </li>
                            <li>
                              <Link to="/team-element-2">Team Block 02</Link>
                            </li>
                            <li>
                              <Link to="/funfact-element-1">
                                Counter Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/funfact-element-2">
                                Counter Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/process-element-1">
                                Process Block 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/process-element-2">
                                Process Block 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/agency-element">Agency Block</Link>
                            </li>
                            <li>
                              <Link to="/skills-element">Skills Block</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-4 column">
                          <ul>
                            <li>
                              <h4>Elements 3</h4>
                            </li>
                            <li>
                              <Link to="/testimonial-element">
                                Testimonial Block
                              </Link>
                            </li>
                            <li>
                              <Link to="/clients-element">Clients Block</Link>
                            </li>
                            <li>
                              <Link to="/cta-element">CTA Block</Link>
                            </li>
                            <li>
                              <Link to="/video-element">Video Block</Link>
                            </li>
                            <li>
                              <Link to="/feature-element-3">
                                Feature Block 03
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  <li className="dropdown">
                    <Link to="/jobs">Jobs</Link>

                  </li>




                  <li className="dropdown">
                    <Link to="/">Blog</Link>
                    {/* <ul>
                      <li>
                        <Link to="/blog">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/blog-2">Blog Standard</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="menu-right-content clearfix">
            <div className="search-box-outer">
              <div className="dropdown">
                <button
                  className="search-box-btn"
                  type="button"
                  id="dropdownMenu3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon-magnifying-glass"></i>
                </button>
                <div
                  className="dropdown-menu search-panel"
                  aria-labelledby="dropdownMenu3"
                >
                  <div className="form-container">
                    <form method="post" action="blog">
                      <div className="form-group">
                        <input
                          type="search"
                          name="search-field"
                          value=""
                          placeholder="Search...."
                          required=""
                        />
                        <button type="submit" className="search-btn">
                          <span className="fas fa-search"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <Link to="/contact" className="theme-btn-one">
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
