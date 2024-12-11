import React, { useState } from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Woo Commerce",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "📈",
    },
    {
      title: "CRM Solutions",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "⚙️",
    },
    {
      title: "Web Design",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "🖌️",
    },
    {
      title: "Data Guard Sentinel",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "📊",
    },
    {
      title: "SEO Optimization",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "🔍",
    },
    {
      title: "Cloud Hosting",
      description:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
      icon: "☁️",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="services-section">
      <p className="section-title-serv"> ← Our Services →</p>
      <div className="heading-arrows">
        <h2 className="section-subtitle">
          Elevating Businesses With IT Ingenuity
        </h2>

        <div className="arrows-back-fwd">
          <button className="arrow left-arrow" onClick={handlePrev}>
            ←
          </button>
          <button className="arrow right-arrow" onClick={handleNext}>
            →
          </button>
        </div>
      </div>

      <div className="services-container">
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${index === currentIndex ? "active" : "active"}`}
              style={{
                transform: `translateX(${-100 * currentIndex}%)`,
              }}
            >

            <div className="heading-servces-sec2">
            <h4>{card.title}</h4>
            <div className="icon-services">{card.icon}</div>
            
            </div>
             
              <p>{card.description}</p>
              <button className="read-more">Read more →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
