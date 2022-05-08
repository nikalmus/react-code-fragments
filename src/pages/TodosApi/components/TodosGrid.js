//import GridItem from "./GridItem";
import "./TodosGrid.css";

const TodosGrid = ({ data }) => {
  return (
    <>
      <div className="grid">
        <span>
          <strong>Title</strong>
        </span>
        <span>
          <strong>User</strong>
        </span>
        <span>
          <strong>Completed</strong>
        </span>
        {data.map((item) => (
          <>
            <span>{`${item.id}:${item.title}`}</span>
            <span>{item.userId.toString()}</span>
            <span>{item.completed.toString()}</span>
          </>
        ))}
      </div>
    </>
  );
};

export default TodosGrid;
