import "./TodosFlexbox.css";

const TodosFlexbox = ({ data }) => {
  return (
    <div className="my-wrapper">
      <div className="row">
        <div className="name-cell">
          <strong>Title</strong>
        </div>
        <div className="completed-cell">
          <strong>Completed</strong>
        </div>
      </div>
      {data.map((item) => (
        <div className="row">
          <div className="name-cell">{`ID${item.id}: ${item.title}`}</div>
          <div className="completed-cell">{item.completed.toString()}</div>
        </div>
      ))}
    </div>
  );
};
export default TodosFlexbox;
