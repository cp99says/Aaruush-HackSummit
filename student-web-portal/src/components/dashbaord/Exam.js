import React, { useState, useEffect } from "react";
import styles from "./Exam.module.scss";

import { Clock } from "react-feather";
import Webcam from "react-webcam";
import Button from "components/shared/Button";

import { colors } from "components/shared/colors";
import { getRequest } from "utils/requests";
import Timer from "./Timer";

export default function Exam() {
  const [examData, setExamData] = useState(null);
  const [questionIterator, setQuestionIterator] = useState(0);
  const [responses, setResponses] = useState([]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);

  function changeQues(action) {
    switch (action) {
      case "prev":
        if (questionIterator === 0) {
          return;
        } else {
          setQuestionIterator((prev) => prev - 1);
        }
        break;
      case "next":
        setQuestionIterator((prev) => prev + 1);
        break;
      default:
        return 0;
    }
  }

  function getExamData() {
    getRequest("/api/students/examination/4996a")
      .then((resp) => {
        console.log(resp);
        setExamData(resp.data);
      })
      .catch((err) => console.log(err));
  }

  function handleResponseChange(e) {
    e.preventDefault();
    const updateResponses = [...responses];
    const checkIndex = updateResponses.findIndex(
      (resp) => resp.questionID === examData.questions[questionIterator].question_id
    );
    if (checkIndex === -1) {
      updateResponses.push({
        questionID: examData.questions[questionIterator].question_id,
        response: e.target.value,
      });
    } else {
      updateResponses[checkIndex] = {
        questionID: examData.questions[questionIterator].question_id,
        response: e.target.value,
      };
    }
    setResponses(updateResponses);
    console.log(checkIndex);
  }

  useEffect(() => {
    getExamData();
  }, []);

  return (
    examData && (
      <div className={styles.wrapper}>
        <div className={styles.globalTimer}>
          <Timer expiryTimestamp={time} />
        </div>
        <div className={styles.examContainer}>
          <div className={styles.exam}>
            <div className={styles.questionContainer}>
              <p>
                Q{questionIterator + 1}) {examData.questions[questionIterator].question}
              </p>
            </div>
            <div className={styles.answerInput}>
              <form id="response" onSubmit={handleResponseChange}>
                <textarea name="answer" placeholder="Type your answer here..."></textarea>
              </form>
            </div>
            <div className={styles.controllers}>
              <div className={styles.navigators}>
                <Button
                  name="PREV"
                  onClick={changeQues.bind(this, "prev")}
                  backgroundColor={colors.GREEN}
                  width="100px"
                />
                <Button
                  name="NEXT"
                  type="submit"
                  form="response"
                  onClick={changeQues.bind(this, "next")}
                  backgroundColor={colors.GREEN}
                  width="100px"
                />
              </div>
              <Button name="END EXAM" backgroundColor={colors.ORANGE} width="150px" />
            </div>
          </div>
          <div className={styles.monitoring}>
            <div className={styles.camera}>
              <Webcam mirrored />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
