import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  const date = new Date();
  let no_of_months = 1;
  date.setMonth(date.getMonth() + no_of_months);

  return (
    <div className="plansScreen">
      <p>Renewal date : {date.toLocaleDateString()}</p>
      <div className="tableContainer">
        <div className="row">
          <div className="col1">
            <p>Netflix Basic</p>
            <p>720p</p>
          </div>
          <div className="col2">
            <button className="subscribeBtn__notSubscribed">Subscribe</button>
          </div>
        </div>
        <div className="row">
          <div className="col1">
            <p>Netflix Standard</p>
            <p>1080p</p>
          </div>
          <div className="col2">
            <button className="subscribeBtn__notSubscribed">Subscribe</button>
          </div>
        </div>
        <div className="row">
          <div className="col1">
            <p>Netflix Premium</p>
            <p>4k + hdr</p>
          </div>
          <div className="col2">
            <button className="subscribeBtn__subscribed">Current Package</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
