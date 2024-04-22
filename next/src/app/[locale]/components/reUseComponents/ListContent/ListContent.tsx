import Image from "next/image";

import { listContentItem } from "@/app/types";

import Translator from "../../translator/Translator";

import styles from "./listContent.module.scss";

const ListContent = ({ title, list }: listContentItem) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Translator>{title}</Translator>
      </h2>

      <ul className={styles.list}>
        {list.map((item, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={item.imgSrc}
                alt={item.description}
                fill
              />
            </div>
            <p className={styles.description}>
              <Translator>{item.description}</Translator>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContent;
