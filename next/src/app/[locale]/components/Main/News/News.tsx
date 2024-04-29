import Link from "next/link";
import Image from "next/image";

import Title from "../../Title/Title";

import { newsItem } from "@/app/types";

import styles from "./news.module.scss";
import Translator from "../../translator/Translator";
import { formatDate } from "../../formatDate";

const News = ({ data }: { data: newsItem[] }) => {
  const maxLength = 180;
  // const basicNews = data.filter((item) => item.firstNew === true);
  // const otherNews = data.filter((item) => item.firstNew !== true);

  return (
    <section className={styles.section}>
      <div className="container">
        <Title>
          <Translator>news</Translator>
        </Title>
        <div className={styles.inner}>
          <ul className={styles.firstList}>
            {data.slice(0, 2).map((item) => (
              <li className={styles.first_card} key={item._id}>
                <div className={styles.first_card__img_wrap}>
                  <Image
                    className={styles.first_card__img}
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                  />
                </div>
                <Link
                  className={styles.first_card__title_link}
                  href={`/news/${item._id}`}
                >
                  <h2 className={styles.first_card__title}>{item.title}</h2>
                </Link>
                <p className={styles.first_card__desc}>
                  {item.description.slice(0, maxLength)}...
                </p>
                <p className={styles.first_card__data}>
                  {formatDate(item.createdAt)}
                </p>
              </li>
            ))}
          </ul>

          <div className={styles.last_cards}>
            <ul className={styles.list}>
              {data.slice(1, 3).map((item) => (
                <li className={styles.item} key={item._id}>
                  <div className={styles.item__inner}>
                    <div className={styles.item__wrap_img}>
                      <Image
                        className={styles.item__img}
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                      />
                    </div>
                    <Link
                      className={styles.item__title_link}
                      href={`/news/${item._id}`}
                    >
                      <h2 className={styles.item__title}>{item.title}</h2>
                    </Link>
                  </div>
                  <p className={styles.item__data}>
                    {formatDate(item.createdAt)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.box}>
          <Link className={styles.box__link} href="/news">
            <Translator>allNews</Translator>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
