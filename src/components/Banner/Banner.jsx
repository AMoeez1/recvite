import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
const BannerSection = () => {
  const [city, setCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://test.hi5-consulting.com/api/all-jobs"
        );
        const data = await response.json();

        const uniqueLocations = [
          ...new Set(data.data.map((job) => job.job_location)),
        ];
        setLocations(uniqueLocations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleCityInputClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    navigate("/jobs", { state: { city, search } });
  };

  const owlOptions = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };

  return (
    <section className="banner-section">
      <OwlCarousel
        key={city}
        className="banner-carousel owl-theme"
        {...owlOptions}
      >
        {[1, 2].map((slideIndex) => (
          <div key={slideIndex} className="slide-item">
            {/* <div className="image-layer" style={{ backgroundImage: `url(assets/images/banner/banner-${slideIndex}.jpg)` }}></div> */}
            <div
              className="image-layer"
              style={{backgroundImage: 'url("/assets/images/web images/Home/Banner/Banner.jpg")'}}
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
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
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
                    />
                    <span className="icon">
                      <IoLocationOutline />
                    </span>
                    {showDropdown && (
                      <ul className="cities-dropdown-menu">
                        {locations.map((cityOption, index) => (
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
                  <button className="find-jobs-button" onClick={handleSearch}>
                    Find Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default BannerSection;