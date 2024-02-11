import React from 'react';
import arrow_left from '../../assets/images/arrow_left.png';
import avatar from '../../assets/images/avatar.png'
import filter from '../../assets/images/filters.png'
import food_one from '../../assets/images/nasi_img.png'
import food_two from '../../assets/images/creamy_pasta.png'
import arrow_right from '../../assets/images/arrow_right.png'
import './CheckoutPage.scss';

function CheckoutPage() {

    return (
        <div className='checkout-page'>
            <div className='checkout-page__header'>
                <div className='checkout-page__left'>
                    <img className='checkout-page__arrow' src={arrow_left} />
                    <div className='checkout-page__info'>
                        <img className='checkout-page__avatar' src={avatar} />
                        <p className='checkout-page__name'>David</p>
                    </div>
                </div>

                <div className='checkout-page__right'>
                    <img className='checkout-page__search' />
                    <img className='checkout-page__filter' src={filter} />
                </div>
            </div>
            <div className='checkout-page__destination'>
                <p className='checkout-page__address'>Deliver to 2222-3698 Citation Dr</p>
                <p className='checkout-page__edit'>Edit</p>
            </div>
            <div className='checkout-page__body'>
                <div className='checkout-page__item'>
                    <div className='checkout-page__cart-left'>
                        <img className='checkout-page__food' src={food_one} />
                        <div className='checkout-page__quantity'>
                            <button className='checkout-page__reduce'>-</button>
                            <p className='checkout-page__number'>2</p>
                            <button className='checkout-page__increase'>+</button>
                        </div>
                    </div>
                    <div className='checkout-page__cart-right'>
                        <p className='checkout-page__dish'>Nasi Goreng</p>
                        <p className='checkout-page__price'>$36</p>
                    </div>
                </div>

                <div className='checkout-page__item'>
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
                </div>
            </div>

            <div className='checkout-page__summary'>
                <div className='checkout-page__summary-top'>
                    <p className='checkout-page__text'>Grand Total</p>
                    <p className='checkout-page__total'>$36</p>
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

export default CheckoutPage