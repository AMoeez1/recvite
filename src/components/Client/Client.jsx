import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
const ClientsSection = () => {
  const clientLogos = [
    'assets/images/clients/clients-logo-1.png',
    'assets/images/clients/clients-logo-2.png',
    'assets/images/clients/clients-logo-3.png',
    'assets/images/clients/clients-logo-4.png',
    'assets/images/clients/clients-logo-5.png'
  ];

  const owlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  return (
    <section className="clients-section">
      <div className="auto-container">
        <OwlCarousel className="clients-carousel owl-carousel owl-theme" {...owlOptions}>
          {clientLogos.map((logo, index) => (
            <figure key={index} className="clients-logo-box">
              <Link to="/">
                <img src={logo} alt={`Client Logo ${index + 1}`} />
              </Link>
            </figure>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientsSection;
