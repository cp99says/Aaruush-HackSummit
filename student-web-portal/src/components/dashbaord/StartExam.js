import styles from "./StartExam.module.scss";
import React from "react";

import Button from "components/shared/Button";
import { colors } from "components/shared/colors";
import exam from "assets/exam.png";

export default function StartExam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.vector}>
        <img src={exam} alt="" />
      </div>
      <div className={styles.form}>
        <form>
          <label>Enter exam code</label>
          <input type="text" />
          <Button name="START EXAM" backgroundColor={colors.PRIMARY} />
        </form>
      </div>
    </div>
  );
}
