const Board = ({ selectSquare, snapshot }) => {
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {snapshot[i]}
      </button>
    );
  }
  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
