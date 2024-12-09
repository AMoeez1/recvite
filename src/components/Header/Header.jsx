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
                   
                  </li>
                  
                  <li className="dropdown">
                    <Link to="/service">Services</Link>
                    
                  </li>

                  <li className="dropdown">
                    <Link to="/capabilities">Capabilities</Link>
                    
                  </li>


                  

                  <li className="dropdown">
                    <Link to="/">Industries</Link>
                    <ul>
                      <li>
                        <Link to="/recruiting">Recruiting</Link>
                      </li>
                      {/* <li>
                        <Link to="/development">Development</Link>
                      </li> */}
                    </ul>
                  </li>

           

                  <li className="dropdown">
                    <Link to="/jobs">Jobs</Link>

                  </li>


                  {/* <li className="dropdown">
                    <Link to="/blog">Blog</Link>
                   
                  </li> */}
                  <li>
                    <Link to="/contact">Contact Us</Link>
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
                    
                  </li>
                 
                  <li className="dropdown">
                    <Link to="/service">Services</Link>
                   
                  </li>

                  <li className="dropdown">
                    <Link to="/capabilities">Capabilities</Link>
                    
                  </li>

                  <li className="dropdown">
                    <Link to="/">Industries</Link>
                    <ul>
                      <li>
                        <Link to="/recruiting">Recruiting</Link>
                      </li>
                      {/* <li>
                        <Link to="/development">Development</Link>
                      </li> */}
                    </ul>
                  </li>


               
                  <li className="dropdown">
                    <Link to="/jobs">Jobs</Link>

                  </li>




                  {/* <li className="dropdown">
                    <Link to="/">Blog</Link>
                   
                  </li> */}
                  <li>
                    <Link to="/contact">Contact Us</Link>
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
