import { fireEvent, render, screen } from "@testing-library/react";

import Home from "./index";

describe("HomeScreen Component", () => {
  it("should render Home with 'Hello berimbau' message", () => {
    render(<Home />);

    const textHello = screen.getByText("Hello berimbau");
    expect(textHello).toBeInTheDocument();
  });
  it("should render the initial message 'vasco da gama' ", () => {
    render(<Home />);

    const InitialMessageText = screen.getByText("vasco da gama");
    expect(InitialMessageText).toBeInTheDocument();
  });
  it("should change the message on button click", () => {
    render(<Home />);

    const button = screen.getByText(/change message/i);
    fireEvent.click(button);

    const newMessage = screen.getByText(/new message!/i);
    expect(newMessage).toBeInTheDocument();
  });
});
