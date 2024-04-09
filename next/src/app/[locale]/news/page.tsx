import Image from "next/image";

import Title from "../components/Title/Title";

import { getData } from "../components/getData";
import { newsItem } from "@/app/types";

import styles from "./news.module.scss";
import Link from "next/link";

const News = async () => {
  const data: newsItem[] = await getData("news");
  return (
    <div className="container">
      <div className={styles.section}>
        <Title>Новини</Title>

        <ul className={styles.list}>
          {data?.map((item) => (
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
              <Link className={styles.link} href={`/news/${item._id}`}>
                <h2 className={styles.item__title}>{item.title}</h2>
              </Link>
              <p className={styles.item__data}>{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
