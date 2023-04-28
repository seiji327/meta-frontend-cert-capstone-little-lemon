import React from "react";

import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

import "../css/bookingPage.css";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <main className="bookingPage">
      <Header />
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </main>
  );
};

export default BookingPage;
