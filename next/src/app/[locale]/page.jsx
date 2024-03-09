// import initTranslations from "../i18n";
// import TranslationsProvider from "../../../components/TranslationsProvider";

// import LanguageChanger from "../../../components/LanguageChanger";
import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import News from "./components/Main/News/News";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className="container">
      <div className={styles.wrap}>
        <Hero />
        <WhatWeDo />
        <Projects />
        <Reviews />
        <News />
      </div>
    </div>
  );
}
// I18NEXUS_API_KEY = "11LwLZS4JirFCYfVeME4cA";
