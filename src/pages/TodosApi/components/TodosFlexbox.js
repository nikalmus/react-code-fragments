import "./TodosFlexbox.css";

const TodosFlexbox = ({ data }) => {
  return (
    <div class="my-wrapper">
      <div className="row">
        <div className="name-cell">
          <strong>Title</strong>
        </div>
        <div className="completed-cell">
          <strong>Completed</strong>
        </div>
      </div>
      {data.map((item) => (
        <div class="row">
          <div class="name-cell">{`ID${item.id}: ${item.title}`}</div>
          <div class="completed-cell">{item.completed.toString()}</div>
        </div>
      ))}
    </div>
  );
};
export default TodosFlexbox;
