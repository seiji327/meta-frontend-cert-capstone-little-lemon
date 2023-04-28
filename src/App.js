import "./css/App.css";

import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import { fetchAPI, submitAPI } from "./temp.js";

function App() {
  // const initialAvailableTimes = [
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ];

  const navigation = useNavigate();

  const submitForm = (formData) => submitAPI(formData);

  const updateTimes = (state, action) => {
    if (action.date !== undefined) {
      return fetchAPI(new Date(action.date));
    }
    return state;
  };

  const initializeTimes = () => fetchAPI(new Date());

  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route
        element={
          <BookingPage
            availableTimes={state}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
        path="/booking"
      />
      <Route element={<ConfirmedBooking />} path="/confirmation" />
    </Routes>
  );
}

export default App;
