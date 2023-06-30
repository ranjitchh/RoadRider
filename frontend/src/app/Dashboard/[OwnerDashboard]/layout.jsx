
"use client"
import OwnerHeader from '/src/components/OwnerHeader/OwnerHeader';
import { isAuthenticated } from '@/utils/auth';
import Login from '@/app/Login/page';
import { useEffect,useState} from 'react';
export default function RootLayout({ children }) {
   
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
      <OwnerHeader />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export const metadata = {
  title: 'RoadRider',
  description: 'Scooty and Bike rental in Bengaluru',
};
