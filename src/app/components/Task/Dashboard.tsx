import React, { useState } from "react";
import styles from "./index.module.css";
import TaskForm, { TaskFormData } from "./TaskForm";
import TaskList from "./TaskList";

interface Task {
  id: number;
  title: string;
  description: string;
  deadline: string;
  priority: string;
  assignee: string;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskCreation = (formData: TaskFormData) => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...formData,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <h2 className={styles.header}>Task Management App</h2>
      <TaskForm onTaskCreate={handleTaskCreation} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
