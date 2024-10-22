import React from 'react';
import { Link } from 'react-router-dom';
const SidebarPageContainer = () => {
  return (
    <section className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Side */}
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="blog-details-content">
              <div className="news-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/news/news-10.jpg" alt="" />
                    <div className="post-date">
                      <h4>31</h4>
                      <p>AUG</p>
                    </div>
                  </figure>
                  <div className="lower-content">
                    <ul className="post-info clearfix">
                      <li>
                        <i className="far fa-folder-open"></i>Human Resource
                      </li>
                      <li>
                        <i className="far fa-comments"></i>
                        <Link to="/blog-details">02 Comments</Link>
                      </li>
                    </ul>
                    <h2>Get few solutions to hire a best candidate</h2>
                    <div className="text">
                      <p>
                        There are not many of passages of lorem ipsum available alteration in some form. Donec scelerisque dolor id nunc dictum, interdum gravida. 
                        {/* Remaining long text here */}
                      </p>
                    </div>
                    <div className="post-share-option clearfix">
                      <ul className="post-tags pull-left clearfix">
                        <li>
                          <h4>Tags</h4>
                        </li>
                        <li><Link to="/blog-details">Recruitment</Link></li>
                        <li><Link to="/blog-details">Stuffing</Link></li>
                      </ul>
                      <ul className="social-links pull-right clearfix">
                        <li><Link to="/blog-details"><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to="/blog-details"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="/blog-details"><i className="fab fa-pinterest-p"></i></Link></li>
                        <li><Link to="/blog-details"><i className="fab fa-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Author Box */}
              <div className="author-box">
                <figure className="author-thumb">
                  <img src="assets/images/news/author-1.jpg" alt="" />
                </figure>
                <div className="inner">
                  <h4>Christive Eve</h4>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                </div>
              </div>
              {/* Comments Section */}
              <div className="comment-box">
                <div className="group-title">
                  <h3>2 Comments</h3>
                </div>
                <div className="comment">
                  <figure className="thumb-box">
                    <img src="assets/images/news/comment-1.png" alt="" />
                  </figure>
                  <div className="comment-inner">
                    <div className="comment-info clearfix">
                      <h4>Kevin Martin</h4>
                      <span className="post-date">
                        <i className="far fa-clock"></i>22 Aug 2020
                      </span>
                    </div>
                    <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                    <Link to="/blog-details" className="reply-btn">Reply</Link>
                  </div>
                </div>
                <div className="comment">
                  <figure className="thumb-box">
                    <img src="assets/images/news/comment-2.png" alt="" />
                  </figure>
                  <div className="comment-inner">
                    <div className="comment-info clearfix">
                      <h4>Jessica Brown</h4>
                      <span className="post-date">
                        <i className="far fa-clock"></i>21 Aug 2020
                      </span>
                    </div>
                    <p>Lorem ipsum is simply free text used by copytyping refreshing.</p>
                    <Link to="/blog-details" className="reply-btn">Reply</Link>
                  </div>
                </div>
              </div>
              {/* Comment Form */}
              <div className="comments-form-area">
                <div className="group-title">
                  <h3>Leave a Comment</h3>
                </div>
                <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="username" placeholder="Full Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                      <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Write Message"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button className="theme-btn-one" type="submit" name="submit-form">
                        Submit Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-search">
                <form action="blog-details" method="post" className="search-form">
                  <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search" required />
                    <button type="submit"><i className="flaticon-magnifying-glass"></i></button>
                  </div>
                </form>
              </div>
              {/* Recent Posts */}
              <div className="sidebar-widget sidebar-post">
                <div className="widget-title">
                  <h4>Recent Posts</h4>
                </div>
                <div className="post-inner">
                  <div className="post">
                    <figure className="post-thumb">
                      <Link to="/blog-details">
                        <img src="assets/images/news/post-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <span className="post-date">20 Aug, 2020</span>
                    <h6>
                      <Link to="blog-details">Hire easily HR candidate in few seconds</Link>
                    </h6>
                  </div>
                  <div className="post">
                    <figure className="post-thumb">
                      <Link to="/blog-details">
                        <img src="assets/images/news/post-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <span className="post-date">19 Aug, 2020</span>
                    <h6>
                      <Link to="/blog-details">Get few solutions to hire a best candidate</Link>
                    </h6>
                  </div>
                  <div className="post">
                    <figure className="post-thumb">
                      <Link to="/blog-details">
                        <img src="assets/images/news/post-3.jpg" alt="" />
                      </Link>
                    </figure>
                    <span className="post-date">18 Aug, 2020</span>
                    <h6>
                      <Link to="/blog-details">We’re building a new business world</Link>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Categories */}
              <div className="sidebar-widget category-widget">
                <div className="widget-title">
                  <h4>Categories</h4>
                </div>
                <div className="widget-content">
                  <ul className="category-list clearfix">
                    <li><Link to="/blog-details">Recruitment</Link></li>
                    <li><Link to="/blog-details">Stuffing Solutions</Link></li>
                    <li><Link to="/blog-details">Improving Resources</Link></li>
                    <li><Link to="/blog-details">Hiring Staff</Link></li>
                    <li><Link to="/blog-details">Business Marketing</Link></li>
                  </ul>
                </div>
              </div>
              {/* Popular Tags */}
              <div className="sidebar-widget tags-widget">
                <div className="widget-title">
                  <h4>Popular Tags</h4>
                </div>
                <div className="widget-content">
                  <ul className="tags-list clearfix">
                    <li><Link to="/blog-details">Consultation</Link></li>
                    <li><Link to="/blog-details">Human Resource</Link></li>
                    <li><Link to="/blog-details">Solutions</Link></li>
                    <li><Link to="/blog-details">Staffing</Link></li>
                    <li><Link to="/blog-details">Staffing</Link></li>
                  </ul>
                </div>
              </div>
              {/* Ad Widget */}
              <div className="sidebar-widget ads-widget">
                <div className="widget-content">
                  <div className="ads-image">
                    <Link to="/blog-details">
                      <img src="assets/images/resource/ads.jpg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Instagram Feeds */}
              <div className="sidebar-widget instagram-widget">
                <div className="widget-title">
                  <h4>Instagram Feeds</h4>
                </div>
                <div className="inner-box">
                  <div className="wrapper-box">
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-1.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-2.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-3.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-4.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-5.jpg" alt="" />
                    </figure>
                    <figure className="image">
                      <img src="assets/images/gallery/gallery-6.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="sidebar-widget sidebar-social-links">
                <div className="widget-title">
                  <h4>Follow Us</h4>
                </div>
                <div className="widget-content">
                  <ul className="social-links clearfix">
                    <li><Link to="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="/blog-details"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="/blog-details"><i className="fab fa-pinterest-p"></i></Link></li>
                    <li><Link to="/blog-details"><i className="fab fa-linkedin-in"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarPageContainer;
