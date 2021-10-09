import React from "react";
import styles from "./Exam.module.scss";

import { Clock } from "react-feather";
import Webcam from "react-webcam";
import Button from "components/shared/Button";

import { colors } from "components/shared/colors";

export default function Exam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.globalTimer}>
        <Clock /> 01 : 05 : 50
      </div>
      <div className={styles.examContainer}>
        <div className={styles.exam}>
          <div className={styles.questionContainer}>
            <p>
              Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi soluta
              vero molestias illo facilis architecto atque inventore perferendis doloremque porro
              placeat accusamus dolore cupiditate possimus nulla dolorem itaque perspiciatis?
            </p>
          </div>
          <div className={styles.answerInput}>
            <form>
              <textarea name="answer"></textarea>
            </form>
          </div>
          <div className={styles.controllers}>
              <div className={styles.navigators}>
                  <Button name="PREV" backgroundColor={colors.GREEN} width="100px" />
                  <Button name="NEXT" backgroundColor={colors.GREEN} width="100px" />
              </div>
              <Button name="END EXAM" backgroundColor={colors.ORANGE} width="150px" />
          </div>
        </div>
        <div className={styles.monitoring}>
          <div className={styles.camera}>
            <Webcam  />
          </div>
        </div>
      </div>
    </div>
  );
}
