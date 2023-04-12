import React from "react";
import "./specials.css";

const Specials = () => {
  return (
    <section className="specials">
      <div className="heading">
        <h2>This Week's Specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="body">
        {/* Item 1 */}
        <article className="card">
          <img src="/greek-salad.jpg" alt="greek salad" />
          <div className="description">
            <div className="card-header">
              <p className="item-name">Greek Salad</p>
              <p className="price">$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quod nemo omnis deleniti nihil perspiciatis illo eaque laudantium.
              Fugit corporis minus aut illum fugiat? Ducimus itaque commodi
              inventore rem odit.
            </p>
            <p className="card-footer">Order a delivery</p>
          </div>
        </article>

        {/* Item 2 */}
        <article className="card">
          <img src="/greek-salad.jpg" alt="greek salad" />
          <div className="description">
            <div className="card-header">
              <p className="item-name">Greek Salad</p>
              <p className="price">$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quod nemo omnis deleniti nihil perspiciatis illo eaque laudantium.
              Fugit corporis minus aut illum fugiat? Ducimus itaque commodi
              inventore rem odit.
            </p>
            <p className="card-footer">Order a delivery</p>
          </div>
        </article>

        {/* Item 3 */}
        <article className="card">
          <img src="/greek-salad.jpg" alt="greek salad" />
          <div className="description">
            <div className="card-header">
              <p className="item-name">Greek Salad</p>
              <p className="price">$12.99</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quod nemo omnis deleniti nihil perspiciatis illo eaque laudantium.
              Fugit corporis minus aut illum fugiat? Ducimus itaque commodi
              inventore rem odit.
            </p>
            <p className="card-footer">Order a delivery</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Specials;
