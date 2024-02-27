"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

interface TaskFormData {
  title: string;
  description: string;
  deadline: string;
  priority: string;
  assignee: string;
}

interface TaskFormProps {
  onTaskCreate: (task: TaskFormData) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreate }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    deadline: "",
    priority: "",
    assignee: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTaskCreate(formData);
    setFormData({
      title: "",
      description: "",
      deadline: "",
      priority: "",
      assignee: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className={styles.formInp}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className={styles.formInp}
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className={styles.formInp}
      />
      <input
        type="text"
        name="priority"
        placeholder="Priority"
        value={formData.priority}
        onChange={handleChange}
        className={styles.formInp}
      />
      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
        value={formData.assignee}
        onChange={handleChange}
        className={styles.formInp}
      />
      <button type="submit" className={styles.formBtn}>
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
