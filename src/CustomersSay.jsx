import React from "react";
import "./customersSay.css";

const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h2>Testimonials</h2>
      <div className="body">
        <article className="rating-card">
          <h4>4.2 / 5</h4>
          <div className="customer-info">
            <img src="/rating-sample.jpg" alt="" />
            <p>Mario</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </p>
        </article>
        <article className="rating-card">
          <h4>4.2 / 5</h4>
          <div className="customer-info">
            <img src="/rating-sample.jpg" alt="" />
            <p>Mario</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </p>
        </article>
        <article className="rating-card">
          <h4>4.2 / 5</h4>
          <div className="customer-info">
            <img src="/rating-sample.jpg" alt="" />
            <p>Mario</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            asperiores rem rerum omnis ab. Mollitia,
          </p>
        </article>
      </div>
    </section>
  );
};

export default CustomersSay;
