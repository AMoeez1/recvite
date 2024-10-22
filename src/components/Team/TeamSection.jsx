import React from 'react';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Jessica Brown',
      designation: 'Director',
      image: 'assets/images/team/team-1.jpg',
      delay: '00ms'
    },
    {
      name: 'Mike Hardson',
      designation: 'Director',
      image: 'assets/images/team/team-2.jpg',
      delay: '200ms'
    },
    {
      name: 'Christine Eve',
      designation: 'Director',
      image: 'assets/images/team/team-3.jpg',
      delay: '400ms'
    },
    {
      name: 'Kevin Smith',
      designation: 'Director',
      image: 'assets/images/team/team-4.jpg',
      delay: '600ms'
    }
  ];

  return (
    <section className="team-section sec-pad pb-0">
      <div className="auto-container">
        <div className="sec-title centred">
          <p>Our Team Members</p>
          <h2>Experienced People</h2>
        </div>
        <div className="inner-container">
          <div className="row clearfix">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
                <div className="team-block-one wow fadeInUp animated" data-wow-delay={member.delay} data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={member.image} alt={member.name} />
                      <div className="content-box clearfix">
                        <span>Connect</span>
                        <ul className="social-links">
                          <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                          <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                          <li><Link to="/"><i className="fab fa-pinterest-p"></i></Link></li>
                          <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <h4><Link to="/">{member.name}</Link></h4>
                      <span className="designation">{member.designation}</span>
                    </div>
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

export default TeamSection;
