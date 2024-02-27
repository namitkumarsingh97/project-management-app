import React from "react";
import { render } from "@testing-library/react";
import TaskList from "../app/components/Task/TaskList";

describe("TaskList component", () => {
  const mockTasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 Description",
      deadline: "2024-03-05",
      priority: "High",
      assignee: "Ram",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Task 2 Description",
      deadline: "2024-03-07",
      priority: "Medium",
      assignee: "Rajeev",
    },
  ];

  test("renders task list with correct number of tasks", () => {
    const { getAllByTestId } = render(<TaskList tasks={mockTasks} />);

    expect(getAllByTestId("task-item")).toHaveLength(mockTasks.length);
  });
});
