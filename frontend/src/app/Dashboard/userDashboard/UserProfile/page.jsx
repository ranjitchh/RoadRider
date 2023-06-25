import React from "react";
import "./UserProfile.css";

const Page = () => {
  return (
    <div>
      <div className="userProfile">
        <div className="user_profilemain">
          <div className="upload_card">
            <h2 className="owner_heading">Complete your Profile</h2>
            <form action="#">
              <div className="Bikes_details">
                <div className="input_pox">
                  <span className="datails">Name</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">City</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Upload DL (Driving License)</span>
                  <input type="file" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Address</span>
                  <textarea
                    className="Tinput_tag"
                    name="address" // Fixed the typo here from "adress" to "address"
                    id=""
                    cols="35"
                    rows="5"
                  ></textarea>
                </div>

                <div className="edit_profile">
                  <button type="submit">Upload Profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
