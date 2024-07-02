"use client";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Translator from "../translator/Translator";

import s from "./modalStyle.module.scss";
import Title from "../Title/Title";
import { bool, boolean } from "yup";

const SupportUSBtnModal = ({
  stylesBtn,
  stylesBtnWrap,
}: {
  stylesBtn: string;
  stylesBtnWrap: string;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const allChecked = checkbox1 && checkbox2;

  const handleConfirmClick = () => {
    console.log("Button clicked");
    if (!allChecked) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      // Перехід до посилання виконується через вбудоване посилання в Button
    }
  };

  const modalContent = (
    <div className={s.modalContent}>
      <div className={s.titleThumb}>
        <Title>Зверніть увагу:</Title>
      </div>
      <p className={s.modalText}>
        Здійснивши благодійний внесок, ви підтримуєте проєкт Громадської
        організації “Пееі”. Його мета – забезпечити об’єкти критичної
        інфраструктури відновлюваними джерелами енергії – сонячними
        електростанціями.
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
          Я даю згоду про перерозподіл коштів на використання в інших проєктах,
          передбачених стратегією організації
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
          Я даю згоду, що сума пожертвування не підлягає поверненню
        </label>
      </section>
      {showWarning && (
        <p className={s.warningText}>
          Будь ласка, погодьтеся з умовами перед продовженням.
        </p>
      )}
      <div onClick={handleConfirmClick} className={s.btnThumb}>
        <Button
          disabled={!allChecked}
          newStyles={allChecked ? s.btn : s.btnDisabled}
          isLink={allChecked} // Використання isLink лише якщо всі чекбокси обрані
          href={
            allChecked ? "https://payhub.com.ua/#/service/98840" : undefined
          }
        >
          <Translator>confirm</Translator>
        </Button>
      </div>
    </div>
  );

  return (
    <div className={stylesBtnWrap}>
      <Button newStyles={stylesBtn} onClick={() => setModalVisible(true)}>
        <Translator>supportUs</Translator>
      </Button>
      <Modal
        show={modalVisible}
        onClose={() => setModalVisible(false)}
        children={modalContent}
        modalPosition={s.modal}
      />
    </div>
  );
};

export default SupportUSBtnModal;
