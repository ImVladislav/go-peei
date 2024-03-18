import { reviewsItem } from "@/app/types";
import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import News from "./components/Main/News/News";
import styles from "./page.module.scss";
import { getData } from "./components/getData";

export default async function Home() {
  const data: reviewsItem[] = await getData("reviews");

  return (
    <div className="container">
      <div className={styles.wrap}>
        <Hero />
        <WhatWeDo />
        <Projects />
        <Reviews data={data} />
        <News />
      </div>
    </div>
  );
}
// I18NEXUS_API_KEY = "11LwLZS4JirFCYfVeME4cA";
