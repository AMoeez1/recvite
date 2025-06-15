import React from "react";
import { Link } from "react-router-dom";
import './title.css'
const PageTitle = ({ text, title, desc, detail, image }) => {
  return (
    // Page Title
    <section
      className="page-title centred"
      style={{
        background: image,
        minHeight: '100vh',
      }}
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title-service">
            <h1 className="title-service" >{title}</h1>
          </div>
          {text && (
            <ul className="bread-crumb clearfix">
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>{text}</li>
            </ul>
          )}

          {desc && (
            <p
              className="bread-crumb clearfix"
              style={{ color: "#fff", maxWidth: "70vw", justifySelf: "center" }}
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    </section>
    // End Page Title
  );
};

export default PageTitle;
