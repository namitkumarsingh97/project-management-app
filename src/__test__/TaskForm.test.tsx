import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskForm from "../app/components/Task/TaskForm";

describe("TaskForm component", () => {
  test("renders form with correct initial values", () => {
    const { getByPlaceholderText, getByText } = render(
      <TaskForm onTaskCreate={() => {}} />
    );

    expect(getByPlaceholderText("Title")).toBeInTheDocument();
    expect(getByPlaceholderText("Description")).toBeInTheDocument();
    expect(getByPlaceholderText("Priority")).toBeInTheDocument();
    expect(getByPlaceholderText("Assignee")).toBeInTheDocument();
    expect(getByText("Create Task")).toBeInTheDocument();
  });

  test("updates form state on input change", () => {
    const { getByPlaceholderText } = render(
      <TaskForm onTaskCreate={() => {}} />
    );

    const newTitle = "New Task";
    const titleInput = getByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: newTitle } });

    expect(titleInput).toHaveValue(newTitle);
  });

  test("submits form with correct data", () => {
    const mockTaskCreate = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TaskForm onTaskCreate={mockTaskCreate} />
    );

    const newTitle = "New Task";
    const titleInput = getByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: newTitle } });

    const createButton = getByText("Create Task");
    fireEvent.click(createButton);

    expect(mockTaskCreate).toHaveBeenCalledWith({
      title: newTitle,
      description: "",
      deadline: "",
      priority: "",
      assignee: "",
    });
  });
});
