import React from "react";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Успішно оплачено!</h2>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default SuccessModal;
