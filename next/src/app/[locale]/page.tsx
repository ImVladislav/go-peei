import { getData } from "../../../libs/getData";
import { newsItem, projectsItem, reviewsItem } from "../types";

import Hero from "./components/Main/Hero/Hero";
import News from "./components/Main/News/News";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";

import styles from "./main.module.scss";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {

  const projects: projectsItem[] = await getData("projects");
  const reviews: reviewsItem[] = await getData("reviews");
  const news: newsItem[] = await getData("news");

  return (
    <div className={styles.wrap}>
      <Hero />
      <WhatWeDo />
      {projects && <Projects data={projects} locale={locale} />}
      {reviews && <Reviews data={reviews} />}
      {news && <News data={news} locale={locale} />}
    </div>
  );
};

export default Home;
