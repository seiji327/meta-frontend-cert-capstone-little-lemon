import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);

  const submitBtn = screen.getByText(/Make Your reservation/);

  expect(submitBtn).toBeInTheDocument();
});

test("to see if the date picker is working correctly", async () => {
  const view = render(<BookingForm />);

  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.select(dateSelector, { target: { value: "2023-01-01" } });
  expect(dateSelector.value).toEqual("2023-01-01");

  const timeSelector = screen.getByLabelText(/Choose time/);

  // await waitFor(() => screen.findByTestId("option"));
  // console.log(screen.getAllByTestId("option"));
  // fireEvent.change(timeSelector, { target: { value: "18:00" } });

  //expect(timeSelector.value).toEqual("18:00");
});
