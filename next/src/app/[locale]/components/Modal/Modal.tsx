import { useState, useEffect, useRef } from "react";
import s from "./Modal.module.scss";
import ReactDOM from "react-dom";
import colse from "../../../../../public/financial/closeIcon.svg";
import Image from "next/image";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  const [isBrowser, setBrowser] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBrowser(true);
  }, []);

  useEffect(() => {
    if (isBrowser && show) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isBrowser, show]);

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const modalContent = show ? (
    <div className={s.overlay}>
      <div ref={modalRef} className={s.modal}>
        <div className={s.header}>
          <a href="#" onClick={handleClose}>
            <button className="btn">
              <Image src={colse} alt="close" />
            </button>
          </a>
        </div>
        <div className={s.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const modalRoot = document.getElementById("modal-root");
    return modalRoot ? ReactDOM.createPortal(modalContent, modalRoot) : null;
  } else {
    return null;
  }
};

export default Modal;
