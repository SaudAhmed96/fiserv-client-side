import React from 'react';
import food_one from '../../assets/images/nasi_img.png'
// import food_two from '../../assets/images/creamy_pasta.png'
import arrow_right from '../../assets/images/arrow_right.png'
import './CheckoutCart.scss';
import { useState } from 'react';

import { GoNoEntry } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";

function CheckoutCart() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='checkout-page'>
            <div className='checkout-page__destination'>
                <p className='checkout-page__address'>Deliver to 2222-3698 Citation Dr</p>
                <p className='checkout-page__edit'>Edit</p>
            </div>
            <div className='checkout-page__body'>
                <div className='checkout-page__item'>
                    <div className='checkout-page__cart-left'>
                        <img className='checkout-page__food' src={food_one} />
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

                {/* <div className='checkout-page__item'>
                    <div className='checkout-page__cart-left'>
                        <img className='checkout-page__food' src={food_two} />
                        <div className='checkout-page__quantity'>
                            <button className='checkout-page__reduce'>-</button>
                            <p className='checkout-page__number'>1</p>
                            <button className='checkout-page__increase'>+</button>
                        </div>
                    </div>
                    <div className='checkout-page__cart-right'>
                        <p className='checkout-page__dish'>Creamy Pasta</p>
                        <p className='checkout-page__price'>$36</p>
                    </div>
                </div> */}
            </div>

            <div className='checkout-page__summary'>
                <div className='checkout-page__summary-top'>
                    <p className='checkout-page__text'>Grand Total</p>
                    <p className='checkout-page__total'>${quantity * 20 * 0.9}</p>
                </div>
                <div className='checkout-page__coupons'>
                    <p className='checkout-page__texts'>Check Coupon</p>
                    <img className='checkout-page__arrows' src={arrow_right} />
                </div>
                <div className='checkout-page__disclosures'>
                    <div className='checkout-page__expand'>
                        <img className='checkout-page__tag' />
                        <p className='checkout-page__amount'>3</p>
                        <img className='checkout-page__up' />
                    </div>
                    <p className='checkout-page__disclosure'>Order $40 or more for free delivery or to use 10% off coupon</p>
                </div>
                <div className='checkout-page__button'>
                    <button className='checkout-page__checkout'>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCart;