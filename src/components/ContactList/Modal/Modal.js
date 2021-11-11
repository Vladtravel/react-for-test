import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const modalContainer = document.querySelector("#modal-root");

function Modal({ onCloseModal, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  return createPortal(
    <div className={s.Overlay} onClick={onCloseModal}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalContainer
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Modal;
