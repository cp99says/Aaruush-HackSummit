import React from "react";

import { Switch, Route } from "react-router-dom";
import Exam from "./Exam";
import StartExam from "./StartExam";

export default function DashboardRouter() {
  return (
    <Switch>
      <Route exact path="/dashboard/start" component={StartExam} />
      <Route exact path="/dashboard/exam" component={Exam} />
    </Switch>
  );
}
