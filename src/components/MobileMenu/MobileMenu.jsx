import React from 'react';
import { Link } from 'react-router-dom';
const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><i className="fas fa-times"></i></div>
            <nav className="menu-box">
                <div className="nav-logo">
                    <Link to="/">
                        <img src="assets/images/logo-2.png" alt="Logo" title="Logo" />
                    </Link>
                </div>
                <div className="menu-outer">
                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                </div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><Link to="tel:+8801682648101">+88 01682648101</Link></li>
                        <li><Link to="mailto:info@example.com">info@example.com</Link></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><Link to="/"><span className="fab fa-twitter"></span></Link></li>
                        <li><Link to="/"><span className="fab fa-facebook-square"></span></Link></li>
                        <li><Link to="/"><span className="fab fa-pinterest-p"></span></Link></li>
                        <li><Link to="/"><span className="fab fa-instagram"></span></Link></li>
                        <li><Link to="/"><span className="fab fa-youtube"></span></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;