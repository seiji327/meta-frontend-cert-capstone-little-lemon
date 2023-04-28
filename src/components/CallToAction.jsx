import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/callToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="call-to-action">
      <article>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button onClick={() => navigate("/booking")}>Reserve a Table</button>
      </article>
      <img src="/hero-image.jpg" alt="Hero food" />
    </section>
  );
};

export default CallToAction;
