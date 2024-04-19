import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import News from "./components/Main/News/News";

import styles from "./main.module.scss";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Hero />
      <WhatWeDo />
      {/* <Projects />
      <Reviews />
      <News /> */}
    </div>
  );
}
