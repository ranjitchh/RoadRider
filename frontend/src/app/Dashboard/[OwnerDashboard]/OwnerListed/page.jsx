"use client";
import "./OwnerListed.css";
import { useState } from "react";

const page = () => {
  const [vehicleList, setVehicleList] = useState([
    {
      id: 1,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 2,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 3,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 4,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 5,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 6,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
    {
      id: 7,
      name: "MT15",
      price: "$150/hour",
      used: "Medium Used",
    },
  ]);

  const handleRemoveVehicle = (id) => {
    setVehicleList((prevList) =>
      prevList.filter((vehicle) => vehicle.id !== id)
    );
  };

  return (
    <>
      <div className="Listed_div">
        <div className="listed_vehicle">
          <h2 className="listed_heading">Listed Vehicle</h2>
          <div className="listed_card">
            {vehicleList.map((vehicle) => (
              <div className="l_card" key={vehicle.id}>
                <div className="vehicle_name">
                  <h3>{vehicle.name}</h3>
                </div>
                <div className="vechile_price">
                  <h3>{vehicle.price}</h3>
                </div>
                <div className="vehicle_used">
                  <h3>Used: {vehicle.used}</h3>
                </div>
                <div className="remove_btn">
                  <button onClick={() => handleRemoveVehicle(vehicle.id)}>
                    Remove Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
