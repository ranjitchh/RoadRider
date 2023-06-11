"use client";
import "./footer.css";
import Link from "next/link";
// import CallIcon from "@mui/icons-material/Call";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <div className="footer_main">
        <div className="inner_footer">
          <div className="main_footer">
            <div className="company_about">
              <p className="footer_main_text">RoadRider</p>
              <div className="contact_us">
                <div className="email_contact">
                  {/* <CallIcon /> */}
                  <p>+91-123456789</p>
                </div>
                <div className="call_contact">
                  {/* <MailOutlineIcon /> */}
                  <p>customercare@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="Company_info">
              <p className="footer_main_text">Company</p>
              <div className="inner_company">
                <Link href="./about">About Us</Link>
                <Link href="./about">Contact Us</Link>
                <Link href="./about">Blog</Link>
              </div>
            </div>
            <div className="Company_info">
              <p className="footer_main_text">Policies</p>
              <div className="inner_company">
                <Link href="./about">Privacy and policy</Link>
                <Link href="./about">Terms and condition</Link>
 
              </div>
            </div>
            <div className="Quicks_link">
              <p className="footer_main_text">Quick Links</p>
			  <div className="inner_company">
                <Link href="./about">Privacy and policy</Link>
                <Link href="./about">Terms and condition</Link>
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="follow_us">
              <p>Follow Us</p>
			  <div className="inner_follow">
                {/* <Link href="./about"><InstagramIcon/> </Link> */}
                {/* <Link href="./about"><WhatsApp/></Link> */}
                {/* <Link href="./about"><TwitterIcon/></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
