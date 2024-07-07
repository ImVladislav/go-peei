"use client";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import s from "./Financial.module.scss";
import { useTranslation } from "react-i18next";
import LiqpayButtonImage from "../../../../public/financial/liqpayLogo.png";

interface LiqPayButtonProps {
  public_key: string;
  private_key: string;
  amount: number;
  description: string;
}

const LiqPayButton: React.FC<LiqPayButtonProps> = ({
  public_key,
  private_key,
  amount,
  description,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const generateLiqPayData = (params: Record<string, any>) => {
    const jsonString = JSON.stringify(params);
    const base64Data = Buffer.from(jsonString).toString("base64");
    const signature = CryptoJS.SHA1(
      private_key + base64Data + private_key
    ).toString(CryptoJS.enc.Base64);
    return { data: base64Data, signature };
  };

  const handlePaymentSuccess = () => {
    setShowSuccessModal(true);
    setShowModal(true);
    console.log("success");
  };

  const handlePaymentError = () => {
    setShowErrorModal(true);
    console.log("error");
  };

  const params = {
    version: 3,
    public_key,
    action: "pay",
    amount,
    currency: "UAH",
    description,
    order_id: `order_id_${Date.now()}`,
  };

  const { data, signature } = generateLiqPayData(params);

  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
    >
      <input type="hidden" name="data" value={data} />
      <input type="hidden" name="signature" value={signature} />
      <input
        className={s.financial__btnBlock}
        type="image"
        src={LiqpayButtonImage.src}
        alt="Pay"
      />
    </form>
  );
};

export default LiqPayButton;
