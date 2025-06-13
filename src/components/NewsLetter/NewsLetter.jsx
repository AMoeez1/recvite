// App.js
import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <>
      <div
        className="newsletter-section p-5"
        style={{
          background:
            "linear-gradient(to right, rgb(233 221 241), rgb(197 196 255))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="newsletter-content">
          <h2>Subscribe to newsletter</h2>
          <p>Subscribe to newsletter to get the latest notifications</p>
        </div>
        <form className="newsletter-form">
          <div className="pl-4 pr-2 py-2" style={{background: '#fff',borderRadius: '10px'}}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div
        className="newsletter-section p-5"
        style={{
          background:
            "linear-gradient(135deg, #333333, #1a1a1a, #4d4d4d, #333333)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h2 className="smoky-text">Get New Job Notification</h2>
          <p className="duller-smoky-text">
            Subscribe & get all related job notifications
          </p>
        </div>
        <form className="newsletter-form">
          <input
          className="px-1"
            style={{ background: "none", color: "#f2f2f2", border: '1px solid #f2f2f2' }}
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            required
          />
          <button type="submit" style={{ background: "#a550ff" }} className="">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
