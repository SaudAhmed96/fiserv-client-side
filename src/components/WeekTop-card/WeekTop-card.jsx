import React from "react";
import { useState } from "react";
import "./WeekTop-card.scss";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

import LambBiryani from '../../assets/images/Screenshot 2024-02-09 at 4.05.42 PM.png';
import AssortedSushi from '../../assets/images/Screenshot 2024-02-09 at 5.02.17 PM.png';
import FettuciniAlfredo from '../../assets/images/Screenshot 2024-02-09 at 5.06.59 PM.png';

const weekDeal = [
  {
    meal: "Lamb Biryani",
    restaurant: "Iranian's Bistro Restaurant",
    img: LambBiryani
  },
  {
    meal: "Assorted Sushi",
    restaurant: "Sushi AOI",
    img: AssortedSushi
  },
  {
    meal: "Fetuccini Alfredo",
    restaurant: "Pasta Bar",
    img: FettuciniAlfredo
  },
];
const WeekTop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % weekDeal.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? weekDeal.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="container">
      <div className="deal">
        <img src={weekDeal[currentSlide].img} className="deal-img" />
        <div className="deal-info">
          <p className="meal">{weekDeal[currentSlide].meal}</p>
          <p className="restaurant">{weekDeal[currentSlide].restaurant}</p>
        </div>
        <div className="button">
        <button onClick={prevSlide} className="button-prev">
          <FcPrevious/>
        </button>
        <button onClick={nextSlide} className="button-next">
          <FcNext/>
        </button>
        </div>
      </div>
    </div>
  );
};
export default WeekTop;
