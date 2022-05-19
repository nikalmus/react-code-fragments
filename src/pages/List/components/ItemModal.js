import "./Modal.css";
const ItemModal = ({ item, setOpen, modalRef }) => {
  return (
    <div className="modal" ref={modalRef}>
      {item}
      <button className="btn" onClick={() => setOpen(null)}>
        Close
      </button>
    </div>
  );
};
export default ItemModal;
