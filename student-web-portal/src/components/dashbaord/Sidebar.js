import React from "react";
import styles from "./Sidebar.module.scss";

import { BookOpen, CheckSquare, PieChart } from "react-feather";

import logo from "assets/logo.png";

export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.link}>
        <button>
          <BookOpen /> Start an exam
        </button>
        <button>
          <CheckSquare /> Completed Exams
        </button>
        <button>
          <PieChart /> Analysis
        </button>
      </div>
    </div>
  );
}
