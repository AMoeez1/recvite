import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NewsSection = () => {
  const owlOptions = {
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  const newsItems = [
    {
      id: 1,
      image: "assets/images/news/news-1.jpg",
      date: { day: "25", month: "AUG" },
      category: "Human Resource",
      comments: "02",
      title: "Get few solutions to hire a best candidate",
      author: {
        name: "Christine Eve",
        image: "assets/images/news/admin-1.png",
      },
    },
    {
      id: 2,
      image: "assets/images/news/news-2.jpg",
      date: { day: "24", month: "AUG" },
      category: "Human Resource",
      comments: "05",
      title: "We're building a new business world",
      author: { name: "John Mike", image: "assets/images/news/admin-2.png" },
    },
    {
      id: 3,
      image: "assets/images/news/news-3.jpg",
      date: { day: "23", month: "AUG" },
      category: "Human Resource",
      comments: "03",
      title: "Hire easily HR candidates in few seconds",
      author: { name: "Haris Gulati", image: "assets/images/news/admin-3.png" },
    },
  ];

  return (
    <section className="news-section sec-pad bg-color-1">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12 title-column">
            <div className="title-box">
              <div className="sec-title">
                <p>Our Blog Posts</p>
                <h2>Latest News & Articles</h2>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum onts perspicia unde omnis iste natus errluptatem
                  acc usan- tium demque laudantium totam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
            <div className="carousel-block">
              <OwlCarousel
                className="three-item-carousel owl-theme nav-style-one"
                {...owlOptions}
              >
                {newsItems.map((item) => (
                  <div key={item.id} className="news-block-one">
                    <div className="inner-box">
                      <figure className="image-box">
                        <Link to="/blog-details">
                          <img src={item.image} alt="" />
                        </Link>
                        <div className="post-date">
                          <h4>{item.date.day}</h4>
                          <p>{item.date.month}</p>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="far fa-folder-open"></i>
                            {item.category}
                          </li>
                          <li>
                            <i className="far fa-comments"></i>
                            <Link to="/blog-details">
                              {item.comments} Comments
                            </Link>
                          </li>
                        </ul>
                        <h3>
                          <Link to="/blog-details">{item.title}</Link>
                        </h3>
                        <div className="admin">
                          <figure className="admin-thumb">
                            <img src={item.author.image} alt="" />
                          </figure>
                          <p>by {item.author.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
