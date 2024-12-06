import React from "react";
import firstyear from './images/Banner/firstyear.gif';
import secondyear from './images/Banner/secondyear.png';
import thirdyear1 from './images/Banner/thirdyear1.png';
import fourthyear1 from './images/Banner/fourthyear1.png';
import { Link } from "react-router-dom";

const Carousel = ({ mode }) => {
  const carouselData = [
    {
      src: firstyear,
      link: 'https://youtu.be/4N2c8LMz8XI',
      alt: 'First Year Guidance',
      interval: 1800
    },
    {
      src: secondyear,
      link: 'https://youtu.be/C2QoDC1rka8',
      alt: 'Second Year Guidance',
      interval: 2000
    },
    {
      src: thirdyear1,
      link: 'https://youtu.be/ffuK6vt8tdY',
      alt: 'Third Year Guidance',
      interval: 1800
    },
    {
      src: fourthyear1,
      link: 'https://youtu.be/VY6003vijLw',
      alt: 'Fourth Year Guidance',
      interval: 2000
    }
  ];

  return (
    <div id="carouselExampleInterval" className="container carousel slide my-5 pt-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {carouselData.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval={item.interval}>
            <Link to={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.src}
                className="d-block w-100"
                alt={item.alt}
                style={{
                  filter: mode === 'dark' ? 'brightness(.7) contrast(1.2)' : 'brightness(1) contrast(1)',
                  borderRadius: '10px'
                }}
              />
            </Link>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
