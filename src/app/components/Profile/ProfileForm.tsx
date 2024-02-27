"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileFormProps {
  profile: ProfileData;
  onSubmit: (profile: ProfileData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onSubmit }) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={styles.formInput}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={styles.formInput}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.formInput}
      />
      <button type="submit" className={styles.formBtn}>
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
