import React, { useState } from "react";
import "./Question.css";

const Question = ({
  currentQuestion,
  setNextIndex,
  userAnswers,
  setUserAnswers,
}) => {
  const { question, answers, correct } = currentQuestion;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const recordAnswer = () => {
    const radioButtons = document.getElementsByName("answer");
    if (radioButtons.length > 0) {
      const result = [...radioButtons].filter((rb) => rb.checked === true);
      setSelectedAnswer(result[0]);
      setUserAnswers([
        ...userAnswers,
        {
          id: result[0].id, //radio button id, assigned on line: <input type="radio" id={i} value={a} name="answer" />
          value: result[0].value,
          correct: result[0].id.toString() === correct.toString(),
        },
      ]);
    } else {
      console.log("OH NOES!");
    }
  };

  const handleNextClick = () => {
    setNextIndex((prev) => prev + 1);
    selectedAnswer.checked = false;
    setSelectedAnswer(null);
  };

  return (
    <>
      <strong>{question}</strong>
      <fieldset>
        <legend>choose one</legend>
        {answers.map((a, i) => (
          <div className="answer" key={i}>
            <input type="radio" id={i} value={a} name="answer" />
            <label htmlFor={i}>{a}</label>
          </div>
        ))}
      </fieldset>
      <button className="btn-some" type="submit" onClick={recordAnswer}>
        Submit
      </button>
      <button
        className="btn-some"
        disabled={!selectedAnswer}
        onClick={handleNextClick}
      >
        Next
      </button>
    </>
  );
};

export default Question;
