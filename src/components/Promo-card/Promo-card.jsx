import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Promo-card.scss";

import NasiGoreng from "../../assets/images/Screenshot 2024-02-09 at 3.57.45 PM.png";
import AssortedSushi from "../../assets/images/Screenshot 2024-02-09 at 5.02.17 PM.png";
import FettuciniAlfredo from "../../assets/images/Screenshot 2024-02-09 at 5.06.59 PM.png";

const discounts = [
  {
    meal: "Assorted Sushi",
    todayDiscount: "15%",
    price: "$25",
    newPrice: "$21.25",
    img: AssortedSushi,
  },
  {
    meal: "Nasi Goreng",
    todayDiscount: "10%",
    price: "$20",
    newPrice: "$18",
    img: NasiGoreng,
  },
  {
    meal: "Fetuccini Alfredo",
    todayDiscount: "20%",
    price: "$20",
    newPrice: "$16",
    img: FettuciniAlfredo,
  },
];
const PromoCard = () => {
  const [centeredItemIndex, setCenteredItemIndex] = useState(1.5); 

  useEffect(() => {
    const container = document.querySelector(".container ul");
    const itemWidth = container.scrollWidth / discounts.length;
    const scrollPosition = centeredItemIndex * itemWidth - container.clientWidth / 2;

    container.scrollLeft = scrollPosition;
  }, [centeredItemIndex]);
  return (
    <div className="container">
      <ul>
        {discounts.map((discount, index) => (
          <li key={index}>
            <Link to="/details">
              <div className="promo">
                <img
                  src={discount.img}
                  className="promo-img"
                  alt={discount.meal}
                />
                <div className="promo-info">
                  <p className="meal">{discount.meal}</p>
                  <p className="discount">
                    Today's Discount {discount.todayDiscount}
                  </p>
                  <div className="prices">
                    <p className="prices-old">{discount.price}</p>
                    <p className="prices-new">{discount.newPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoCard;
