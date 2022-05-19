import React, { useState, useEffect } from "react";
import QUESTIONS from "../Constants";
import Question from "./Question";
const Quiz = () => {
  const questions = QUESTIONS.map((q, i) => ({ ...q, id: i }));
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [next, setNext] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    next < questions.length - 1
      ? setCurrentQuestion(questions[next])
      : setDone(true);
  }, [next]);
  return (
    <>
      <Question currentQuestion={currentQuestion} setNext={setNext} />
      <div>{done ? <span className="done">You are done!</span> : ""}</div>
    </>
  );
};

export default Quiz;
