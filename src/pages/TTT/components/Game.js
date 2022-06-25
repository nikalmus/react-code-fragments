import React from "react";
import Board from "./Board";
import "./Game.css";
const emptySquares = new Array(9).fill(null);

const Game = () => {
  const [history, setHistory] = React.useState([emptySquares]);
  const [move, setMove] = React.useState(0);

  //derived values:
  const snapshot = history[move];
  const nextValue = calculateNextValue();
  const winner = calculateWinner();
  const status = calculateStatus();

  function calculateNextValue() {
    return snapshot.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  function calculateWinner() {
    const pathsToVictory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = null;
    for (let i = 0; i < pathsToVictory.length; i++) {
      const [a, b, c] = pathsToVictory[i];
      if (
        snapshot[a] &&
        snapshot[a] === snapshot[b] &&
        snapshot[a] === snapshot[c]
      ) {
        winner = snapshot[a];
      }
    }
    return winner;
  }

  function calculateStatus() {
    return winner
      ? `Winner: ${winner}`
      : snapshot.every(Boolean)
      ? "Tie"
      : `Next move: ${nextValue}`;
  }

  function selectSquare(boardIndex) {
    console.log("selectSquare", boardIndex);
    const historyCopy = [...history];
    const snapshotCopy = [...snapshot];
    snapshotCopy[boardIndex] = nextValue;
    setHistory([...historyCopy, snapshotCopy]);
    setMove(historyCopy.length);
  }

  function reset() {
    setHistory([emptySquares]);
    setMove(0);
  }

  //when setMove(i) snpshot changes to history[i]
  const moves = history.map((_, i) => {
    return (
      <li key={i}>
        <button
          disabled={i === move}
          onClick={() => setMove(i)}
        >{`Go to move #${i}`}</button>
      </li>
    );
  });

  return (
    <>
      <Board selectSquare={selectSquare} snapshot={snapshot} />
      <button onClick={reset}>reset</button>
      <div>{status}</div>
      <ol>{moves}</ol>
    </>
  );
};

export default Game;
