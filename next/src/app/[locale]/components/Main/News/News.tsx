import Link from "next/link";
import Image from "next/image";

import Title from "../../Title/Title";

import { newsItem } from "@/app/types";
import { getData } from "../../getData";

import styles from "./news.module.scss";
import Translator from "../../translator/Translator";

const News = async () => {
  const data: newsItem[] = await getData("news");
  // const basicNews = data.filter((item) => item.firstNew === true);
  // const otherNews = data.filter((item) => item.firstNew !== true);

  return (
    <section className={styles.section}>
      <div className="container">
        <Title>
          <Translator>news</Translator>
        </Title>
        <div className={styles.inner}>
          <div className={styles.first_card}>
            <div className={styles.first_card__img_wrap}>
              <Image
                className={styles.first_card__img}
                src={data[0].imageSrc}
                alt={data[0].title}
                fill
              />
            </div>
            <Link
              className={styles.first_card__title_link}
              href={`/news/${data[0]._id}`}
            >
              <h2 className={styles.first_card__title}>{data[0].title}</h2>
            </Link>
            <p className={styles.first_card__desc}>{data[0].description}</p>
            <p className={styles.first_card__data}>{data[0].date}</p>
          </div>

          <div>
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
                  <p className={styles.item__data}>{item.date}</p>
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
