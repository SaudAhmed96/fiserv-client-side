import "./CouponPage.scss";
import ProgressCoupons from "../../components/Coupon-progress/Coupon-progess";

import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { GiSpeaker } from "react-icons/gi";

const CouponPage = () => {
  const exitClick = () => {
    window.location.href = "/";
  };

  const continueClick = () => {
    window.location.href = "/checkout";
  };

  return (
    <div className="coupons">
      <div className="coupons-top">
        <HiMiniArrowLongLeft className="exit-icon" onClick={exitClick} />
        <h2 className="page-title">My Coupons</h2>
      </div>
      <div className="coupons-header">
        <div className="header-info">
          <GiSpeaker className="speaker-icon" />
          <p className="announcement">Only one coupon can be used per order.</p>
        </div>
      </div>
      <div className="coupons-availability">
        <h2 className="available">Available</h2>
        <h2 className="unavailable">Unavailable</h2>
      </div>
      <div className="coupons-recommended">
        <p className="recommended-title">
          Recommended coupon used; saved $6.00
        </p>
        <div className="recommended-coupon">
          <div className="coupon-info">
            <div className="details">
              <p className="percentage">10% Off</p>
              <p>Over $30.00</p>
              <p>coupon requirements met, expevt to save $6.00</p>
            </div>
            <div className="expiry">
              <input type="radio" />
              <p>Expires in 10 days</p>
            </div>
          </div>
          <div className="code">
            <p>Code: US020225ap</p>
            <p>10/02/2024 - 20/02/2024</p>
          </div>
        </div>
      </div>
      <ProgressCoupons />
      <div className="coupons-continue">
        <div className="coupons-continue_details">
          <p>1 Coupon Selected</p>
          <p>Save $6.00</p>
        </div>
        <button className="continue" type="button" onClick={continueClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default CouponPage;
