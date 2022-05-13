import GridItemTitle from "./GridItemTitle";
import GridItemStatus from "./GridItemStatus";
import "./TodosGrid.css";
const TodosFlexbox = ({ data }) => {
  return (
    <div class="wrapper">
      <span>
        <strong>Title</strong>
      </span>
      <span>
        <strong>Completed</strong>
      </span>
      {data.map((item) => (
        <>
          <GridItemTitle className="item" id={item.id} title={item.title} />
          <GridItemStatus className="item" completed={item.completed} />
        </>
      ))}
    </div>
  );
};
export default TodosFlexbox;
