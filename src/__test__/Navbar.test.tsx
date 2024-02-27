import React from "react";
import { render } from "@testing-library/react";
import Home from "../app/Header/page";

describe("Navbar component", () => {
  test("renders navbar with correct links", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("User Profile")).toBeInTheDocument();
  });
});
