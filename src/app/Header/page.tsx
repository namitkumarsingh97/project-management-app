"use client";

import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Home: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/Progress" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/User" className={styles.navLink}>
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
