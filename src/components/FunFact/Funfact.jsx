import React from 'react';

const FunfactSection = () => {
  const counterData = [
    { icon: "flaticon-scrum", count: 8080, text: "Project Completed" },
    { icon: "flaticon-business-idea", count: 697, text: "Employer Solutions" },
    { icon: "flaticon-recruit", count: 440, text: "Job Seekers" },
    { icon: "flaticon-customer-review", count: 2887, text: "Happy Customers" }
  ];

  return (
    <section className="funfact-section centred">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            {counterData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 counter-block">
                <div className="counter-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className={item.icon}></i></div>
                    <div className="count-outer count-box">
                      <span 
                        className="count-text" 
                        data-speed="1500" 
                        data-stop={item.count}
                      >
                        0
                      </span>
                    </div>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactSection;
