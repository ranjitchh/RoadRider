"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import login from "./login.module.css";

const Login = () => {
  const USER_ENDPOINT = "http://localhost:8800/user/login";
  const OWNER_ENDPOINT = "http://localhost:8800/owner/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      const response = axios.post(USER_ENDPOINT, {
        email: email,
        password: password,
        loginType: "user",
      });

      if (response.status === 200) {
        console.log("User Login successful");
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("userName", res.data.name);
        // Redirect to a different page upon successful user login
      } else {
        console.log("User Login failed");
        // Display an error message or perform any necessary actions upon user login failure
      }
    } catch (error) {
      console.error("User Login error:", error);
      // Display an error message or perform any necessary actions upon user login failure
    }
  };

  const handleOwnerLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(OWNER_ENDPOINT, {
        email: email,
        password: password,
        loginType: "owner",
      });
      if (response.status === 200) {
        console.log("Owner Login successful");
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("userName", res.data.name);
        // Redirect to a different page upon successful owner login
      } else {
        console.log("Owner Login failed");
        // Display an error message or perform any necessary actions upon owner login failure
      }
    } catch (error) {
      console.error("Owner Login error:", error);
      // Display an error message or perform any necessary actions upon owner login failure
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={login.main}>
      <div className={login.main_page}>
        <div className={login.login_side}>
          <p className={login.tag}>Welcome back!</p>
          <div className={login.main_info}>Log In</div>

          <form method="post">
            <div className={login.password_input}>
              <label htmlFor="email" className={login.text_box}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={login.input_tag}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label htmlFor="password" className={login.text_box}>
              Password
            </label>
            <div className={login.password_input}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                className={login.input_tag}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEye
                  className={login.eye_icon}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEyeSlash
                  className={login.eye_slash_icon}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <button
              type="submit"
              onClick={handleUserLogin}
              className={login.login_button}
            >
              User Login
            </button>
            <button
              type="submit"
              onClick={handleOwnerLogin}
              className={login.login_button}
            >
              Owner Login
            </button>
          </form>
          <div className={login.info}>
            <p>or continue with</p>
          </div>
          <div className={login.Login_google}>
            <svg
              className={login.logo}
              width="38"
              height="27"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path data */}
            </svg>

            <Link href="/" className={login.login_google} key="google">
              Login with Google
            </Link>
          </div>
          <div className={login.end}>
            <p>Don't have an account yet?</p>
            <Link href="/Register" className={login.signup_btn} key="signup">
              Signup For Free
            </Link>
          </div>
        </div>
        <div className={login.image_side}>
          <div className={login.background_div}>
            <div className={login.image_bike}>
              <Image src="/login_img.png" width={700} height={490} />
              <div className={login.shadow}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
