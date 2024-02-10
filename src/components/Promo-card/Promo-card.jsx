import React from "react";
import { useState } from "react";
import "./Promo-card.scss";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

import NasiGoreng from '../../assets/images/Screenshot 2024-02-09 at 3.57.45 PM.png';
import AssortedSushi from '../../assets/images/Screenshot 2024-02-09 at 5.02.17 PM.png';
import FettuciniAlfredo from '../../assets/images/Screenshot 2024-02-09 at 5.06.59 PM.png';

const discounts = [
  {
    meal: "Nasi Goreng",
    todayDiscount: "10%",
    price: "$20",
    newPrice: "$18",
    img: NasiGoreng
  },
  {
    meal: "Assorted Sushi",
    todayDiscount: "15%",
    price: "$25",
    newPrice: "$21.25",
    img: AssortedSushi
  },
  {
    meal: "Fetuccini Alfredo",
    todayDiscount: "20%",
    price: "$20",
    newPrice: "$16",
    img: FettuciniAlfredo
  },
];
const PromoCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % discounts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? discounts.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="container">
      <div className="promo">
        <img src={discounts[currentSlide].img} className="promo-img" />
        <div className="promo-info">
          <p className="meal">{discounts[currentSlide].meal}</p>
          <p className="discount">Today's Discount {discounts[currentSlide].todayDiscount}</p>
          <div className="prices">
            <p className="prices-old">{discounts[currentSlide].price}</p>
            <p className="prices-new">{discounts[currentSlide].newPrice}</p>
          </div>
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
export default PromoCard;
