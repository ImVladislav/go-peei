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
                className={
                  item.imgStyle ? `${styles.img} ${item.imgStyle}` : styles.img
                }
                src={item.imgSrc}
                alt={item.title ? item.title : item.description}
                fill
              />
            </div>
            <div className={styles.descWrap}>
              {item.title && (
                <div className={styles.subtitleWrap}>
                  <Image
                    className={styles.icon}
                    src="/about/leaf.svg"
                    alt="img"
                    width={13}
                    height={22}
                  />
                  <h2 className={styles.subtitle}>
                    <Translator>{item.title}</Translator>
                  </h2>
                </div>
              )}
              <p className={styles.description}>
                <Translator>{item.description}</Translator>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContent;
