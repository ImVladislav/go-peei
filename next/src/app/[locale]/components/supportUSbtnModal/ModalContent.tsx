"use client";

import React, { useState } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Translator from "../translator/Translator";

import s from "./modalStyle.module.scss";

const ModalContent = ({ onConfirm }: { onConfirm: any }) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const allChecked = checkbox1 && checkbox2;

  const handleConfirmClick = () => {
    if (!allChecked) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      onConfirm();
    }
  };
  return (
    <div className={s.modalContent}>
      <div className={s.titleThumb}>
        <Title>Зверніть увагу:</Title>
      </div>
      <p className={s.modalText}>
        <Translator>agreement</Translator>
      </p>

      <section className={s.section}>
        <label className={`${s.labelBlock} ${s.modalText}`}>
          <input
            className={`${s.labelinput} ${s.modalText}`}
            type="checkbox"
            checked={checkbox1}
            onChange={(e) => {
              setCheckbox1(e.target.checked);
              setShowWarning(false); // Скинути попередження при зміні чекбоксу
            }}
          />
          <Translator>firstAgree</Translator>
        </label>
        <label className={`${s.labelBlock} ${s.modalText}`}>
          <input
            className={`${s.labelinput} ${s.modalText}`}
            type="checkbox"
            checked={checkbox2}
            onChange={(e) => {
              setCheckbox2(e.target.checked);
              setShowWarning(false); // Скинути попередження при зміні чекбоксу
            }}
          />
          <Translator>secoundAgree</Translator>
        </label>
      </section>
      {showWarning && (
        <p className={s.warningText}>
          Будь ласка, погодьтеся з умовами перед продовженням.
        </p>
      )}
      <div onClick={handleConfirmClick} className={s.btnThumb}>
        <Button
          checked={!allChecked}
          // newStyles={allChecked ? s.btn : s.btnDisabled}
          newStyles={s.btn}
          isLink={allChecked} // Використання isLink лише якщо всі чекбокси обрані
          href={allChecked ? "/financial" : undefined}
        >
          <Translator>confirm</Translator>
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
