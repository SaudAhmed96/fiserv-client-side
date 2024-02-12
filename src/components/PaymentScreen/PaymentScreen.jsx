import React from 'react';
import food_one from '../../assets/images/nasi_img.png'
import arrow_left from '../../assets/images/arrow_left.png';
import avatar from '../../assets/images/avatar.png'
import ApplePayButton from '../../assets/images/apple-pay-button.png';
import GooglePayButton from '../../assets/images/google-pay-button.png';

import './PaymentScreen.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GoNoEntry } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import SearchBar from '../../components/Search-bar/Search-bar';


function PaymentScreen() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='payment-screen'>
            <div className='payment-screen__header'>
                <div className='payment-screen__left'>
                    <Link to={'/checkout'}>
                        <IoIosArrowRoundBack className='payment-screen__back'/>
                    </Link>
                    <div className='payment-screen__info'>
                        <img className='payment-screen__avatar' src={avatar} />
                        <p className='payment-screen__name'>David</p>
                    </div>
                </div>

                <div className='payment-screen__right'>
                    <SearchBar className='payment-screen__search' />
                    <BsFilterLeft className='payment-screen__filter' />
                </div>
            </div>
            <div className='payment-screen__destination'>
                <p className='payment-screen__address'>Deliver to 2222-3698 Citation Dr</p>
                <p className='payment-screen__edit'>Edit</p>
            </div>
            <div className='payment-screen__body'>
                <div className='payment-screen__item'>
                    <div className='payment-screen__cart-left'>
                        <img className='payment-screen__food' src={food_one} />
                        <div className='payment-screen__qty'>
                            <div className='payment-screen__quantity'>
                                <GoNoEntry
                                    className='payment-screen__icon'
                                    onClick={() => {
                                        if (quantity > 0) {
                                            setQuantity(quantity - 1)
                                        }
                                    }}
                                />
                                <p className='payment-screen__number'>{quantity}</p>
                                <GoPlusCircle
                                    className='payment-screen__icon'
                                    onClick={() => { setQuantity(quantity + 1) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='payment-screen__cart-right'>
                        <p className='payment-screen__dish'>Nasi Goreng</p>
                        <p className='payment-screen__price'>${quantity * 20 * 0.9}</p>
                    </div>
                </div>
            </div>

            <div className='payment-screen__breakdown'>
                <div className='payment-screen__breakdown-left'>
                    <p className='payment-screen__texts'>Price (after 10% discount):</p>
                    <p className='payment-screen__texts'>Coupon Code: US0202225ap</p>
                    <p className='payment-screen__texts'>Subtotal:</p>
                    <p className='payment-screen__texts'>Delivery Fees:</p>
                </div>

                <div className='payment-screen__breakdown-right'>
                    <p className='payment-screen__numbers'>${quantity * 20 * 0.9}</p>
                    <p className='payment-screen__numbers'>($6.00)</p>
                    <p className='payment-screen__numbers'>${quantity * 20 * 0.9}</p>
                    <p className='payment-screen__numbers'>$7</p>
                </div>
            </div>

            <hr className='payment-screen__split' />

            <div className='payment-screen__breakdown'>

                <div className='payment-screen__breakdown-left'>
                    <p className='payment-screen__texts'>GST</p>
                    <p className='payment-screen__texts'>PST</p>
                </div>

                <div className='payment-screen__breakdown-right'>
                    <p className='payment-screen__numbers'>$1.85</p>
                    <p className='payment-screen__numbers'>$2.59</p>
                    <p className='payment-screen__rewards'>Reward 20 points</p>

                </div>
            </div>

            <div className='payment-screen__summary'>
                <div className='payment-screen__summary-top'>
                    <p className='payment-screen__text'>Total</p>
                    <p className='payment-screen__total'>${quantity * 20 * 0.9 + 1.85 + 2.59 + 1}</p>
                </div>
                <p className='payment-screen__savings'>Saved $10</p>


                <div className='payment-screen__notes'>
                    <p className='payment-screen__note'>Enter delivery instructions here</p>
                    <p className='payment-screen__note'>Edit</p>
                </div>


                <p className='payment-screen__delivery'>Delivery Estimate</p>
                <input className='payment-screen__div' />
            </div>

            <div className='payment-screen__methods'>
                <p className='payment-screen__title'>Payment Method</p>
                <div className='payment-screen__option'>
                    <input className='payment-screen__radio' type='radio' name='payment'/>
                    <label className='payment-screen__label'>Paypal</label>
                </div>
                <div className='payment-screen__option'>
                    <input className='payment-screen__radio' type='radio' name='payment' />
                    <label className='payment-screen__label'>Amex ****0012</label>
                </div>
                <div className='payment-screen__option'>
                    <input className='payment-screen__radio' type='radio'name='payment'/>
                    <img className='apple-pay-button' src={ApplePayButton} />
                </div>
                <div className='payment-screen__option'>
                    <input className='payment-screen__radio' type='radio' name='payment'/>
                    <img className='google-pay-button' src={GooglePayButton} />
                </div>

            </div>

            <div className='payment-screen__summary'>
                <div className='payment-screen__summary-top'>
                    <p className='payment-screen__text'>Total</p>
                    <p className='payment-screen__total'>${quantity * 20 * 0.9 + 1.85 + 2.59 + 1}</p>
                </div>
                <p className='payment-screen__savings'>Saved $10</p>
            </div>


            <div className='payment-screen__button'>
                <button className='payment-screen__checkout'>Pay Now</button>
            </div>
        </div>
    )
}

export default PaymentScreen;