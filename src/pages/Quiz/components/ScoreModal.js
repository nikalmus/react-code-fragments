const ScoreModal = ({ score, modalRef, render }) => {
  return (
    <div className="score-modal" ref={modalRef}>
      <strong>Your score:</strong>
      <p>{score}</p>
      {render()}
    </div>
  );
};
export default ScoreModal;
