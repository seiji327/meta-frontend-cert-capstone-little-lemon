import React from "react";

import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/Logo.svg" alt="" />
      <nav className="footer-menu">
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
      </nav>
      <nav className="footer-menu">
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
      </nav>
      <nav className="footer-menu">
        <h4>Social Media Links</h4>
        <section className="social-media-icons">
          <i className="fa social-media-icon">&#xf16d;</i>
          <i className="fa social-media-icon">&#xf230;</i>
          <i className="fa social-media-icon"> &#xf232;</i>
          <i className="fa social-media-icon"> &#xf0d5;</i>
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
