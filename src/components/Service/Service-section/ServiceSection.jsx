import React from 'react';
import { Link } from 'react-router-dom';

const ServicePageSection = () => {
  return (
    <section className="service-page-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Service Block 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
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

          {/* Service Block 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
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

          {/* Service Block 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-3.jpg" alt="" />
                  <span className="category">Solutions</span>
                  <i className="flaticon-policy"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/staffing-solutions">Staffing Solutions</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/staffing-solutions">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-policy"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Block 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-4.jpg" alt="" />
                  <span className="category">Resources</span>
                  <i className="flaticon-job"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/corporate-program">Corporate Program</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/corporate-program">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-job"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Block 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-5.jpg" alt="" />
                  <span className="category">Management</span>
                  <i className="flaticon-teaching"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/leadership-training">Leadership Training</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/leadership-training">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-teaching"></i></div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Block 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image-box">
                  <img src="assets/images/service/service-6.jpg" alt="" />
                  <span className="category">Solutions</span>
                  <i className="flaticon-employment"></i>
                </figure>
                <div className="lower-content">
                  <h3><Link to="/staff-management">Staff Management</Link></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
                  <div className="link"><Link to="/staff-management">Read More</Link></div>
                  <div className="light-icon"><i className="flaticon-employment"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageSection;
