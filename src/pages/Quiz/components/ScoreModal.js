import "./ScoreModal.css";
const ScoreModal = ({ score, modalRef }) => {
  return (
    <div className="score-modal" ref={modalRef}>
      <strong>Your score:</strong>
      <p>{score}</p>
    </div>
  );
};
export default ScoreModal;
