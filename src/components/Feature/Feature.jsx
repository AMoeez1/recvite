import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <section className="feature-section bg-color-1 centred">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-mission"></i></div>
                <h2>Leadership <br />Training</h2>
                <figure className="image-box">
                  <img src="assets/images/resource/feature-1.jpg" alt="" />
                  <Link to="/" className="theme-btn-one">Read more</Link>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-creative-idea"></i></div>
                <h2>Improving <br />Resources</h2>
                <figure className="image-box">
                  <img src="assets/images/resource/feature-2.jpg" alt="" />
                  <Link to="/" className="theme-btn-one">Read more</Link>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><i className="flaticon-solution"></i></div>
                <h2>Recruitement <br />Solutions</h2>
                <figure className="image-box">
                  <img src="assets/images/resource/feature-3.jpg" alt="" />
                  <Link to="/" className="theme-btn-one">Read more</Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
