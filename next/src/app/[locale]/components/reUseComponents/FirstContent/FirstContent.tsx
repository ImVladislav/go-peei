import Image from "next/image";

import Translator from "../../translator/Translator";
import Button from "../../Button/Button";

import styles from "./firstContent.module.scss";
import { reUseContentItem } from "@/app/types";

const FirstContent = ({ imgSrc, imgStyle, title, list }: reUseContentItem) => {
  const iconClass = imgStyle ? `${styles.img} ${imgStyle}` : styles.img;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={iconClass} src={imgSrc} alt={title} fill />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            <Translator>{title}</Translator>
          </h2>
          <ul className={styles.descriptionContainer}>
            {list?.map((item, index) => (
              <li key={index}>
                <p className={styles.description}>
                  {item.description && (
                    <Translator>{item.description}</Translator>
                  )}
                </p>
              </li>
            ))}
            <Button
              newStyles={styles.btn}
              isLink
              href="/support/volonter/newVolonter"
            >
              <Translator>joinTheTeam</Translator>
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
