import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  assignee: string;
}

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
