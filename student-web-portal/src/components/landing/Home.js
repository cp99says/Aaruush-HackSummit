import React from "react";
import styles from "./Home.module.scss";
import Navbar from "components/landing/Navbar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.heroImageContainer}></div>
    </div>
  );
}
