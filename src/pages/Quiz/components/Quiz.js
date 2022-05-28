import React, { useState, useEffect, useRef } from "react";
import QUESTIONS from "../Constants";
import Question from "./Question";
import Modal from "./Modal";
import ScoreModal from "./ScoreModal";
import Backdrop from "./Backdrop";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS[0]);
  const [nextIndex, setNextIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [scoreRequested, setScoreRequested] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    nextIndex <= QUESTIONS.length - 1
      ? setCurrentQuestion(QUESTIONS[nextIndex])
      : setScoreRequested(true);
  }, [nextIndex]);

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
      (correctUserAnswers?.length / userAnswers.length).toFixed(2) * 100
    }%`;
  };

  const renderUserAnswers = () => {
    modalRef.current && console.log(modalRef.current.getClientRects());
    return (
      <>
        <strong>Your answers were:</strong>
        <ul className="no-bullets">
          {userAnswers.map((a, i) => (
            <li key={i}>{`${a.value} : ${a.correct}`}</li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <>
      <Question
        currentQuestion={currentQuestion}
        setNextIndex={setNextIndex}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
      <div>
        {scoreRequested && userAnswers.length > 0 && (
          <>
            <Backdrop />
            <Modal>
              <ScoreModal
                score={getScore()}
                modalRef={modalRef}
                render={renderUserAnswers}
              />
            </Modal>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;

/*
Notes on states:
1) currentQuestion is object that looks like this:
 {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  }
It is passed as props from Quiz to Question component where it is used
in Question component in the following ways:

a) to display the question:
return (
    <>
      <strong>{question}</strong>
      //...

b) to display multiple choice answers as labels to radio buttons:
return (
    <>
    //...
   {answers.map((a, i) => (
          <div className="answer" key={i}>
            <input type="radio" id={i} value={a} name="answer" />
            <label htmlFor={i}>{a}</label>
          </div>
        ))}

c) to set "correct" boolean flag on the current answer selected by user and 
update userAnsers array accordingly inside the handler that is called on "Submit" click:

const recordAnswer = () => {
    //...
      setUserAnswers([
        ...userAnswers,
        {
          id: result[0].id,
          value: result[0].value,
          correct: result[0].id.toString() === correct.toString(),
        },
      ]);
    //...
  };

2) nextIndex is index of next question.
setNextIndex is passed as prop from Quiz to Question.
In Question setNextIndex is called in next button onClick event:
const handleNextClick = () => {
    setNextIndex(id + 1);
    //...
id, which is used in setNextIndex is a part of destructured prop currentQuestion 
that was passed to Question component via props from Quiz:
const { question, answers, correct, id } = currentQuestion;
I need to pass currentQuestion to Question component regardless, but I think there is a better
way to call nextIndex setter, by incrementing prev value in a functional form:
setNextIndex((prev) => prev + 1);

This change - elimination of id from setNextIndex revealed that there was never a need to add id
to question object. I used to do this:
//const questions = QUESTIONS.map((q, i) => ({ ...q, id: i }));
There is no need for that. I can work directly with QUESTIONS constant, and replaced
the commented out line with the one below:
//const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS[0]);

Also note that the id that I got rid of has nothing to do with radio button ids that are 
assigned on line: <input type="radio" id={i} value={a} name="answer" /> in Question component's jsx

3) userAnswers and its setter, setUserAnswers are passed as props from Quiz to Question.
I need both to be passed because when selection is made by the user both are used to update the array:

setUserAnswers([
  ...userAnswers,
  {
    id: result[0].id, 
    value: result[0].value,
    correct: result[0].id.toString() === correct.toString(),
  },
//...

4) scoreRequested state is used locally in Quiz component to trigger popup of the modal that
displays score. It happens on click of "next" button when the last question is answered.
useEffect(() => {
    nextIndex <= QUESTIONS.length - 1
      ? setCurrentQuestion(QUESTIONS[nextIndex])
      : setScoreRequested(true);
  }, [nextIndex]);

It is later set to false if a user clicks outside of the modal.
*/
