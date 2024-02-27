import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileForm from "../app/components/Profile/ProfileForm";

describe("ProfileForm component", () => {
  const onSubmitMock = jest.fn();

  const profile = {
    firstName: "Rahul",
    lastName: "Dev",
    email: "rahul.dev@gmail.com",
  };

  test("renders form with correct initial values", () => {
    const { getByDisplayValue } = render(
      <ProfileForm profile={profile} onSubmit={onSubmitMock} />
    );

    expect(getByDisplayValue(profile.firstName)).toBeInTheDocument();
    expect(getByDisplayValue(profile.lastName)).toBeInTheDocument();
    expect(getByDisplayValue(profile.email)).toBeInTheDocument();
  });

  test("updates form state on input change", () => {
    const { getByDisplayValue } = render(
      <ProfileForm profile={profile} onSubmit={onSubmitMock} />
    );

    const newFirstName = "Jane";
    const firstNameInput = getByDisplayValue(profile.firstName);
    fireEvent.change(firstNameInput, { target: { value: newFirstName } });

    expect(getByDisplayValue(newFirstName)).toBeInTheDocument();
  });

  test("submits form with updated data", () => {
    const { getByText } = render(
      <ProfileForm profile={profile} onSubmit={onSubmitMock} />
    );

    const newFirstName = "Rahul";
    const firstNameInput = getByText("First Name");
    fireEvent.change(firstNameInput, { target: { value: newFirstName } });

    const saveButton = getByText("Save");
    fireEvent.click(saveButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      ...profile,
      firstName: newFirstName,
    });
  });
});
