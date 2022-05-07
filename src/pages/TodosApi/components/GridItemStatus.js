const GridItemStatus = ({ completed }) => {
  const style = completed ? "completed" : "not-completed";
  return <span className={style}>{completed.toString()}</span>;
};

export default GridItemStatus;
