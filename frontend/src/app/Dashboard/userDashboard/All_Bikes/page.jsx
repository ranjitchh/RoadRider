import React from "react";
import "./All_Bikes.css";
const page = () => {
  return (
    <>
      <div className="all_bikes">
        <div className="all_bikediv">
          <h2>Drive Bike of Your dreams</h2>
          <div className="bike_search">
            <div className="vechile_type">
              <span className="vechile_head">Vehicle Type</span>
              <select name="" id="">
                <option value="">Bikes</option>
                <option value="">EVs</option>
                <option value="">Scooty</option>
              </select>
            </div>
            <div className="vechile_type">
              <span className="vechile_head">Vehicle Used</span>
              <select name="" id="">
                <option value="">1st Hand</option>
                <option value="">2nd Hand</option>
                <option value="">3rd Hand</option>
              </select>
            </div>
            <div className="vechile_type">
              <span className="vechile_head">Select Location</span>
              <select name="" id="">
                <option value="">Majestic</option>
                <option value="">IndiraNagar</option>
                <option value="">Andhrahalli</option>
              </select>
            </div>
            <div className="pickup_dropoff">
              <span className="vechile_head">PickUp and DropOff Time</span>
              <input type="datetime-local" name="" id="" />
              <input type="datetime-local" name="" id="" />
            </div>
            <div className="submit_button">
              <button>Search Vehicle</button>
            </div>
          </div>
          <div className="bike_div"></div>
        </div>
      </div>
    </>
  );
};

export default page;
