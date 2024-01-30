import React from 'react';
import '@testing-library/jest-dom';
import { unmountComponentAtNode } from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from '../components/Login';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Login", () => {
  it("renders Login without crashing", () => {
    render(<Login  />);
  });

  it("displays errors when email or password isn't valid", () => {
    const result = render(<Login />);
    const emailInput = result.container.querySelector('#email-input');
    const submitButton = screen.getByRole("button");
    // Test no email or password
    fireEvent.click(submitButton);
    // Check for the helper text components
    const emailHelper = result.container.querySelector('#email-input-helper-text');
    expect(emailHelper).toBeInTheDocument();
    const passwordHelper = result.container.querySelector('#standard-password-input-helper-text');
    expect(passwordHelper).toBeInTheDocument();
    // Check for the expected error messages
    const noEmailError = screen.getByText("email is required");
    expect(noEmailError).toBeVisible();
    const passwordError = screen.getByText("password must be 1 or more characters");
    expect(passwordError).toBeVisible();
    // Test an invalid email
    fireEvent.change(emailInput, { target: { value: "123" } });
    fireEvent.click(submitButton);
    const invalidEmailError = screen.getByText("please enter a valid email");
    expect(invalidEmailError).toBeVisible();

  });

  it("does not display errors when valid email and password are given", () => {
    const mockOnLogin = jest.fn();
    const result = render(<Login onLogin={mockOnLogin} />);
    const emailInput = result.container.querySelector('#email-input');
    const passwordInput = result.container.querySelector('#standard-password-input');
    const submitButton = screen.getByRole("button");
    // Test a valid email and password email
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.click(submitButton);
    // Check that error helper text is not present
    const emailHelper = result.container.querySelector('#email-input-helper-text');
    expect(emailHelper).not.toBeInTheDocument();
    const passwordHelper = result.container.querySelector('#standard-password-input-helper-text');
    expect(passwordHelper).not.toBeInTheDocument();
  });

  it("only submits when email and password are valid", () => {
    const mockOnLogin = jest.fn();
    const result = render(<Login onLogin={mockOnLogin} />);
    const emailInput = result.container.querySelector('#email-input');
    const passwordInput = result.container.querySelector('#standard-password-input');
    const submitButton = screen.getByRole("button");
    // The onLogin function should not fire, since there was no email or password
    fireEvent.click(submitButton);
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "12345" } });
    // The onLogin should fire once, since this time there was an email and password
    fireEvent.click(submitButton);
    expect(mockOnLogin.mock.calls).toHaveLength(1);
  })
});
