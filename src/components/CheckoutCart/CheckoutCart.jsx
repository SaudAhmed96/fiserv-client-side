import React from 'react';
import food_one from '../../assets/images/nasi_img.png'
import arrow_right from '../../assets/images/arrow_right.png'
import './CheckoutCart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GoNoEntry } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import { LiaTagSolid } from "react-icons/lia";
import { RiArrowUpSLine } from "react-icons/ri";


function CheckoutCart() {
    const [quantity, setQuantity] = useState(1);

    const couponPageClick = () => {
        window.location.href = "/coupons"
    }

    return (
        <div className='checkout-page'>
            <div className='checkout-page__destination'>
                <p className='checkout-page__address'>Deliver to 2222-3698 Citation Dr</p>
                <p className='checkout-page__edit'>Edit</p>
            </div>
            <div className='checkout-page__body'>
                <div className='checkout-page__item'>
                    <div className='checkout-page__cart-left'>
                        <div className='input-img'>
                            <input type='radio'/>
                            <img className='checkout-page__food' src={food_one} />
                        </div>
                        <div className='checkout-page__qty'>
                            <div className='checkout-page__quantity'>
                                <GoNoEntry
                                    className='checkout-page__icon'
                                    onClick={() => {
                                        if (quantity > 0) {
                                            setQuantity(quantity - 1)
                                        }
                                    }}
                                />
                                <p className='checkout-page__number'>{quantity}</p>
                                <GoPlusCircle
                                    className='checkout-page__icon'
                                    onClick={() => { setQuantity(quantity + 1) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='checkout-page__cart-right'>
                        <p className='checkout-page__dish'>Nasi Goreng</p>
                        <p className='checkout-page__price'>${quantity * 20 * 0.9}</p>
                    </div>
                </div>
            </div>

            <div className='checkout-page__summary'>
                <div className='checkout-page__summary-top'>
                    <p className='checkout-page__text'>Grand Total</p>
                    <p className='checkout-page__total'>${quantity * 20 * 0.9}</p>
                </div>
                <div className='checkout-page__coupons' onClick={couponPageClick}>
                    <p className='checkout-page__texts'>Check Coupon</p>
                    <img className='checkout-page__arrows' src={arrow_right} />
                </div>
                <div className='checkout-page__disclosures'>
                    <div className='expand'>
                        <LiaTagSolid className='tag'/>
                        <p className='amount'>3</p>
                        <RiArrowUpSLine className='arrowup'/>
                    </div>
                    <div className='checkout-page__disclosure'>
                        <p>Order</p>
                        <p className='price'>$40</p>
                        <p>or more for free delivery or to use</p>
                        <p className='price'>10%</p>
                        <p>off coupon</p>
                    </div>
                </div>
                <div className='checkout-page__button'>
                    <Link to={"/payment"}>
                        <button className='checkout-page__checkout'>Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart;