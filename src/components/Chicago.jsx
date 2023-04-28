import React from "react";

import "../css/chicago.css";

const Chicago = () => {
  return (
    <section className="chicago" id="about">
      <article>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </article>
      <div className="overlay-images">
        <img src="/restaurant.jpg" alt="restaurant indoor" width={400} />
        <img src="/chef.jpg" alt="chefs" width={400} />
      </div>
    </section>
  );
};

export default Chicago;
