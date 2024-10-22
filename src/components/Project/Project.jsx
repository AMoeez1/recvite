import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
const ProjectSection = () => {
  const projectItems = [
    { id: 1, image: 'assets/images/gallery/project-1.jpg' },
    { id: 2, image: 'assets/images/gallery/project-2.jpg' },
    { id: 3, image: 'assets/images/gallery/project-3.jpg' },
    { id: 4, image: 'assets/images/gallery/project-4.jpg' },
    { id: 5, image: 'assets/images/gallery/project-5.jpg' },
  ];

  const owlOptions = {
    loop: true,
    margin: 30,
    nav: true,
    smartSpeed: 500,
    autoplay: 1000,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  };

  return (
    <section className="project-section">
      <div className="auto-container">
        <div className="sec-title">
          <p>Staffing Recent Closed Projects</p>
          <h2>Latest From Our Project</h2>
        </div>
      </div>
      <div className="outer-container">
        <OwlCarousel className="gallery-carousel owl-theme" {...owlOptions}>
          {projectItems.map((item) => (
            <div key={item.id} className="project-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={item.image} alt="" />
                </figure>
                <div className="link">
                  <Link to={item.image} className="lightbox-image" data-fancybox="gallery">
                    <i className="flaticon-plus"></i>
                  </Link>
                </div>
                <div className="text">
                  <p>Business</p>
                  <h3><Link to="project-details.html">Staffing Solutions</Link></h3>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ProjectSection;
