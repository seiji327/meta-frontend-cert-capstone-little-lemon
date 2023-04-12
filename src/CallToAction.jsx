import React from "react";

import "./callToAction.css";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <article>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </article>
      <img src="/hero-image.jpg" alt="Hero food" />
    </section>
  );
};

export default CallToAction;
