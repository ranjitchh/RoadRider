"use client"
import UserHeader from "@/components/UserHeader/UserHeader";
import { isAuthenticated } from "@/utils/auth";
import Login from "@/app/Login/page";
import { useState,useEffect } from "react";

export default function RootLayout({ children }) {
 // protected route for user
 const [authenticated, setAuthenticated] = useState(false);
 useEffect(() => {
  const isAuthenticatedUser = isAuthenticated();
  setAuthenticated(isAuthenticatedUser);

  if (!isAuthenticatedUser) {
    window.location.replace("/Login"); // Replace with the actual login page URL
  }
}, []);

if (!authenticated) {
  return <Login />;
}

  return (
    <div className="container">
      <UserHeader />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export const metadata = {
  title: "RoadRider",
  description: "Scooty and Bike rental in Bengaluru",
};
