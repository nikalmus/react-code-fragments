import "./TodosFlexbox.css";

const TodosFlexbox = ({ data }) => {
  return (
    <div class="wrapper">
      <div className="row">
        <div className="column">
          <strong>Title</strong>
        </div>
        <div className="column">
          <strong>Completed</strong>
        </div>
      </div>
      {data.map((item) => (
        <div class="row">
          <div class="column">
            <div class="name-column">{`ID${item.id}: ${item.title}`}</div>
          </div>
          <div class="column">
            <div
              class={`completed-column ${
                item.completed ? "completed" : "not-completed"
              }`}
            >
              {item.completed.toString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodosFlexbox;
