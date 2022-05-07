import "./Grid.css";
const Grid = () => {
  const doNothing = () => {
    console.log("ok");
  };
  return (
    <>
      <button className="btn" onClick={() => doNothing()}>
        ok
      </button>
      <div class="container">
        <div>
          <a href="#">Link 1</a>
        </div>
        <div>
          <a href="#">Link 2</a>
        </div>
        <div>
          <a href="#">Link 3</a>
        </div>
        <div>
          <a href="#">Link 4</a>
        </div>
        <div>
          <a href="#">Link 5</a>
        </div>
        <div>
          <a href="#">Link 6</a>
        </div>
      </div>
    </>
  );
};

export default Grid;
