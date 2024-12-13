// import React from 'react';
// import { Link } from 'react-router-dom';
// const ContactSection = () => {
//     return (
//         <section className="contact-section sec-pad">
//             <div className="auto-container">
//                 <div className="row clearfix">
//                     <div className="col-lg-4 col-md-12 col-sm-12 title-column">
//                         <div className="title-inner">
//                             <div className="sec-title">
//                                 <p>Contact with Us</p>
//                                 <h2>Call Now or Write a Message</h2>
//                             </div>
//                             <div className="text">
//                                 <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. sit amet scelerisque eros. Phasellus hendrerit neque a augue.</p>
//                             </div>
//                             <ul className="social-links clearfix">
//                                 <li><h6>Connect:</h6></li>
//                                 <li><Link to="/contact"><i className="fab fa-twitter"></i></Link></li>
//                                 <li><Link to="/contact"><i className="fab fa-facebook-square"></i></Link></li>
//                                 <li><Link to="/contact"><i className="fab fa-pinterest-p"></i></Link></li>
//                                 <li><Link to="/contact"><i className="fab fa-instagram"></i></Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-8 col-md-12 col-sm-12 form-column">
//                         <div className="form-inner">
//                             <form method="post" action="sendemail.php" id="contact-form" className="default-form">
//                                 <div className="row clearfix">
//                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                                         <input type="text" name="username" placeholder="Full Name" required />
//                                     </div>
//                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                                         <input type="email" name="email" placeholder="Email Address" required />
//                                     </div>
//                                     <div className="col-lg-6 col-md-12 col-sm-12 form-group">
//                                         <input type="text" name="phone" required placeholder="Phone Number" />
//                                     </div>
//                                     <div className="col-lg-6 col-md-12 col-sm-12 form-group">
//                                         <input type="text" name="subject" required placeholder="Subject" />
//                                     </div>
//                                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                                         <textarea name="message" placeholder="Write Message"></textarea>
//                                     </div>
//                                     <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
//                                         <button className="theme-btn-one" type="submit" name="submit-form">Submit Comment</button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactSection;

// ContactSection.js
import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Left Side Illustration */}
      <div className="contact-illustration">
        <img src="https://via.placeholder.com/400" alt="Contact Illustration" />
      </div>

      {/* Right Side Form */}
      <div className="contact-form-wrapper">
        <h2>Get in touch !</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="tel" name="phone" placeholder="Contact" required />
          {/* <input type="text" name="subject" placeholder="Subject" /> */}

          <div className="contact-form-msg">
          <label htmlFor="">How can we assist?</label>
          <textarea name="message" placeholder="Message" required></textarea>
          </div>
          

          {/* Services Section */}
          <div className="services-section-contact">
            <h3>Services</h3>
            <div className="services-options-contact">
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Permanent Recruitment (Direct Hire)"
                />
                Permanent Recruitment (Direct Hire)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Temporary/Contract Staffing"
                />
                Temporary/Contract Staffing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Executive Search (Headhunting)"
                />
                Executive Search (Headhunting)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Talent Mapping and Market Research"
                />
                Talent Mapping and Market Research
              </label>
            </div>
          </div>

          <button type="submit" className="theme-btn-one">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
