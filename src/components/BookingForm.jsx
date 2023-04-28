import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/bookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [bookingTime, setBookingTime] = useState(
    availableTimes?.length ? availableTimes[0] : undefined
  );
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occation, setOccation] = useState("birthday");

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    dispatch({ date: e.target.value });
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      date: date,
      bookingTime: bookingTime,
      numOfGuests: numOfGuests,
      occation: occation,
    };

    if (submitForm(formData)) {
      navigate("/confirmation", { state: { formData: formData } });
    } else {
      console.log("Errors have occurred ");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="res-name">Name</label>
      <input
        type="text"
        id="res-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => handleDateChange(e)}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        defaultValue={bookingTime}
        onChange={(e) => setBookingTime(e.target.value)}
        required
      >
        {availableTimes?.map((availableTime, key) => (
          <option key={key} value={availableTime} data-testid="option">
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numOfGuests}
        onChange={(e) => setNumOfGuests(e.target.value)}
        required
      />
      {numOfGuests < 1 ? (
        <p className="error">Number of guest has to be greater than 1</p>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        defaultValue={occation}
        onChange={(e) => setOccation(e.target.value)}
        required
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={numOfGuests < 1}
        className="submit-btn"
      />
    </form>
  );
};

export default BookingForm;
