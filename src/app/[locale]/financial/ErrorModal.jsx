import React from "react";

const ErrorModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Помилка під час оплати</h2>
        <p>Щось пішло не так. Будь ласка, спробуйте знову.</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default ErrorModal;
