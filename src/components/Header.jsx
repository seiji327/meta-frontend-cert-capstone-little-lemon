import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./Nav";
import "../css/header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        src="/Logo.svg"
        alt="little lemon logo"
        onClick={() => navigate("/#home")}
      />
      <Nav />
    </header>
  );
};

export default Header;
