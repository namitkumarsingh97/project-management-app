"use client";

import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import styles from "./index.module.css";

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>({
    firstName: "Namit",
    lastName: "Singh",
    email: "namit.singh@easyslr.com",
  });

  const handleProfileSubmit = (updatedProfile: ProfileData) => {
    setProfile(updatedProfile);
  };

  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.header}>Personal Information</h2>
      <ProfileForm profile={profile} onSubmit={handleProfileSubmit} />
    </div>
  );
};

export default UserProfile;
