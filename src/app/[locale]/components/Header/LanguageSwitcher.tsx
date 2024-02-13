"use client";
// import i18n from "../Utils/i18n";
// import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({
  onLanguageChange,
}: {
  onLanguageChange: (lang: string) => void;
}) => {
  // const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    // i18n.changeLanguage(lang);
    onLanguageChange(lang);
  };

  return (
    <div className="language-switcher">
      <button
        // className={i18n.language === "uk" ? "active" : ""}
        onClick={() => changeLanguage("uk")}
      >
        Укр
      </button>
      <button
        // className={i18n.language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        Eng
      </button>
    </div>
  );
};

export default LanguageSwitcher;
