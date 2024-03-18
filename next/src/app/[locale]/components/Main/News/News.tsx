import Link from "next/link";
import Image from "next/image";

import Title from "../../Title/Title";

import { newsItem } from "@/app/types";
import { getData } from "../../getData";

import styles from "./news.module.scss";

const News = async () => {
  const data: newsItem[] = await getData("news");
  const basicNews = data.filter((item) => item.firstNew === true);
  const otherNews = data.filter((item) => item.firstNew !== true);

  return (
    <section className={styles.section}>
      <Title width={130}>Новини</Title>
      <div className={styles.inner}>
        <div className={styles.first_card}>
          <div className={styles.first_card__img}>
            <Image
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "534px",
              }}
              src={basicNews[0].imageSrc}
              alt={basicNews[0].title}
              width={742}
              height={534}
            />
          </div>
          <Link href={`/news/${basicNews[0]._id}`}>
            <h2 className={styles.first_card__title}>{basicNews[0].title}</h2>
          </Link>
          <p className={styles.first_card__desc}>{basicNews[0].description}</p>
          <p className={styles.first_card__data}>{basicNews[0].date}</p>
        </div>

        <div>
          <ul className={styles.list}>
            {otherNews.slice(0, 2).map((item) => (
              <li className={styles.item} key={item._id}>
                <div className={styles.item__img}>
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      height: "193px",
                    }}
                    src={item.imageSrc}
                    alt={item.title}
                    width={458}
                    height={193}
                  />
                </div>
                <Link href={`/news/${item._id}`}>
                  <h2 className={styles.item__title}>{item.title}</h2>
                </Link>
                <p className={styles.item__data}>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <Link className={styles.box__link} href="/news">
          Усі новини
        </Link>
      </div>
    </section>
  );
};

export default News;
