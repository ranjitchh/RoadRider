import React from "react";
import "./OwnerProfile.css";

const page = () => {
  const owner_no = +9189384938293;
  return (
    <>
      <div className="ownerProfile">
        <div className="ownerprofile_main">
          <h2>Edit Profile</h2>
          <div className="edit_profilecard">
            <form action="">
              <div className="user_details">
                <div className="owner_city">
                  <div className="numberandcity">
                    <div className="input_form">
                      <label htmlFor="number">Number</label>
                      <input
                        type="number"
                        className="oinput_tag"
                        name="number"
                        id=""
                        value={owner_no}
                      />
                    </div>
                    <div className="input_form">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        className="oinput_tag"
                        name="city"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="input_form">
                    <label htmlFor="address">Address</label>
                    <textarea
                      className="Tinput_tag"
                      name="address" // Fixed the typo here from "adress" to "address"
                      id=""
                      cols="55"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="submit_owner">
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
