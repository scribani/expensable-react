import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

test("Login page renders correctly and change input values on user event", () => {
  render(<Login />);

  const EMAIL = "test@mail.com";
  const PASSWORD = "super-secret";

  const emailInput = screen.getByRole("textbox");
  const passwordInput = screen.getByPlaceholderText(/\*\*\*\*\*\*\*\*/i);
  const submitButton = screen.getByRole("button", {
    name: /login/i,
  });

  userEvent.type(emailInput, EMAIL);
  userEvent.type(passwordInput, PASSWORD);

  // screen.debug();

  // Inputs and submit are rendered
  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
  expect(submitButton).toBeTruthy();

  // Inputs have updated value after event
  expect(emailInput.value).toBe(EMAIL);
  expect(passwordInput.value).toBe(PASSWORD);
});
