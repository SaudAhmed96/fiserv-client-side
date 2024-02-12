import "./Coupon-progress.scss";

const ProgressCoupons = () => {
  return (
    <div className="inprogress">
      <p className="inprogress-title">Other coupons</p>
      <div className="inprogress-coupons">
        <div className="details">
          <div className="info">
            <p className="percent">15% Off</p>
            <div className="cost">
              <p>Over</p>
              <p className="price">$40.00</p>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>
        <div className="details">
          <div className="info">
            <p className="percent">20% Off</p>
            <div className="cost">
              <p>Over</p>
              <p className="price">$70.00</p>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCoupons;
