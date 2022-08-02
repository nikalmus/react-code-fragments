const Item = ({ item, onDragStart }) => {
  return (
    <div
      id="dragme"
      className="draggable"
      draggable="true"
      style={{ backgroundColor: `${item.color}` }}
      onDragStart={(e) => onDragStart(e, item)}
    >
      &nbsp;
    </div>
  );
};

export default Item;
