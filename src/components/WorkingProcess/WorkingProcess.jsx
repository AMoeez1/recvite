import React from 'react';

const WorkingProcess = () => {
  return (
    <section className="working-process centred">
      <div className="auto-container">
        <div className="sec-title centred">
          <p>Staffing Recent Closed Projects</p>
          <h2>We Choose a Recvite</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-investment"></i>
                  <span>01</span>
                  <div className="icon-shape" style={{backgroundImage: "url(assets/images/shape/shape-4.png)"}}></div>
                </div>
                <h3>Consult with Team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-checklist"></i>
                  <span>02</span>
                  <div className="icon-shape" style={{backgroundImage: "url(assets/images/shape/shape-4.png)"}}></div>
                </div>
                <h3>Make a Schedule</h3>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 process-block">
            <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="flaticon-outsourcing"></i>
                  <span>03</span>
                  <div className="icon-shape" style={{backgroundImage: "url(assets/images/shape/shape-4.png)"}}></div>
                </div>
                <h3>Hire & Enjoy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
