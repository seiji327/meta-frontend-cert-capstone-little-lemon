import React, { useState } from "react";

import "../css/nav.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav" aria-label="Desktop navigation bar">
        <ul className="nav-list">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="/#order-online">Order Online</a>
          </li>
          <li>
            <a href="/#login">Login</a>
          </li>
        </ul>
      </nav>
      <img
        src="/hamburger-icon.svg"
        alt="hamburger menu icon"
        className="hamburger"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      />
      <nav
        className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`.trimEnd()}
        aria-label="mobile navigation menu"
      >
        <ul className="mobile-nav-list">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#menu">Menu</a>
          </li>
          <li>
            <a href="/#reservations">Reservations</a>
          </li>
          <li>
            <a href="/#order-online">Order Online</a>
          </li>
          <li>
            <a href="/#login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
