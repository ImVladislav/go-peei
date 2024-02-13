import Link from "next/link";
import styles from "../page.module.css";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../../../components/TranslationsProvider";

const i18nNamespaces = ["about-us", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className={styles.main}>
        <h1>{t("common:about_us")}</h1>
        <p>
          <b>{t("our_address")}</b>
        </p>
        <p>
          123 Example Street
          <br />
          Los Angeles, CA
        </p>
        <Link href="/">{t("back")}</Link>
      </main>
    </TranslationsProvider>
  );
}
