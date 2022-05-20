import React, { useState } from "react";
import "./Question.css";

const Question = ({
  currentQuestion,
  setNext,
  userAnswers,
  setUserAnswers,
}) => {
  const { question, answers, correct, id } = currentQuestion;
  //const [goodAnswer, setGoodAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const recordAnswer = () => {
    const radioButtons = document.getElementsByName("answer");
    if (radioButtons.length > 0) {
      const result = [...radioButtons].filter((rb) => rb.checked === true);
      setSelectedAnswer(result[0]);
      console.log(
        "result[0].value:",
        result[0].value,
        "result[0].id:",
        result[0].id
      );
      setUserAnswers([
        ...userAnswers,
        {
          id: result[0].id,
          value: result[0].value,
        },
      ]);
      /* result[0].value === answers[correct]
        ? setGoodAnswer(true)
        : setGoodAnswer(false); */
      //accept any answer
    } else {
      console.log("OH NOES!");
    }
  };

  const next = () => {
    setNext(id + 1);
    //setGoodAnswer(false);
    selectedAnswer.checked = false;
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
      <button className="btn-some" disabled={!selectedAnswer} onClick={next}>
        Next
      </button>
    </>
  );
};

export default Question;
