import React from "react";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <section className="section-one-home">
    <h2 className="section-one-heading">And Wait A Moment,<br></br> There's More For You</h2>
    <div className="section-one">
      <div className="section-one-container">
      
        <div className="image-container">
        <div className="image-container">
            <img src="https://via.placeholder.com/600x400" alt="Business Example" className="image-placeholder" />
          </div>
        </div>
        <div className="text-container">
         
          <h3 className="sec-heading-home">Websites That Make Sense For Businesses Of All Sizes.</h3>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
            quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
            dapibus condimentum sit amet a augue. Sed non neque elit.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SectionOne;