import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from"../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">

      <div className="container footer-top">
        <div className="row">

          {/* 🔹 LEFT */}
          <div className="col-md-3">
          <div className="footer-logo">
             <img src={logo} alt="logo" />
            <h4 className="logo">Nexora Technologies</h4></div>
            <p className="footer-desc">
              Leading software solutions provider specializing in cutting-edge technology
              and innovative digital experiences.
            </p>

            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

          {/* 🔹 QUICK LINKS */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Products</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* 🔹 SERVICES */}
          <div className="col-md-3">
            <h5>Services</h5>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          {/* 🔹 CONTACT */}
          <div className="col-md-3">
            <h5>Contact Info</h5>

            <p><FaEnvelope /> nexoratechnologies@zohomail.in</p>
            <p><FaPhone /> 9943179437</p>
            <p><FaMapMarkerAlt /> 2nd floor, cheran nagar, coimbatore, Tamil Nadu</p>
          </div>

        </div>
      </div>

      {/* 🔻 BOTTOM LINE */}
      <div className="footer-bottom text-center">
        © 2025 Nexora Technologies. All rights reserved.
      </div>

      {/* 🔼 SCROLL BUTTON */}
      <div className="scroll-top">↑</div>

    </div>
  );
};

export default Footer;