import { newsItem } from "@/app/types";
import Link from "next/link";
import { getData } from "../../../../../../libs/getData";
import Translator from "../../translator/Translator";
import SingleNewsItem from "./SingleNewsItem";
import styles from "./readMore.module.scss";

const ReadMore = async ({
  currentNewsItemId,
  locale,
}: {
  currentNewsItemId: string;
  locale: string;
}) => {
  const data: newsItem[] = await getData("news");
  const showItemsOnTab = data
    .filter((item) => item._id !== currentNewsItemId)
    .slice(0, 2);
  const showItemsOnDesktop = data
    .filter((item) => item._id !== currentNewsItemId)
    .slice(0, 3);

  return (
    <div className="container">
      <div className={styles.section}>
        <h3 className={styles.section__title}>
          <Translator>readAlso</Translator>
        </h3>
        {/* mobile */}
        <ul className={`${styles.news__list} ${styles.mobile}`}>
          {data?.map(
            (item) =>
              item._id !== currentNewsItemId && (
                <SingleNewsItem
                  key={item._id}
                  newsItem={item}
                  locale={locale}
                />
              )
          )}
        </ul>
        {/* tablet */}
        <ul className={`${styles.news__list} ${styles.tablet}`}>
          {showItemsOnTab?.map((item) => (
            <SingleNewsItem key={item._id} newsItem={item} locale={locale} />
          ))}
        </ul>
        {/* desktop */}
        <ul className={`${styles.news__list} ${styles.desktop}`}>
          {showItemsOnDesktop?.map((item) => (
            <SingleNewsItem key={item._id} newsItem={item} locale={locale} />
          ))}
        </ul>

        <div className={styles.more__box}>
          <Link href="/news" className={styles.more__link}>
            <Translator>allNews</Translator>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
