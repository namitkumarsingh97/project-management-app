"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import TaskForm from "./TaskForm";
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

  const handleTaskCreation = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
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
