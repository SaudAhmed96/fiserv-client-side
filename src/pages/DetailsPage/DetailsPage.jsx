import React from 'react'
import "./DetailsPage.scss"

import SearchBar from '../../components/Search-bar/Search-bar'
import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const DetailsPage = () => {
    return (
        <div className='details'>
            <h1>Details Page</h1>
            <div className='details__top'>
                <NavLink className='details__top-left' to={'/'}>
                    <IoIosArrowRoundBack className='details__back' />
                </NavLink>
                <div className='details__top-right'>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;