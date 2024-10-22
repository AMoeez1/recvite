import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Mike Hardson",
      image: "assets/images/resource/testimonial-1.png",
      text: "This is due to their excellent service, competitive pricing and customer support. It's throughly refresing to get such a personal touch."
    },
    {
      name: "Christine Eve",
      image: "assets/images/resource/testimonial-2.png",
      text: "This is due to their excellent service, competitive pricing and customer support. It's throughly refresing to get such a personal touch."
    },
    {
      name: "Christine Eve",
      image: "assets/images/resource/testimonial-3.png",
      text: "This is due to their excellent service, competitive pricing and customer support. It's throughly refresing to get such a personal touch."
    }
  ];

  const owlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  return (
    <section className="testimonial-section centred">
      <div className="auto-container">
        <div className="inner-container">
          <OwlCarousel className="three-item-carousel owl-carousel owl-theme" {...owlOptions}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-block-one">
                <div className="inner-box">
                  <div className="icon-box">"</div>
                  <p>{testimonial.text}</p>
                  <h5>{testimonial.name}</h5>
                  <figure className="image-box">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </figure>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
