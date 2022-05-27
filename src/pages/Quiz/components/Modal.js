import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal");
  return createPortal(<div className="modal">{children}</div>, modalRoot);
};

export default Modal;
