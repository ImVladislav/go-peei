// import initTranslations from "../i18n";
// import TranslationsProvider from "../../../components/TranslationsProvider";

// import LanguageChanger from "../../../components/LanguageChanger";
import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import News from "./components/Main/News/News";

export default async function Home() {
  return (
    <div className="container">
      <Hero />
      <WhatWeDo />
      <Projects />
      <Reviews />
      <News />
    </div>
  );
}
// I18NEXUS_API_KEY = "11LwLZS4JirFCYfVeME4cA";
