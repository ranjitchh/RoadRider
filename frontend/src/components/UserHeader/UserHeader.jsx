"use client";
import Styles from "@/components/Header/Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const UserHeader = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check the localStorage for user data
    const userName = localStorage.getItem("userName");

    if (userName) {
      setUsername(userName);
    }
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    console.log("hello");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
  };

  return (
    <main className={Styles.main_nav}>
      <div className={`${Styles.navbar} ${Styles.container}`}>
        <div className={Styles.logo}>
          <Link
            href="/Dashboard/userDashboard/UserProfile"
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
                href="/Dashboard/userDashboard/UserProfile"
                className={`${Styles.nav_link} ${Styles.nav_list}`}
                key="home"
              >
                UserProfile
              </Link>
            </li>
            <li>
              <Link
                href="/Dashboard/userDashboard/All_Bikes"
                className={`${Styles.nav_link} ${Styles.nav_list}`}
                key="Bikes"
              >
                Bikes
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${Styles.nav_link} ${Styles.nav_list}`}
                key="about"
              >
                Rented Bikes
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.navbtn}>
          <span className={Styles.loginbtn}>Welcome, {username}</span>
          <Link href="/" className={Styles.rentbtn} onClick={handleLogout}>
            Logout
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UserHeader;
