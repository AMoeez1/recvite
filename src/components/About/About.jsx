import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_1">
              <div className="image-box">
                <figure className="image image-1"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                <figure className="image image-2"><img src="assets/images/resource/about-2.jpg" alt="" /></figure>
                <div className="image-content">
                  <div className="icon-box"><i className="flaticon-recruitment"></i></div>
                  <h5>Find Perfect Candidate</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content_block_1">
              <div className="content-box">
                <div className="sec-title">
                  <p>Welcome to Agency</p>
                  <h2>Best Quality Recruitment Staffing Agency</h2>
                </div>
                <div className="text">
                  <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                </div>
                <div className="inner-box clearfix">
                  <div className="single-item">
                    <h5><span>01</span>Strategic Partners</h5>
                    <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
                  </div>
                  <div className="single-item">
                    <h5><span>02</span>Sourcing the Best</h5>
                    <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
                  </div>
                </div>
                <div className="lower-box">
                  <div className="author-box">
                    <figure className="author-thumb"><img src="assets/images/resource/author-1.png" alt="" /></figure>
                    <figure className="signature-box"><img src="assets/images/resource/signature-1.png" alt="" /></figure>
                    <span className="designation">CEO & CO Founder</span>
                  </div>
                  <div className="experienct-box">
                    <div className="inner">
                      <h2>38</h2>
                      <p>Years of Experience</p>
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

export default AboutSection;
