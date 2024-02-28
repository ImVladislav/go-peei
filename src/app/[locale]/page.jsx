import ExampleClientComponent from "../../../components/ExampleClientComponent";
import initTranslations from "../i18n";
import TranslationsProvider from "../../../components/TranslationsProvider";
import LanguageChanger from "../../../components/LanguageChanger";
import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import News from "./components/Main/News/News";
const i18nNamespaces = ["home", "common"];

import styles from "./page.module.scss";

export default async function Home({ params: { locale } }) {
  // const { t } = await initTranslations(locale, ["home", "common"]);
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="container">
        <LanguageChanger />
        <ExampleClientComponent />
        <div className={styles.wrap}>
          <Hero />
          <WhatWeDo />
          <Projects />
          <Reviews />
          <News />
        </div>
      </div>
    </TranslationsProvider>
  );
}
