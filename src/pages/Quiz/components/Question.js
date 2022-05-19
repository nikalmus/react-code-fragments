import React, { useState } from "react";
import "./Question.css";
import QUESTIONS from "../Constants";

const Question = ({ currentQuestion, setNext }) => {
  const { question, answers, correct, id } = currentQuestion;
  const [goodAnswer, setGoodAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const checkAnswer = () => {
    const radioButtons = document.getElementsByName("answer");
    if (radioButtons.length > 0) {
      //const result = radioButtons.filter((rb) => rb.checked === true);
      const result = [...radioButtons].filter((rb) => rb.checked === true);
      setSelectedAnswer(result[0]);
      result[0].value === answers[correct]
        ? setGoodAnswer(true)
        : setGoodAnswer(false);
    } else {
      console.log("OH noes");
    }
  };
  const next = () => {
    setNext(id + 1);
    setGoodAnswer(false);
    selectedAnswer.checked = false;
  };

  return (
    <div className="question">
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
      <button className="btn-some" type="submit" onClick={checkAnswer}>
        Submit
      </button>
      <button
        className={`btn-some ${goodAnswer ? "btn-green" : ""}`}
        disabled={!goodAnswer}
        onClick={next}
      >
        {goodAnswer ? "Good! Next" : "Next"}
      </button>
    </div>
  );
};

export default Question;
