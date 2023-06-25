"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "./ownerUpload.module.css";

const OwnerUpload = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleUsed, setVehicleUsed] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const handleFileChange = (e) => {
    setImageFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("vehicle_name", vehicleName);
    formData.append("category_model", vehicleUsed);
    formData.append("category_type", vehicleType);
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("files", imageFiles[i]);
    }

    try {
      await axios.post("http://localhost:8800/vehivles/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Vehicle uploaded successfully.");
      // Add any success handling code here
    } catch (error) {
      console.log("Error uploading vehicle:", error);
      // Add any error handling code here
    }
  };

  return (
    <div>
      <div className={styles.ownerupload}>
        <div className={styles.owner_uploadmain}>
          <div className={styles.upload_card}>
            <h2 className={styles.owner_heading}>Upload Bikes</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.Bikes_details}>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Name</span>
                  <input
                    type="text"
                    required
                    value={vehicleName}
                    onChange={(e) => setVehicleName(e.target.value)}
                  />
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Used</span>
                  <select
                    value={vehicleUsed}
                    onChange={(e) => setVehicleUsed(e.target.value)}
                  >
                    <option value="1st hand">1st hand</option>
                    <option value="2nd hand">2nd hand</option>
                    <option value="3rd hand">3rd hand</option>
                  </select>
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Type</span>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="Bikes">Bikes</option>
                    <option value="Scooty">Scooty</option>
                    <option value="Evs">Evs</option>
                  </select>
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Upload Bike Images</span>
                  <input
                    type="file"
                    required
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
                <div className={styles.upload_btn}>
                  <button type="submit">Upload Bike</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerUpload;
