import React from "react";
import { Link } from "react-router-dom";
import "./WeekTop-card.scss";

import LambBiryani from "../../assets/images/Screenshot 2024-02-09 at 4.05.42 PM.png";
import AssortedSushi from "../../assets/images/Screenshot 2024-02-09 at 5.02.17 PM.png";
import FettuciniAlfredo from "../../assets/images/Screenshot 2024-02-09 at 5.06.59 PM.png";

const weekDeal = [
  {
    meal: "Lamb Biryani",
    restaurant: "Karahi Boys",
    img: LambBiryani,
  },
  {
    meal: "Assorted Sushi",
    restaurant: "To-Ne Sushi",
    img: AssortedSushi,
  },
  {
    meal: "Fetuccini Alfredo",
    restaurant: "Scaramouche",
    img: FettuciniAlfredo,
  },
];
const WeekTop = () => {
  return (
    <div className="contain">
      <ul>
        {weekDeal.map((deals, index) => (
          <li key={index}>
            <Link to="/details">
              <div className="deal">
                <img src={deals.img} className="deal-img" />
                <div className="deal-info">
                  <p className="meal">{deals.meal}</p>
                  <p className="restaurant">{deals.restaurant}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WeekTop;
