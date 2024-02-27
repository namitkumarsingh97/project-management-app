import React from "react";
import { render } from "@testing-library/react";
import TaskItem from "../app/components/Task/TaskItem";

describe("TaskItem component", () => {
  const mockTask = {
    id: 1,
    title: "Task Title",
    description: "Task Description",
    deadline: "2024-03-01",
    priority: "High",
    assignee: "Pawan",
  };

  test("renders task item with correct information", () => {
    const { getByText } = render(<TaskItem task={mockTask} />);

    expect(getByText("Task Title")).toBeInTheDocument();
    expect(getByText("Task Description")).toBeInTheDocument();
    expect(getByText("Deadline: 2024-03-01")).toBeInTheDocument();
    expect(getByText("Priority: High")).toBeInTheDocument();
    expect(getByText("Assignee: Pawan")).toBeInTheDocument();
  });
});
