import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  assignee: string;
}

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Priority: {task.priority}</p>
      <p>Assignee: {task.assignee}</p>
    </div>
  );
};

export default TaskItem;
