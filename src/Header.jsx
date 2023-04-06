import React from "react";
import Nav from "./Nav";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/Logo.svg" alt="little lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
