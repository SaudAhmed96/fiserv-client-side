import React, { useState } from 'react'
import "./DetailsPage.scss"

import SearchBar from '../../components/Search-bar/Search-bar'
import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import nasiGoreng from '../../assets/images/nasiGoreng.png'
import { BsFilterLeft } from "react-icons/bs";
import avatar from '../../assets/images/avatar.png'

import { GoNoEntry } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount } from '../../reducers/cartSlice';

const DetailsPage = () => {

    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const cart = useSelector(state => state.cartTracker)
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('hello', cart.count)
        dispatch(increaseCount())
        navigate('/')
    }

    return (
        <div className='details'>

            <div className='details__top'>
                <div className='details__top-left'>
                    <NavLink className='details__top-back' onClick={() => { history.back() }}>
                        <IoIosArrowRoundBack className='details__back' />
                    </NavLink>
                </div>
                <div className='details__top-right'>
                    <SearchBar />
                    <BsFilterLeft className='details__top-filter' />
                </div>
            </div>

            <div className='details__bottom'>
                <div className='details__wrap-img'>
                    <img className='details__image' src={nasiGoreng} />
                </div>
                <div className='details__wrapper'>
                    <div className='details__card'>
                        <h3 className='card__food'>Nasi Goreng</h3>
                        <p className='card__price'>$20</p>
                        <p className='card__discount'>Today's Discount 10%</p>

                        <form className='card__form' onSubmit={submitHandler}>
                            <div className='form__section'>
                                <p className='form__section-header'>Option</p>
                                <div className='form__option'>
                                    <label className='form__label'>Chicken Thigh</label>
                                    <input
                                        className='form__radio'
                                        type='radio'
                                        name='chicken'
                                        defaultChecked='checked'
                                    />
                                </div>
                                <div className='form__option'>
                                    <label className='form__label'>Chicken Breast</label>
                                    <input className='form__radio' type='radio' name='chicken' />
                                </div>
                            </div>

                            <div className='form__section'>
                                <p className='form__section-header'>Option</p>
                                <div className='form__option'>
                                    <label className='form__label'>Peanuts</label>
                                    <input className='form__check' type='checkbox' />
                                </div>
                                <div className='form__option'>
                                    <label className='form__label'>Cucumbers</label>
                                    <input className='form__check' type='checkbox' />
                                </div>
                                <div className='form__option'>
                                    <label className='form__label'>Tomatoes</label>
                                    <input className='form__check' type='checkbox' />
                                </div>
                            </div>

                            <div className='form__bottom'>
                                <div className='form__bottom-qty'>
                                    <div className='form__quantity'>
                                        <GoNoEntry
                                            className='form__icon'
                                            onClick={() => {
                                                if (quantity > 0) {
                                                    setQuantity(quantity - 1)
                                                }
                                            }}
                                        />
                                        <p className='form__quantity-number'>{quantity}</p>
                                        <GoPlusCircle
                                            className='form__icon'
                                            onClick={() => { setQuantity(quantity + 1) }}
                                        />
                                    </div>
                                    <div className='form__cost'>
                                        <p className='form__quantity-number'>${quantity * 20}</p>
                                    </div>
                                </div>
                                <div className='form__bottom-discount'>
                                    <p className='form__discount-text'>After Discount</p>
                                    <p className='form__discount-number'>${quantity * 20 * 0.9}</p>
                                </div>

                                <button
                                    className='form__submit'
                                    type='submit'
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;