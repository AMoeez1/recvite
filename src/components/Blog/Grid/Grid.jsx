import React from 'react';
import { Link } from 'react-router-dom';
const BlogGrid = () => {
    const blogPosts = [
        {
            id: 1,
            imgSrc: 'assets/images/news/news-1.jpg',
            date: { day: '31', month: 'AUG' },
            category: 'Human Resource',
            comments: '02 Comments',
            title: 'Get few solutions to hire a best candidate',
            authorImg: 'assets/images/news/admin-1.png',
            author: 'Christine Eve',
            link: '/blog-details',
        },
        {
            id: 2,
            imgSrc: 'assets/images/news/news-2.jpg',
            date: { day: '30', month: 'AUG' },
            category: 'Human Resource',
            comments: '05 Comments',
            title: 'We’re building a new business world',
            authorImg: 'assets/images/news/admin-2.png',
            author: 'John Mike',
            link: '/blog-details',
        },
        // ... add other posts here
    ];

    return (
        <section className="blog-grid">
            <div className="auto-container">
                <div className="row clearfix">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link to={post.link}><img src={post.imgSrc} alt={post.title} /></Link>
                                        <div className="post-date">
                                            <h4>{post.date.day}</h4>
                                            <p>{post.date.month}</p>
                                        </div>
                                    </figure>
                                    <div className="lower-content">
                                        <ul className="post-info clearfix">
                                            <li><i className="far fa-folder-open"></i>{post.category}</li>
                                            <li><i className="far fa-comments"></i><Link to={post.link}>{post.comments}</Link></li>
                                        </ul>
                                        <h3><Link to={post.link}>{post.title}</Link></h3>
                                        <div className="admin">
                                            <figure className="admin-thumb"><img src={post.authorImg} alt={post.author} /></figure>
                                            <p>by {post.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination-wrapper centred">
                    <ul className="pagination clearfix">
                        <li><Link to="/blog"><i className="flaticon-left-arrow"></i></Link></li>
                        <li><Link to="/blog" className="current">01</Link></li>
                        <li><Link to="/blog">02</Link></li>
                        <li><Link to="/blog">03</Link></li>
                        <li><Link to="/blog"><i className="flaticon-right-arrow"></i></Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
