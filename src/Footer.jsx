import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/Logo.svg" alt="" />
      <div className="footer-menu">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#phone-number">Phone Number</a>
          </li>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#phone-number">Phone Number</a>
          </li>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
