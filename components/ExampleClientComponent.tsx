"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  const userName = "David";

  return <h3>{t("subheader", { userName })}</h3>;
}
