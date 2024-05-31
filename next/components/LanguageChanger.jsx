"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import s from "./LanguageChanger.module.scss";
import ukrFlag from "../public/flags/FlagsUkr.svg";
import engFlag from "../public/flags/FlagsEng.svg";
import Image from "next/image";
import { useState } from "react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showLanguages, setShowLanguages] = useState(false);

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
    setShowLanguages(false); // Hide language list after selecting a language
  };

  return (
    <div className={s.languageChanger__container}>
      <div className={s.languageChanger__block}>
        <button
          className={`${s.changeLanguage__button} ${
            showLanguages ? s.active : ""
          }`}
          onClick={() => setShowLanguages(!showLanguages)}
        >
          <div className={s.flags__container}>
            {currentLocale === "en" ? (
              <Image
                className={s.flag__image}
                src={engFlag.src}
                alt="engFlag"
                width={38}
                height={25}
              />
            ) : (
              <Image
                className={s.flag__image}
                src={ukrFlag.src}
                alt="ukrflag"
                width={38}
                height={25}
              />
            )}
            {currentLocale === "en" ? "Eng" : "Укр"}
          </div>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.svgIcon}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {showLanguages && (
          <ul className={s.languageList}>
            {currentLocale === "uk" && (
              <li className={s.languageListItem}>
                <button
                  className={s.changeLanguage__button}
                  onClick={() => handleChange("en")}
                >
                  <Image
                    className={s.flag__image}
                    src={engFlag.src}
                    alt="engFlag"
                    width={38}
                    height={25}
                  />
                  <p className={s.text}>Eng</p>
                </button>
              </li>
            )}
            {currentLocale === "en" && (
              <li className={s.languageListItem}>
                <button
                  className={s.changeLanguage__button}
                  onClick={() => handleChange("uk")}
                >
                  <Image
                    className={s.flag__image}
                    src={ukrFlag.src}
                    alt="ukrflag"
                    width={38}
                    height={25}
                  />
                  <p className={s.text}>Укр</p>
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
