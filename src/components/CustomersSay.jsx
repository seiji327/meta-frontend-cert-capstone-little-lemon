import React from "react";

import RatingStars from "./RatingStars";
import "../css/customersSay.css";

const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h2>Testimonials</h2>
      <div className="body">
        {/* CARD 1 */}
        <article className="rating-card">
          <img src="/jess.jpg" alt="" />
          <p className="name">Jess</p>
          <p className="visited">Visited on Apr, 2021</p>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </blockquote>
          <RatingStars stars={4} />
        </article>
        {/* CARD 2 */}
        <article className="rating-card">
          <img src="/sergio.jpg" alt="" />
          <p className="name">Sergio</p>
          <p className="visited">Visited on May, 2019</p>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </blockquote>
          <RatingStars stars={3} />
        </article>
        {/* CARD 3 */}
        <article className="rating-card">
          <img src="/anna.jpg" alt="" />
          <p className="name">Anna</p>
          <p className="visited">Visited on Nov, 2022</p>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </blockquote>
          <RatingStars stars={5} />
        </article>
      </div>
    </section>
  );
};

export default CustomersSay;
