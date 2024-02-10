<<<<<<< HEAD
import React from 'react';
import SearchBar from '../../components/Search-bar/Search-bar';
import PromoCard from '../../components/Promo-card/Promo-card';
import WeekTop from '../../components/WeekTop-card/WeekTop-card';

const HomePage = () => {
    return (
        <div>
            Home Page
           <SearchBar/>
           <PromoCard/>
           <WeekTop/>
=======
import React from "react";
import './HomePage.scss';
import SearchBar from "../../components/Search-bar/Search-bar";

import { PiUserLight } from "react-icons/pi";
import { BsFilterLeft } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="home">
        <div className="home_top">
        <div className="left">
        <div className="left-user">
          <PiUserLight />
>>>>>>> 0bde839 (On branch feature-FSV-21)
        </div>
        <div className="left-greeting">
          <p>Hey, User</p>
        </div>
      </div>
      <div className="right">
        <SearchBar className="right-searchbar"/>
        <BsFilterLeft className="right-filter"/>
      </div>
        </div>
        <div className="home_recommendation">
            <h2>Recommended</h2>
            <p>View all</p>
        </div>
    </div>
  );
};

export default HomePage;
