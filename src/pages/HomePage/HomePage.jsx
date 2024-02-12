import React from "react";
import SearchBar from "../../components/Search-bar/Search-bar";
import PromoCard from "../../components/Promo-card/Promo-card";
import WeekTop from "../../components/WeekTop-card/WeekTop-card";
import "./HomePage.scss";
import JohnDavid from "../../assets/images/JohnDavid.png";

import { BsFilterLeft } from "react-icons/bs";

const HomePage = () => {

  const userClick = () => {
    window.location.href = "/location";
  }

  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top_left">
          <div className="user">
            <img src={JohnDavid} onClick={userClick}/>
          </div>
          <div className="greeting">Hey, David</div>
        </div>
        <div className="home-top_rigth">
          <SearchBar className="searchbar" />
          <BsFilterLeft className="filter" />
        </div>
      </div>
      <div className="promotion">
        <div className="info-date">
          <div className="info">
            <p className="disc">10% OFF Over $30.00 </p>
            <p>ordering from eliggible restaurants</p>
          </div>
          <p className="dates">10/02/2024 - 20/02/2024</p>
        </div>
        <div className="validation">Still Valid</div>
      </div>
      <div className="recommendation">
        <div className="recommendation-title">
          <h2>Recommended</h2>
          <p>View All</p>
        </div>
        <PromoCard />
      </div>
      <div className="recommendation">
        <h2>This week Top!</h2>
        <WeekTop />
      </div>
    </div>
  );
};

export default HomePage;
