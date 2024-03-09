import Link from "next/link";
import Image from "next/image";

import Title from "../../Title/Title";

import { initialNews } from "@/app/constants/index";

import styles from "./news.module.scss";

const News = () => {
  const basicNew = initialNews.filter((item) => item.firstNew === true);
  const otherNews = initialNews.filter((item) => item.firstNew !== true);

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
              src={basicNew[0].imageSrc}
              alt={basicNew[0].title}
              width={742}
              height={534}
            />
          </div>
          <h2 className={styles.first_card__title}>{basicNew[0].title}</h2>
          <p className={styles.first_card__desc}>{basicNew[0].description}</p>
          <p className={styles.first_card__data}>{basicNew[0].date}</p>
        </div>

        <div>
          <ul className={styles.list}>
            {otherNews.map((item) => (
              <li className={styles.item} key={item.id}>
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
                <h2 className={styles.item__title}>{item.title}</h2>
                <p className={styles.item__data}>{item.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <Link className={styles.box__link} href="/">
          Усі новини
        </Link>
      </div>
    </section>
  );
};

export default News;
