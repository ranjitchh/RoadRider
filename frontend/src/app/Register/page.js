"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./register.css";
import Link from "next/link";
import { toast } from "react-toastify";

const Register = () => {
  const USERAPI_ENDPOINT = "http://localhost:8800/user/reg";
  const OWNERAPI_ENDPOINT = "http://localhost:8800/owner/reg";
  const router = useRouter(); // Access the router object

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle user login
  const handleUserLogin = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      number: phone,
      loginType: "user",
    };

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(USERAPI_ENDPOINT, data);

      // Check the response status code
      if (response.status === 200) {
        // register successful
        toast.success("User Registered Successfully ", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log("User registration successful");

        // Redirect to a different page
        router.push("/Dashboard/OwnerDashboard/OwnerProfile"); // Replace "/success" with the actual path you want to redirect to
      } else {
        // register failed
        console.log("User registration failed");
      }
    } catch (error) {
      // Handle any errors
      console.error("User registration error:", error);
      toast.error("Enter valid number and gmail", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  // Handle owner login
  const handleOwnerLogin = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      number: phone,
      loginType: "owner",
    };

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(OWNERAPI_ENDPOINT, data);

      // Check the response status code
      if (response.status === 200) {
        // register successful
        toast.success("Owner Login Successfully ", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("Owner registration successful");

        // Redirect to a different page
        router.push("/success"); // Replace "/success" with the actual path you want to redirect to
      } else {
        // Login failed
        console.log("Owner registration failed");
      }
    } catch (error) {
      // Handle any errors
      toast.error("Enter valid number and gmail", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error("Owner registration error:", error);
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
            <form action="/Register" method="post">
              <div className="user_details">
                <div className="input_form">
                  <label htmlFor="text">Name</label>
                  <input
                    type="text"
                    id="text"
                    value={name}
                    className="l_input_tag"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input_form">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="l_input_tag"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input_form">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    className="l_input_tag"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {showPassword ? (
                    <FaEye
                      className="eye_icon"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEyeSlash
                      className="eye_slash_icon"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
                <div className="input_form">
                  <label htmlFor="number">Phone no</label>
                  <input
                    type="number"
                    id="number"
                    value={phone}
                    className="l_input_tag"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button onClick={handleUserLogin} className="login_button">
                User Signup
              </button>
              <button onClick={handleOwnerLogin} className="login_button">
                Owner Sign
              </button>
            </form>
            <div className="logged_in">
              <p>Already have an account!</p>
              <Link href={"./Login"} className="login_here">
                Login here
              </Link>
            </div>
          </div>
          <div className="right_div">
            <div className="backdiv">
              <div className="imagediv">
                <Image
                  className="image"
                  src="/register.png"
                  width={700}
                  height={490}
                />
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
