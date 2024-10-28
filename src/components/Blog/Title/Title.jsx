import React from "react";
import { Link } from "react-router-dom";
const PageTitle = ({ text, title, desc }) => {
  return (
    // Page Title
    <section
      className="page-title centred"
      style={{
        backgroundImage: "url(assets/images/background/page-title.jpg)",
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title">
            <h1>{title}</h1>
          </div>
          { text &&
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{text}</li>
            </ul>
          }

          {
            desc && <p className="bread-crumb clearfix" style={{color:'#fff', maxWidth:'70vw',justifySelf:'center'}}>{desc}</p>
          }
        </div>
      </div>
    </section>
    // End Page Title
  );
};

export default PageTitle;
