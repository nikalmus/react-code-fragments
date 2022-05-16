import "./SomeContainer.css";
const SomeContainer = ({ cssClass }) => {
  const cssClasses = `"container" ${cssClass}`;
  return (
    <div className={cssClasses}>
      <div className="cell">one</div>
      <div className="cell">two</div>
      <div className="cell">three</div>
    </div>
  );
};

export default SomeContainer;
