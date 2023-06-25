import OwnerHeader from "/src/components/OwnerHeader/OwnerHeader"
export default function RootLayout({ children }) {
  return (
    <div className="container">
      <OwnerHeader />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export const metadata = {
  title: "RoadRider",
  description: "Scooty and Bike rental in Bengaluru",
};
