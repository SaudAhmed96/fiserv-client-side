import React from 'react';
import avatar from '../../assets/images/avatar.png'
import { Link } from 'react-router-dom';
import './CheckoutPage.scss';
import Searchbar from '../../components/Search-bar/Search-bar';

import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import SearchBar from '../../components/Search-bar/Search-bar';
import CheckoutCart from '../../components/CheckoutCart/CheckoutCart';

function CheckoutPage() {

    return (
        <div className='checkout-page'>
            <div className='checkout-page__header'>
                <div className='checkout-page__left'>
                    <Link to={'/details'}>
                        <IoIosArrowRoundBack className='payment-screen__back' />
                    </Link>
                    <div className='checkout-page__info'>
                        <img className='checkout-page__avatar' src={avatar} />
                        <p className='checkout-page__name'>David</p>
                    </div>
                </div>
                <div className='checkout-page__right'>
                    <SearchBar className='checkout-page__search' />
                    <BsFilterLeft className='checkout-page__filter' />
                </div>
            </div>
            <CheckoutCart />
        </div>
    )
}

export default CheckoutPage