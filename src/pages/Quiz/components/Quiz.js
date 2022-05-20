import React, { useState, useEffect } from "react";
import QUESTIONS from "../Constants";
import Question from "./Question";
const Quiz = () => {
  const questions = QUESTIONS.map((q, i) => ({ ...q, id: i }));
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [next, setNext] = useState(0);
  const [done, setDone] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    next <= questions.length - 1
      ? setCurrentQuestion(questions[next])
      : setDone(true);
  }, [next]);
  return (
    <>
      <Question
        currentQuestion={currentQuestion}
        setNext={setNext}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
      <div>
        {done && userAnswers.length > 0 && (
          <>
            <span>Your answers were:</span>
            <ul className="no-bullets">
              {userAnswers.map((a, i) => (
                <li key={i}>
                  {a.id}:{a.value}:
                  {questions[i].correct.toString() === a.id.toString()
                    ? "correct"
                    : "incorrect"}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
