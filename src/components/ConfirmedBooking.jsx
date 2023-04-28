import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./Header";

import "../css/confirmedBooking.css";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const { formData } = useLocation().state;

  return (
    <main className="confirmed-booking">
      <Header />
      <h1>Your booking has been confirmed!</h1>

      <section className="reservation-detail">
        {Object.entries(formData).length
          ? Object.entries(formData).map(([key, value]) => (
              <>
                <p className="label">
                  {key === "numOfGuests" ? "GUESTS" : key.toUpperCase()}
                </p>
                <p className="user-selected-data">
                  {typeof value === "string" ? value.toUpperCase() : value}
                </p>
              </>
            ))
          : null}
      </section>

      <button onClick={() => navigate("/")}>Home</button>
    </main>
  );
};

export default ConfirmedBooking;
