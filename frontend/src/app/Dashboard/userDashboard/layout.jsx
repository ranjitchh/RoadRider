import UserHeader from "@/components/UserHeader/UserHeader";
export default function RootLayout({ children }) {
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
