import { screen,render,within, findByText } from "@testing-library/react";
import App from "./App";
import userEvent from '@testing-library/user-event'

describe("App", () => {
  test("render the App component", () => {
    render(<App />);
    expect(screen.getByText(/posts manager/i)).toBeInTheDocument();
  });
  test('fetches posts on mount', async () => {
    render(<App />);
    expect(await screen.findByText(/first post/i)).toBeInTheDocument();
    expect(await screen.findByText(/second post/i)).toBeInTheDocument();
    // expect(await screen.findByText(/third post/i)).toBeInTheDocument();
  });
});
