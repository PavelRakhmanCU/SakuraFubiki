import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="email-container">
        <div className="email-info">
          <span>sakura_blossom@example.com</span>
          <span><FaEnvelope></FaEnvelope></span>
        </div>
      </div>
      <div className="telephone-container">
        <div className="telephone-info">
          <span>123-456-7890</span>
          <span><IoIosCall></IoIosCall></span>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-icons">
          <span><FaFacebookF></FaFacebookF></span>
          <span><FaInstagramSquare></FaInstagramSquare></span>
          <span><FaTwitter></FaTwitter></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;