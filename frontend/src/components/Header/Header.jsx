"use client";
import Styles from "./header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <main className={Styles.main_nav}>
      <div className={`${Styles.navbar} ${Styles.container}`}>
        <div className={Styles.logo}>
          <Link href="/" className={Styles.logo_link} key="home">
            <h1>RoadRider</h1>
          </Link>
        </div>
        <div className={Styles.navitems}>
          <ul>
            <li>
              <Link
                href="/"
                className={`${Styles.nav_link} ${Styles.nav_list}`}
                key="home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Bikes"
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
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className={Styles.navbtn}>
          <Link href="/Login" className={Styles.loginbtn} key="login">
            Login
          </Link>
          <Link href="/Register" className={Styles.rentbtn} key="signup">
            SignUp
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Header;
