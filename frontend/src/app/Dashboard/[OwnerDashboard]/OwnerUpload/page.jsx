import React from "react";
import styles from "./ownerUpload.module.css";

const OwnerUpload = () => {
  return (
    <div>
      <div className={styles.ownerupload}>
        <div className={styles.owner_uploadmain}>
          <div className={styles.upload_card}>
            <h2 className={styles.owner_heading}>Upload Bikes</h2>
            <form action="#">
              <div className={styles.Bikes_details}>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Name</span>
                  <input type="text" required />
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Used</span>
                  <select name="" id="">
                    <option value="">1st hand</option>
                    <option value="">2nd hand</option>
                    <option value="">3rd hand</option>
                  </select>
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Vehicle Type</span>
                  <select name="" id="">
                    <option value="">Bikes</option>
                    <option value="">Scooty</option>
                    <option value="">Evs</option>
                  </select>
                </div>
                <div className={styles.input_pox}>
                  <span className={styles.datails}>Upload Bike Images</span>
                  <input type="file" required />
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
