"use client";
import { useTranslation } from "react-i18next";

interface TranslatorProps {
  children: string;
}

const Translator = ({ children }: TranslatorProps) => {
  const { t } = useTranslation();
  return <>{t(children)}</>;
};

export default Translator;
