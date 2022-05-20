import React, { useState, useEffect, useRef } from "react";
import QUESTIONS from "../Constants";
import Question from "./Question";
import ScoreModal from "./ScoreModal";

const Quiz = () => {
  const questions = QUESTIONS.map((q, i) => ({ ...q, id: i }));
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [next, setNext] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [scoreRequested, setScoreRequested] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    next <= questions.length - 1
      ? setCurrentQuestion(questions[next])
      : setScoreRequested(true);
  }, [next]);

  useEffect(() => {
    const handleClickOutsideModal = (e) => {
      scoreRequested &&
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        setScoreRequested(false);
    };
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideModal);
  }, [scoreRequested]);

  const getScore = () => {
    const correctUserAnswers = userAnswers.filter(
      (answer) => answer.correct === true
    );
    return `${
      (correctUserAnswers.length / userAnswers.length).toFixed(2) * 100
    }%`;
  };

  return (
    <>
      <Question
        currentQuestion={currentQuestion}
        setNext={setNext}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
      <div>
        {scoreRequested && userAnswers.length > 0 && (
          <>
            <span>Your answers were:</span>
            <ul className="no-bullets">
              {userAnswers.map((a, i) => (
                <li key={i}>{`${a.value} : ${a.correct}`}</li>
              ))}
            </ul>
            <ScoreModal score={getScore()} modalRef={modalRef} />
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
