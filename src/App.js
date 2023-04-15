import "./css/App.css";

import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<BookingPage />} path="/booking" />
      </Routes>
    </>
  );
}

export default App;
