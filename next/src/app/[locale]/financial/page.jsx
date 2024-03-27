"use client";
import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";
import dynamic from "next/dynamic";

import Image from "next/image";
import s from "./Financial.module.scss";
import Link from "next/link";
import copyLickIcon from "../../../../public/financial/Icon.svg";
import container from "../../styles/utils/Container.module.scss";
import GooglePayButtonComponent from "./GooglePayButtonComponent";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import Modal from "@/app/[locale]/components/Modal/Modal";
import { useTranslation } from "react-i18next";

// const DynamicGooglePayButton = dynamic(
//   () =>
//     import("@google-pay/button-react").catch(() => ({
//       default: () => <div>Модуль не знайдено</div>,
//     })),
//   { ssr: false }
// );

const FinancialPage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handlePaymentSuccess = () => {
    setShowSuccessModal(true);
    setShowModal(true);
    console.log("sucsess");
  };

  const handlePaymentError = () => {
    setShowErrorModal(true);
    console.log("error");
  };
  const [fields] = useState([
    {
      key: "accountNumberFormat",
      label: "Номер рахунку в форматі",
      value: "ГО 'Платформа еко-енергетичних ініціатив'",
      id: "account",
    },
    {
      key: "recipient",
      label: "Отримувач",
      value: "Громадська Організація 'Платформа еко-енергетичних ініціатив'",
      id: "client",
    },
    {
      key: "iban",
      label: "IBAN",
      value: "UA893348510000000026002234362",
      id: "iban",
    },
    { key: "edrpou", label: "ЄДРПОУ", value: "45068741", id: "edrpou" },
    {
      key: "purposeOfPayment",
      label: "Призначення платежу",
      value: "Благодійна пожертва на статутні цілі",
      id: "purpose",
    },
  ]);

  const copyToClipboard = (value) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log("Value copied to clipboard:", value);
      })
      .catch((error) => {
        console.error("Failed to copy value to clipboard:", error);
      });
  };

  const [donationAmount, setDonationAmount] = useState(0.0);
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"],
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantName: "Your Merchant Name",
      merchantId: "yourMerchantId",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: donationAmount,
      currencyCode: "USD",
      countryCode: "US",
    },
  };

  // const onPaymentSuccess = (paymentResult) => {
  //   console.log("Payment success:", paymentResult);
  //   // Обробка успішного платежу
  // };

  // const onPaymentError = (error) => {
  //   console.error("Payment error:", error);
  //   // Обробка помилки платежу
  // };

  const handleAmountButtonClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (
    <div className={s.financial__bg}>
      <div className={container.container}>
        <section className={s.financial__container}>
          <h1 className={s.financial__title}>{t("financialSupport")}</h1>
          <div className={s.financial__container_mainBlock}>
            <div>
              <div className={s.financial__container_leftBlock}>
                <h2 className={s.financial__subTitle}>
                  {t("selectContributionAmount")}
                </h2>
                <div className="buttons">
                  <button
                    className={s.financial__fixedAmountDonatBtn}
                    onClick={() => handleAmountButtonClick("100.00")}
                  >
                    100
                  </button>
                  <button
                    className={s.financial__fixedAmountDonatBtn}
                    onClick={() => handleAmountButtonClick("200.00")}
                  >
                    200
                  </button>
                  <button
                    className={s.financial__fixedAmountDonatBtn}
                    onClick={() => handleAmountButtonClick("300.00")}
                  >
                    300
                  </button>
                </div>
                <input
                  className={`${s.financial__fixedAmountDonatBtn} ${s.financial__fixedAmountDonatInput}`}
                  type="text"
                  placeholder={t("amount")}
                  value={donationAmount}
                  onChange={handleInputChange}
                />
                <h2 className={s.financial__subTitle}>
                  {t("choosePaymentSystem")}
                </h2>
                <div className={s.financial__btnBlock}>
                  {/* <DynamicGooglePayButton
                    environment="TEST"
                    paymentRequest={paymentRequest}
                    onLoadPaymentData={(paymentData) => {
                      console.log("Payment loaded:", paymentData);
                    }}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  /> */}
                  <button>apple pay</button>
                  <GooglePayButtonComponent
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
                <Link
                  className={`${s.financial__subTitle} ${s.financial__link}`}
                  href="/financial/offert_contract"
                >
                  {t("termsOfOffer")}
                </Link>
              </div>
            </div>
            <div className={s.financial__container_rightBlock}>
              <h2
                className={`${s.financial__subTitle} ${s.financial__subTitle_leftBlock}`}
              >
                {t("termsOfOffer")}
              </h2>
              <div className="form">
                {fields.map(({ label, value, id, key }) => (
                  <div className="field" key={id}>
                    <label
                      className={`${s.financial__subTitle} ${s.financial__subTitle_leftBlock}`}
                    >
                      {t(key)}
                    </label>
                    <div>{value}</div>
                    <Image
                      src={copyLickIcon}
                      alt={`Copy ${label} icon`}
                      onClick={() => copyToClipboard(value)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <SuccessModal />
      </Modal>
      {/* {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )} */}
      {/* {showErrorModal && (
        <ErrorModal onClose={() => setShowErrorModal(false)} />
      )} */}
    </div>
  );
};

export default FinancialPage;
