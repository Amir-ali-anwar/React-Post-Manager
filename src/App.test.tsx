import { screen,render,within, findByText,cleanup  } from "@testing-library/react";
import App from "./App";
import userEvent from '@testing-library/user-event'

import server from "./mocks/server";


beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
describe("App", () => {
  
  test("render the App component", () => {
    render(<App />);
    expect(screen.getByText(/posts manager/i)).toBeInTheDocument();
  });
  
  test('fetches posts on mount', async () => {
    render(<App />);
    expect(await screen.findByText(/first post/i)).toBeInTheDocument();
  });
  
});
