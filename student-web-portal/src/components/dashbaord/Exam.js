import React from "react";
import styles from "./Exam.module.scss";

import { Clock } from "react-feather";

export default function Exam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.globalTimer}>
        <Clock /> 01 : 05 : 50
      </div>
      <div className={styles.questionContainer}>
        <p>
          Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi soluta vero
          molestias illo facilis architecto atque inventore perferendis doloremque porro placeat
          accusamus dolore cupiditate possimus nulla dolorem itaque perspiciatis?
        </p>
      </div>
      <div className={styles.answerInput}>
        <form>
          <textarea name="answer"></textarea>
        </form>
      </div>
    </div>
  );
}
