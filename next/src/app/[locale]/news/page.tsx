import { newsItem } from "@/app/types";
import { getData } from "../../../../libs/getData";
import NewsList from "../components/NewsList/NewsList";
import Title from "../components/Title/Title";
import Translator from "../components/translator/Translator";
import styles from "./news.module.scss";

const News = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;
  const data: newsItem[] = await getData("news");

  return (
    <div className="container">
      <div className={styles.section}>
        <Title newStyles={styles.section__title}>
          <Translator>News</Translator>
        </Title>
        <NewsList data={data} locale={locale} />
      </div>
    </div>
  );
};

export default News;
