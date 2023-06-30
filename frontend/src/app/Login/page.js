"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import login from "./login.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const router = useRouter();

  const USER_ENDPOINT = "http://localhost:8800/user/login";
  const OWNER_ENDPOINT = "http://localhost:8800/owner/login";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(USER_ENDPOINT, {
        email: email,
        password: password,
        loginType: "user",
      });

      if (res.status === 200) {
        console.log("User Login successful");
        setLoginSuccess(true);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("userName", res.data.name);
        localStorage.setItem('isUserAuthenticated', true);
        toast.success("User Login Successfully ", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        router.push("/Dashboard/userDashboard/UserProfile");
      } else {
        console.log("User Login failed");
      }
    } catch (error) {
      console.error("User Login error:", error);
      toast.error("User Password or Email id is incorrect ", {
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

  const handleOwnerLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(OWNER_ENDPOINT, {
        email: email,
        password: password,
        loginType: "owner",
      });

      if (res.status === 200) {
        console.log("Owner Login successful");
        setLoginSuccess(true);
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("userName", res.data.name);
        localStorage.setItem('isOwnerAuthenticated', true);
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
        router.push("/Dashboard/OwnerDashboard/OwnerProfile");
      } else {
        console.log("Owner Login failed");
      }
    } catch (error) {
      console.error("Owner Login error:", error);
      toast.error("Owner Password or Email is incorrect ", {
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

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className={login.main}>
        <div className={login.main_page}>
          <div className={login.login_side}>
            <p className={login.tag}>Welcome back!</p>
            <div className={login.main_info}>Log In</div>

            <form action="/Login" method="post">
              <div className={login.password_input}>
                <label htmlFor="email" className={login.text_box}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={login.rinput_tag}
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
                  className={login.rinput_tag}
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
            <div className={login.end}>
              <p>Don't have an account yet?</p>
              <Link
                href="/Dashboard/Register"
                className={login.signup_btn}
                key="signup"
              >
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
    </>
  );
};

export default Login;
