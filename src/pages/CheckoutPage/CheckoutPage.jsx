import { useState } from "react";
import React from "react";
import arrow_left from "../../assets/images/arrow_left.png";
import avatar from "../../assets/images/avatar.png";
import filter from "../../assets/images/filters.png";
import food_one from "../../assets/images/nasi_img.png";
import food_two from "../../assets/images/creamy_pasta.png";
import arrow_right from "../../assets/images/arrow_right.png";
import "./CheckoutPage.scss";
import Searchbar from "../../components/Search-bar/Search-bar";

import { LiaTagSolid } from "react-icons/lia";
import { MdKeyboardArrowUp } from "react-icons/md";

function CheckoutPage() {
  const [count1, setCount1] = useState(2);
  const [count2, setCount2] = useState(0);

  const differenceClick1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };
  const sumClick1 = () => {
    setCount1(count1 + 1);
  };

  const differenceClick2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };
  const sumClick2 = () => {
    setCount2(count2 + 1);
  };

  const userClick = () => {
    window.location.href = "/profile";
  }

  const couponClick = () => {
    window.location.href = "/coupons";
  };
  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="checkout-page__left">
          <img className="checkout-page__arrow" src={arrow_left} />
          <div className="checkout-page__info">
            <img className="checkout-page__avatar" src={avatar}  onClick={userClick}/>
            <p className="checkout-page__name">David</p>
          </div>
        </div>

        <div className="checkout-page__right">
          <Searchbar />
          <img className="checkout-page__filter" src={filter} />
        </div>
      </div>
      <div className="checkout-page__destination">
        <p className="checkout-page__address">
          Deliver to 2222-3698 Citation Dr
        </p>
        <p className="checkout-page__edit">Edit</p>
      </div>
      <div className="checkout-page__body">
        <div className="checkout-page__item">
          <div className="checkout-page__cart-left">
            <div className="input-image">
              <input type="radio" />
              <img className="checkout-page__food" src={food_one} />
            </div>
            <div className="checkout-page__quantity">
              <button
                className="checkout-page__reduce"
                onClick={differenceClick1}
              >
                -
              </button>
              <p className="checkout-page__number">{count1}</p>
              <button className="checkout-page__increase" onClick={sumClick1}>
                +
              </button>
            </div>
          </div>
          <div className="checkout-page__cart-right">
            <p className="checkout-page__dish">Nasi Goreng</p>
            <p className="checkout-page__price">$36</p>
          </div>
        </div>

        <div className="checkout-page__item">
          <div className="checkout-page__cart-left">
            <div className="input-image">
              <input type="radio" />
              <img className="checkout-page__food" src={food_two} />
            </div>
            <div className="checkout-page__quantity">
              <button
                className="checkout-page__reduce"
                onClick={differenceClick2}
              >
                -
              </button>
              <p className="checkout-page__number">{count2}</p>
              <button className="checkout-page__increase" onClick={sumClick2}>
                +
              </button>
            </div>
          </div>
          <div className="checkout-page__cart-right">
            <p className="checkout-page__dish">Creamy Pasta</p>
            <p className="checkout-page__price">$36</p>
          </div>
        </div>
      </div>

      <div className="checkout-page__summary">
        <div className="checkout-page__summary-top">
          <p className="checkout-page__text">Grand Total</p>
          <p className="checkout-page__total">$36</p>
        </div>
        <div className="checkout-page__coupons" onClick={couponClick}>
          <p className="checkout-page__texts">Check Coupon</p>
          <img className="checkout-page__arrows" src={arrow_right} />
        </div>
        <div className="checkout-page__disclosures">
          <div className="checkout-page__expand">
            <div className="amount">
              <LiaTagSolid className="tag" />
              <p className="checkout-page__amount">3</p>
              <MdKeyboardArrowUp className="arrowup" />
            </div>
          </div>
          <div className="checkout-page__disclosure">
            <p>Order</p>
            <p className="cost"> $40</p>
            <p>or more for free delivery or to use </p>
            <p className="cost">10% </p>
            <p>off coupon</p>
          </div>
        </div>
        <div className="checkout-page__button">
          <button className="checkout-page__checkout">Check Out</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
