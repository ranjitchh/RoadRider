import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export const metadata = {
  title: "RoadRider",
  description: "Scooty and Bike rental in Bengaluru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
