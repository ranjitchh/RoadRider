"use client";
import React from "react";
import Styles from "../Header/header.module.css";
import Link from "next/link";

const OwnerHeader = () => {
  let owner = "ranjit";
  const logout = () => {
    console.log("hello");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("isOwnerAuthenticated");
  };

  return (
    <div>
      <main className={Styles.main_nav}>
        <div className={`${Styles.navbar} ${Styles.container}`}>
          <div className={Styles.logo}>
            <Link
              href="/Dashboard/OwnerDashboard/OwnerProfile"
              className={Styles.logo_link}
              key="home"
            >
              <h1>RoadRider</h1>
            </Link>
          </div>
          <div className={Styles.navitems}>
            <ul>
              <li>
                <Link
                  href="/Dashboard/OwnerDashboard/OwnerProfile"
                  className={`${Styles.nav_link} ${Styles.nav_list}`}
                  key="profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/Dashboard/OwnerDashboard/OwnerUpload"
                  className={`${Styles.nav_link} ${Styles.nav_list}`}
                  key="Bikes"
                >
                  Add Vehicle
                </Link>
              </li>
              <li>
                <Link
                  href="/Dashboard/OwnerDashboard/OwnerListed"
                  className={`${Styles.nav_link} ${Styles.nav_list}`}
                  key="about"
                >
                  Listed Vehicle
                </Link>
              </li>
              <li>
                <Link
                  href="/Dashboard/OwnerDashboard/OwnerEarning"
                  className={`${Styles.nav_link} ${Styles.nav_list}`}
                  key="Shop"
                >
                  Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className={Styles.navbtn}>
            {/* <DarkMode/> */}
            <Link
              href="/"
              className={Styles.loginbtn}
              key="logout"
              onClick={() => logout()}
            >
              Logout
            </Link>
            <Link
              href="/Dashboard/Register"
              className={Styles.rentbtn}
              key="owner"
            >
              Hey {owner}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerHeader;
