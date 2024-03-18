import Image from "next/image";

import Title from "../../components/Title/Title";
import { getDataId } from "../../components/getData";
import { newsItem } from "@/app/types";

import styles from "../news.module.scss";

const NewsDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data: newsItem = await getDataId("news", id);
  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.card__img}>
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "10px",
            }}
            src={data.imageSrc}
            alt={data.title}
            width={1000}
            height={500}
          />
        </div>
        <Title width={1100}> {data.title}</Title>
        <p className={styles.card__description}>{data.description}</p>
        <p className={styles.card__data}>{data.date}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
