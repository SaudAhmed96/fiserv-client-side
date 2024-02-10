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
        </div>
    )
}

export default HomePage