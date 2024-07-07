import React from "react";
import s from "./Financial.module.scss";
import sucssesPaymetnIcon from "../../../../public/financial/sucsessPayment.svg";

import Image from "next/image";
const ErrorModal = ({ onClose }) => {
  return (
    <div className={s.modal__content}>
      <div className={s.modal__paymentIcomThumb}>
        <Image src={sucssesPaymetnIcon} alt="Payment Sucsess" />
      </div>
      <h2>Виникла проблема спробуйте ще</h2>
    </div>
  );
};

export default ErrorModal;
