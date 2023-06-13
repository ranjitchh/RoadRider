"use client";
import "./Bikes.css";
import Image from "next/image";
import Link from "next/link";
import bikes from "@src/utils/Bikes";
import scootys from "@src/utils/Scooty";
import evs from "@src/utils/evs";
import { useState, useEffect } from "react";
// import card_loading from "@src/components/card_loading/card_loading";

const Bikes = () => {
  const [bikeLoading, setBikeLoading] = useState(true);
  const [scootyLoading, setScootyLoading] = useState(true);
  const [evLoading, setEvLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBikeLoading(false);
    }, 2000);

    setTimeout(() => {
      setScootyLoading(false);
    }, 2000);

    setTimeout(() => {
      setEvLoading(false);
    }, 2000);
  }, []);

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="bike_section">
      <div className="bike_main">
        <div className="bike_banner">
          <Image
            src="/banner.jpg"
            width={1300}
            height={220}
            alt="banner bike"
          />
          <div className="left_tag">Riding the Wind</div>
          <div className="right_tag">ROADRIDER</div>
        </div>
        <div className="bike_section">
          <div className="tab_box">
            <button
              className={`tab_btn ${toggle === 1 ? "active" : ""}`}
              onClick={() => updateToggle(1)}
            >
              Bikes
            </button>
            <button
              className={`tab_btn ${toggle === 2 ? "active" : ""}`}
              onClick={() => updateToggle(2)}
            >
              Scooty
            </button>
            <button
              className={`tab_btn ${toggle === 3 ? "active" : ""}`}
              onClick={() => updateToggle(3)}
            >
              Evs
            </button>
          </div>

          {toggle === 1 && (
            <div className="show-content">
              {/* bike tab */}
              <div className="Bike_card">
                {bikeLoading ? (
                  <div className="loading-animation">Loading Bikes..</div>
                ) : (
                  bikes.slice(0, 6).map((bike, index) => (
                    <div className="content-card" key={index}>
                      <Image
                        src={bike.imageSrc}
                        width={278}
                        height={155}
                        className="Image_Card"
                      />
                      <div className="info_tag">
                        <div className="bike_name">{bike.name}</div>
                        <div className="bike_rate">{bike.rate}</div>
                      </div>
                      <div className="bike_used">{bike.used}</div>
                      <Link href="./ride" className="Book_ride">
                        Book Ride
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {toggle === 2 && (
            <div className="show-content">
              {/* scooty tab */}
              <div className="Bike_card">
                {scootyLoading ? (
                  <div className="loading-animation">Loading Scootys...</div>
                ) : (
                  scootys.slice(0, 6).map((scooty, index) => (
                    <div className="content-card" key={index}>
                      <Image
                        src={scooty.imageSrc}
                        width={278}
                        height={155}
                        className="Image_Card"
                      />
                      <div className="info_tag">
                        <div className="bike_name">{scooty.name}</div>
                        <div className="bike_rate">{scooty.rate}</div>
                      </div>
                      <div className="bike_used">{scooty.used}</div>
                      <Link href="./ride" className="Book_ride">
                        Book Ride
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {toggle === 3 && (
            <div className="show-content">
              {/* evs tab */}
              <div className="Bike_card">
                {evLoading ? (
                  <div className="loading-animation">Loading EVs...</div>
                ) : (
                  evs.slice(0, 6).map((ev, index) => (
                    <div className="content-card" key={index}>
                      <Image
                        src={ev.imageSrc}
                        width={278}
                        height={155}
                        className="Image_Card"
                      />
                      <div className="info_tag">
                        <div className="bike_name">{ev.name}</div>
                        <div className="bike_rate">{ev.rate}</div>
                      </div>
                      <div className="bike_used">{ev.used}</div>
                      <Link href="./ride" className="Book_ride">
                        Book Ride
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
