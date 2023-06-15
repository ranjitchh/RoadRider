"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import "./register.css";

const Register = () => {
  const USER_ENDPOINT = "http://localhost:8800/user/reg";
  const OWNER_ENDPOINT = "http://localhost:8800/owner/reg";

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle user login
  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(USER_ENDPOINT, {
        user_email: email,
        user_password: password,
        user_number: phone,
        user_name: name,
        loginType: "user",
      });

      // Check the response status code
      if (response.status === 200) {
        // Login successful
        console.log("User Login successful");

        // Redirect to a different page
      } else {
        // Login failed
        console.log("User Login failed");
      }
    } catch (error) {
      // Handle any errors
      console.error("User Login error:", error);
    }
  };

  // Handle owner login
  const handleOwnerLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(OWNER_ENDPOINT, {
        owner_email: email,
        owner_password: password,
        owner_number: phone,
        owner_name: name,
        loginType: "admin",
      });

      // Check the response status code
      if (response.status === 200) {
        // Login successful
        console.log("Owner Login successful");

        // Redirect to a different page
      } else {
        // Login failed
        console.log("Owner Login failed");
      }
    } catch (error) {
      // Handle any errors
      console.error("Owner Login error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className="main_div">
        <div className="register_div">
          <div className="left_div">
            <div className="info">First time here !!</div>
            <div className="info_head">Sign Up</div>

            <form action="">
              <div class="user_details">
                <div class="input_form">
                  <label htmlFor="text">Name</label>
                  <input
                    type="text"
                    id="text"
                    name="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="input_form">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div class="input_form">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {showPassword ? (
                    <FaEye onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  )}
                </div>
                <div class="input_form">
                  <label htmlFor="number">Phone no</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleUserLogin}
                className="login_button"
              >
                User Signup
              </button>
              <button
                type="submit"
                onClick={handleOwnerLogin}
                className="login_button"
              >
                Owner Sign
              </button>
            </form>
          </div>
          <div className="right_div">
            <div className="backdiv">
              <div className="imagediv">
                <Image
                  className="image"
                  src="/register.png"
                  width={700}
                  height={490}
                ></Image>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
