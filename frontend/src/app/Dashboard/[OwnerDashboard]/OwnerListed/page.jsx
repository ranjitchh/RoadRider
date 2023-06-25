"use client";
import "./OwnerListed.css";
import { useState, useEffect } from "react";

const page = () => {
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    const fetchOwnerVehicles = async () => {
      try {
        const ownerId = localStorage.getItem("user_id");
        const response = await axios.get(
          `http://localhost:8800/oner/vehicles/${ownerId}`
        );
        setVehicleList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOwnerVehicles();
  }, []);

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
