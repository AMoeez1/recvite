// React Component
import React from 'react';
import './CapSecOne.css';

const CapSecOne = () => {
  const tours = [
    {
      destination: 'Maldives',
      title: 'Sunny Ari Atoll',
      price: '$2850.00',
      img: 'https://via.placeholder.com/200x350',
    },
    {
      destination: 'England',
      title: 'Majestic Big Ben',
      price: '$765.00',
      img: 'https://via.placeholder.com/200x350',
    },
    {
      destination: 'Italy',
      title: 'Discover Venice',
      price: '$1560.00',
      img: 'https://via.placeholder.com/200x350',
    },
    {
      destination: 'Turkey',
      title: 'Historical Istanbul',
      price: '$1295.00',
      img: 'https://via.placeholder.com/200x350',
    },
  ];

  return (
    <section className="popular-tours">
      <div className="cap-header">
        <p>Our</p>
        <h2>Capabilities</h2>
        <button className="view-all">View All Capabilities</button>
      </div>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <div className={`tour-card tour-card-${index}`} key={index}
           style={{ backgroundImage: `url(${tour.img})` }}>
            {/* <img src={tour.img} alt={tour.title} /> */}
            <div className="tour-info">
              <h2>{tour.destination}</h2>
              <p className="tour-para">{tour.title}</p>
              <span>{tour.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapSecOne;
