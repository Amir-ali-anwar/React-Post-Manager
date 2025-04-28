import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";

export const getFormElements = () => {
  return {
    input: screen.getByRole("textbox", { name: "/title/i" }),
    button: screen.getByRole("button", { name: "/add post/i" }),
  };
};
