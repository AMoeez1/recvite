import React from 'react';
import { Link } from 'react-router-dom';
const ServiceSection = () => {
  return (
    <section className="service-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="sec-title centred">
          <p>Our All Services List</p>
          <h2>Outsourced HR Services</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-1.jpg" alt="" />
                  <span className="category">Management</span>
                  <i className="flaticon-consulting"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/hr-consulting">HR Consulting</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/hr-consulting">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-consulting"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-2.jpg" alt="" />
                  <span className="category">Resources</span>
                  <i className="flaticon-controller"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/technology-resource">Technology Resource</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/technology-resource">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-controller"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-3.jpg" alt="" />
                  <span className="category">Solutions</span>
                  <i className="flaticon-policy"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/staffing-solutions">Staffing Solutions</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="staffing-solutions">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-policy"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
