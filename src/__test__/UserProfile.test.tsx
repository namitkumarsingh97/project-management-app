import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserProfile from "../app/components/Profile/UserProfile";

describe("UserProfile component", () => {
  test("renders user profile with correct initial values", () => {
    const { getByText } = render(<UserProfile />);

    expect(getByText("Personal Information")).toBeInTheDocument();
    expect(getByText("Namit")).toBeInTheDocument();
    expect(getByText("Singh")).toBeInTheDocument();
    expect(getByText("namit.singh@easyslr.com")).toBeInTheDocument();
  });

  test("updates user profile information on form submission", () => {
    const { getByText, getByDisplayValue } = render(<UserProfile />);
    const newFirstName = "John";
    const firstNameInput = getByDisplayValue("Namit");
    fireEvent.change(firstNameInput, { target: { value: newFirstName } });

    const saveButton = getByText("Save");
    fireEvent.click(saveButton);

    expect(getByText("Personal Information")).toBeInTheDocument();
    expect(getByText("John")).toBeInTheDocument();
    expect(getByText("Singh")).toBeInTheDocument();
    expect(getByText("namit.singh@easyslr.com")).toBeInTheDocument();
  });
});
