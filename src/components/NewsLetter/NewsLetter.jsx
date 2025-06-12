// App.js
import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div
      className="newsletter-section p-5"
      // style={{ backgroundImage: 'url(https://via.placeholder.com/1500x500)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      style={{
background: 'linear-gradient(to right, #F1DDEE, #F497FE)',

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="newsletter-content">
        <h2>Subscribe to newsletter</h2>
        <p>Subscribe to newsletter to get the latest notifications</p>
      </div>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          required
        />
        <button type="submit" className="">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
