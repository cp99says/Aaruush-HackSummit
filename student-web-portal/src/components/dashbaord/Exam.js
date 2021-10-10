import React, { useState, useEffect, useRef } from "react";
import styles from "./Exam.module.scss";

import { useParams } from "react-router-dom";

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
  const [showResponse, setShowResponse] = useState(null);
  const [tempResponse, setTempResponse] = useState("");
  const responseRef = useRef();
  const params = useParams();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3600);

  function changeQues(action) {
    console.log(questionIterator);
    console.log(responses[questionIterator]);
    responseRef.current.reset();
    switch (action) {
      case "prev":
        // if (responses[questionIterator]) {
        //   setShowResponse(responses[questionIterator].response);
        // }
        if (questionIterator === 0) {
          return;
        } else {
          setQuestionIterator((prev) => {
            if (prev === 0) {
              setShowResponse(responses[prev].response);
            } else {
              setShowResponse(responses[prev - 1].response);
            }
            return prev - 1;
          });
        }
        break;
      case "next":
        if (responses[questionIterator]) {
          setShowResponse(responses[questionIterator].response);
        }
        setQuestionIterator((prev) => {
          // if (responses[prev]) {
          //   setShowResponse(responses[prev].response);
          // } else {
          //   setShowResponse(null);
          // }
          if (prev === 0 && responses[prev]) {
            setShowResponse(responses[prev].response);
          } else if (responses[prev + 1]) {
            setShowResponse(responses[prev + 1].response);
          } else {
            setShowResponse(null);
          }
          return prev + 1;
        });
        break;
      default:
        return 0;
    }
  }

  function getExamData() {
    getRequest(`/api/students/examination/${params.examId}`)
      .then((resp) => {
        console.log(resp);
        setExamData(resp.data);
      })
      .catch((err) => console.log(err));
  }

  function handleResponseChange(e) {
    setTempResponse(e.target.value);
  }

  function handleResponseSubmit(e) {
    e.preventDefault();
    const updateResponses = [...responses];
    const checkIndex = updateResponses.findIndex(
      (resp) => resp.questionID === examData.questions[questionIterator].question_id
    );
    if (checkIndex === -1) {
      updateResponses.push({
        questionID: examData.questions[questionIterator].question_id,
        response: tempResponse,
      });
    } else {
      updateResponses[checkIndex] = {
        questionID: examData.questions[questionIterator].question_id,
        response: tempResponse,
      };
    }
    console.log(updateResponses);
    setResponses(updateResponses);
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
              <form
                ref={responseRef}
                id="response"
                onChange={handleResponseChange}
                onSubmit={handleResponseSubmit}
              >
                <textarea
                  name="answer"
                  defaultValue={showResponse ? showResponse : null}
                  placeholder="Type your answer here..."
                ></textarea>
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
