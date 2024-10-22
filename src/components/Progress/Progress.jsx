import React from 'react';

const ProgressSection = () => {
  return (
    <section className="progress-section" style={{backgroundImage: "url(assets/images/background/progress-1.jpg)"}}>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-5 col-md-12 col-sm-12 title-column">
            <div className="sec-title light">
              <p>Staffing Partners</p>
              <h2>We're Here to Solve Recruitment Using Technology</h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 content-column">
            <div className="content_block_4">
              <div className="content-box">
                <div className="counter-inner">
                  <div className="inner-box">
                    <div className="icon-box"><i className="flaticon-customer-review"></i></div>
                    <div className="count-outer count-box">
                      <span className="count-text" data-speed="1500" data-stop="2887">0</span>
                    </div>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="progress-inner">
                  <div className="text">
                    <p>There are many variations passages of lorem ipsum but the maj alteration in some form, by rando mis words is noted.</p>
                  </div>
                  <div className="progress-content">
                    <div className="progress-box">
                      <h5>Stuffing</h5>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="80%"><div className="count-text">80%</div></div>
                      </div>
                    </div>
                    <div className="progress-box">
                      <h5>Recruitment</h5>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="60%"><div className="count-text">60%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
