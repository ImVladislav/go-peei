import styles from "./page.module.css";
import ExampleClientComponent from "../../../components/ExampleClientComponent";
import initTranslations from "../i18n";
import Link from "next/link";
import TranslationsProvider from "../../../components/TranslationsProvider";
import LanguageChanger from "../../../components/LanguageChanger";
const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  // const { t } = await initTranslations(locale, ["home", "common"]);
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.main}>
        <h1>{t("header")}</h1>
        <ExampleClientComponent />
        <Link href="/about-us">{t("common:about_us")} </Link>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
