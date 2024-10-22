import React from 'react';

const ContactInfoSection = () => {
    return (
        <section className="contact-info-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div className="single-info-box">
                            <div className="inner-box">
                                <div className="icon-box"><i className="flaticon-email"></i></div>
                                <p>
                                    <a href="mailto:needhelp@example.com">needhelp@example.com</a><br />
                                    <a href="mailto:info@company.com">info@company.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div className="single-info-box">
                            <div className="inner-box">
                                <div className="icon-box"><i className="flaticon-telephone"></i></div>
                                <p>
                                    <a href="tel:6668880000">666 888 0000</a><br />
                                    <a href="tel:926668888000">+ 92 666 8888 000</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div className="single-info-box">
                            <div className="inner-box">
                                <div className="icon-box"><i className="flaticon-pin"></i></div>
                                <p>Suite 20 Golden Street Line <br />New York, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
