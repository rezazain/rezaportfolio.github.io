import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Reza
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__sosials">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FiInstagram />
        </a>
        <a href="">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; PortfolioReza. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
