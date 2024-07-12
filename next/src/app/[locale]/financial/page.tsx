"use client";
import React, { useState } from "react";
import LiqPayButton from "./LiqPayButton";
import s from "./Financial.module.scss";

import { useTranslation } from "react-i18next";
import Translator from "../components/translator/Translator";
import Link from "next/link";
import Title from "../components/Title/Title";

import CopySvg from "../../../../public/financial/copy.svg";
import Image from "next/image";

const FinancialPage: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState(20);
  const [currency, setCurrency] = useState("UAH");
  const { t } = useTranslation();

  const handleAmountButtonClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue) && parsedValue >= 20) {
      setDonationAmount(parsedValue);
    } else if (parsedValue < 20) {
      setDonationAmount(20);
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  const [fields] = useState([
    {
      key: "accountNumberFormat",
      label: t("accountNumberFormat"),
      value: t("platformEcoEnergyInitiatives"),
      id: "account",
    },
    {
      key: "recipient",
      label: t("recipient"),
      value: t("publicOrganizationPlatformEcoEnergy"),
      id: "client",
    },
    {
      key: "iban",
      label: t("iban"),
      value: t("ibanNumber"),
      id: "iban",
    },
    {
      key: "edrpou",
      label: t("edrpou"),
      value: t("edrpouNumber"),
      id: "edrpou",
    },
    {
      key: "purposeOfPayment",
      label: t("purposeOfPayment"),
      value: t("charitableDonationForStatutoryPurposes"),
      id: "purpose",
    },
  ]);

  const copyToClipboard = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log("Value copied to clipboard:", value);
      })
      .catch((error) => {
        console.error("Failed to copy value to clipboard:", error);
      });
  };

  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

  return (
    <div className={s.financial__bg}>
      <div className={s.financial__container_mainBlock}>
        <section className={s.financial__container}>
          <Title>
            <Translator>financialSupport</Translator>
          </Title>
          <div className={s.financial__container_mainBlock}>
            <div className={s.financial__container_leftBlock}>
              <h2 className={s.financial__subTitle}>
                <Translator>selectContributionAmount</Translator>
              </h2>
              <div className="buttons">
                <button
                  className={s.financial__fixedAmountDonatBtn}
                  onClick={() => handleAmountButtonClick(100.0)}
                >
                  100
                </button>
                <button
                  className={s.financial__fixedAmountDonatBtn}
                  onClick={() => handleAmountButtonClick(200.0)}
                >
                  200
                </button>
                <button
                  className={s.financial__fixedAmountDonatBtn}
                  onClick={() => handleAmountButtonClick(300.0)}
                >
                  300
                </button>
              </div>
              <div className={s.amoontBlock}>
                <input
                  className={`${s.financial__fixedAmountDonatBtn} ${s.financial__fixedAmountDonatInput}`}
                  type="text"
                  pattern="\d*"
                  placeholder={t("amount")}
                  value={donationAmount.toString()}
                  onChange={handleInputChange}
                />
                <select
                  className={`${s.financial__fixedAmountDonatBtn} ${s.financial__fixedAmountDonatInput}`}
                  style={{ width: "100px" }}
                  value={currency}
                  onChange={handleCurrencyChange}
                >
                  <option className={s.option} value="UAH">
                    UAH
                  </option>
                  <option className={s.option} value="USD">
                    USD
                  </option>
                  <option className={s.option} value="EUR">
                    EUR
                  </option>
                </select>
              </div>
              <div id="liqpay_checkout">
                <LiqPayButton
                  currency={currency}
                  public_key={publicKey}
                  private_key={privateKey}
                  amount={donationAmount}
                  description="Благодійна пожертва на статутні цілі"
                />
              </div>
              <Link
                className={`${s.financial__subTitle} ${s.financial__link}`}
                href="/officialDocuments/offert_contract"
              >
                {t("termsOfOffer")}
              </Link>
            </div>
            <div className={s.financial__container_rightBlock}>
              <h4 className={s.financial__subTitle}>
                <Translator>BankDetails</Translator>
              </h4>
              <div className={s.financial__infoBlock}>
                {fields.map((field) => (
                  <div key={field.key} className={s.financial__infoField}>
                    <h4 className={s.financial__subTitle}>{field.label}:</h4>
                    <div className={s.financial__infoField__insideBlock}>
                      <span className={s.financial__infoValue}>
                        {field.value}
                      </span>
                      <button
                        className={s.financial__copyButton}
                        onClick={() => copyToClipboard(field.value)}
                      >
                        <Image src={CopySvg} alt={"Copy"}></Image>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FinancialPage;
