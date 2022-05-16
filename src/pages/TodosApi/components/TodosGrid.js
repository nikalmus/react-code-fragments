import GridItemTitle from "./GridItemTitle";
import GridItemStatus from "./GridItemStatus";
import "./TodosGrid.css";

const TodosGrid = ({ data }) => {
  return (
    <>
      <div className="my-grid">
        <span>
          <strong>Title</strong>
        </span>
        <span>
          <strong>Completed</strong>
        </span>
        {data.map((item) => (
          <>
            <GridItemTitle id={item.id} title={item.title} />
            <GridItemStatus completed={item.completed} />
          </>
        ))}
      </div>
    </>
  );
};

export default TodosGrid;
