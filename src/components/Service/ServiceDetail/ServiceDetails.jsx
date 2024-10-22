import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    return (
        <section className="service-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="service-sidebar">
                            <div className="category-widget">
                                <ul className="category-list clearfix">
                                    <li><Link to="/hr-consulting"><i className="fas fa-angle-right"></i>HR Consulting</Link></li>
                                    <li><Link to="/technology-resource"><i className="fas fa-angle-right"></i>Technology Resource</Link></li>
                                    <li><Link to="/staffing-solutions" className="current"><i className="fas fa-angle-right"></i>Staffing Solutions</Link></li>
                                    <li><Link to="/corporate-program"><i className="fas fa-angle-right"></i>Corporate Program</Link></li>
                                    <li><Link to="/leadership-training"><i className="fas fa-angle-right"></i>Leadership Training</Link></li>
                                    <li><Link to="/staff-management"><i className="fas fa-angle-right"></i>Staff Management</Link></li>
                                </ul>
                            </div>
                            <div className="support-box">
                                <figure className="image-box"><img src="assets/images/resource/support-1.jpg" alt=""></img></figure>
                                <div className="content-box">
                                    <div className="icon-box"><i className="flaticon-phone"></i></div>
                                    <p>Get Professional Help</p>
                                    <h3><Link to="tel:928886660000">+ 92 888 666 0000</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="service-details-content">
                            <figure className="image-box"> 
                                <img src="assets/images/service/service-10.jpg" alt=""></img>
                                <span className="category">Resources</span>
                                <i className="flaticon-controller"></i>
                            </figure>
                            <div className="text">
                                <h2>Staffing Solutions</h2>
                                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                <h4>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</h4>
                            </div>
                            <div className="content_block_1">
                                <div className="content-box">
                                    <div className="inner-box clearfix">
                                        <div className="single-item">
                                            <h5><span>01</span>Strategic Partners</h5>
                                            <p>Lorem ipsum dolor sited is amet consectetur simply free text notted.</p>
                                        </div>
                                        <div className="single-item">
                                            <h5><span>02</span>Sourcing the Best</h5>
                                            <p>Lorem ipsum dolor sited is amet consectetur simply free text notted.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="two-column">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                        <div className="text">
                                            <h3>Why Choose Us?</h3>
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                            <ul className="list-item clearfix">
                                                <li>Refresing to get such a touch.</li>
                                                <li>Duis aute irure dolor in in voluptate.</li>
                                                <li>Velit esse cillum eu fugiat pariatur.</li>
                                                <li>Duis aute irure dolor in in voluptate.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image"><img src="assets/images/service/service-8.jpg" alt=""></img></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordian-inner">
                                <ul className="accordion-box">
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><i className="fas fa-plus"></i></div>
                                            <h5>What are the human resources roles?</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>There are many variations of passages of available but the majority have in that some form by injected randomised words which don't look even as slightly believable now.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <div className="icon-outer"><i className="fas fa-plus"></i></div>
                                            <h5>How to start with recvite agency?</h5>
                                        </div>
                                        <div className="acc-content current">
                                            <div className="text">
                                                <p>There are many variations of passages of available but the majority have in that some form by injected randomised words which don't look even as slightly believable now.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                         <div className="acc-btn">
                                            <div className="icon-outer"><i className="fas fa-plus"></i></div>
                                            <h5>Check benefits of choosing our services?</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>There are many variations of passages of available but the majority have in that some form by injected randomised words which don't look even as slightly believable now.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                         <div className="acc-btn">
                                            <div className="icon-outer"><i className="fas fa-plus"></i></div>
                                            <h5>How to contact with our expert staff?</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>There are many variations of passages of available but the majority have in that some form by injected randomised words which don't look even as slightly believable now.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
