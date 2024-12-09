import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "./Banner.css";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const cities = ["Florida", "Lahore", "London", "Los Angeles", "Rawalpindi"];

const BannerSection = () => {
  
  const [city, setCity] = useState(""); // State to store the selected city
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility

  useEffect(() => {}, [city]);

  console.log("SHOW DROPDOWN: ", showDropdown);

  const handleCityInputClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // const handleCitySelection = (selectedCity) => {
  //   console.log("selected city 1: ", selectedCity);
  // setCity(selectedCity);
  // setShowDropdown(false);
  // console.log("selected city 2: ", selectedCity);
  // };

  const handleCitySelection = (selectedCity) => {
    // Force a state update with a callback to ensure immediate rendering
    setCity((prevCity) => {
      console.log("Updating city from", prevCity, "to", selectedCity);
      return selectedCity;
    });
    setShowDropdown(false);
  };
  
  // Add this useEffect to see the updated value
  useEffect(() => {
    console.log("selected city 3: ", city);
  }, [city]);


  const owlOptions = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };

  return (
    <section className="banner-section">
      <OwlCarousel className="banner-carousel owl-theme" {...owlOptions}>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/banner-1.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>
                There are many of passages of lorem Ipsum, but the majori have
                suffered alteration in some form.
              </p>
              <div className="search-bar">
                <div className="input-container">
                  <label className="input-label">What</label>
                  <input
                    type="text"
                    placeholder="Job title, keywords..."
                    className="search-input"
                  />
                  <span className="icon">
                    <CiSearch />
                  </span>
                </div>
                <div className="input-container city-dropdown">
                  <label className="input-label">Where</label>
                  <input
                    type="text"
                    placeholder="City or postcode"
                    className="search-input"
                    value={city}
                    onClick={handleCityInputClick}
                    readOnly
                  />
                  <span className="icon">
                    <IoLocationOutline />
                  </span>
                  {showDropdown && (
                    <ul className="cities-dropdown-menu">
                      {cities.map((cityOption, index) => (
                        <li
                          key={index}
                          onClick={() => handleCitySelection(cityOption)}
                          className="city-drop-item"
                        >
                          {cityOption}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="find-jobs-button">Find Jobs</button>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="image-layer"
            style={{
              backgroundImage: "url(assets/images/banner/banner-2.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>The Right Candidate for your Business</h1>
              <p>
                There are many of passages of lorem Ipsum, but the majori have
                suffered alteration in some form.
              </p>
              <div className="search-bar">
                <div className="input-container">
                  <label className="input-label">What</label>
                  <input
                    type="text"
                    placeholder="Job title, keywords..."
                    className="search-input"
                  />
                  <span className="icon">
                    <CiSearch />
                  </span>
                </div>
                <div className="input-container city-dropdown">
                  <label className="input-label">Where</label>
                  <input
                    type="text"
                    placeholder="City or postcode"
                    className="search-input"
                    value={city}
                    onClick={handleCityInputClick}
                    readOnly
                  />
                  <span className="icon">
                    <IoLocationOutline />
                  </span>
                  {showDropdown && (
                    <ul className="cities-dropdown-menu">
                      {cities.map((cityOption, index) => (
                        <li
                          key={index}
                          onClick={() => handleCitySelection(cityOption)}
                          className="city-drop-item"
                        >
                          {cityOption}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="find-jobs-button">Find Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;
