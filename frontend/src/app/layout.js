"use client";
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "RoadRider",
  description: "Scooty and Bike rental in Bengaluru",
};

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="container">
          {isLoading ? (
            <div className="loader-wrapper">
              <HashLoader color="#FD5E3B" loading={isLoading} size={150} />
            </div>
          ) : (
            <>
              <Header />
              {children}
              <Footer />
              <ToastContainer />
            </>
          )}
        </div>
      </body>
    </html>
  );
}
