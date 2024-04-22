import Image from "next/image";

import Translator from "../../translator/Translator";
import Button from "../../Button/Button";

import styles from "./firstContent.module.scss";
import { reUseContentItem } from "@/app/types";

const FirstContent = ({ imgSrc, title, description }: reUseContentItem) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={imgSrc} alt={title} fill />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            <Translator>{title}</Translator>
          </h2>
          <ul className={styles.descriptionContainer}>
            {description?.map((item) => (
              <li>
                <p className={styles.description}>
                  {item && <Translator>{item}</Translator>}
                </p>
              </li>
            ))}
            <Button
              newStyles={styles.btn}
              isLink
              href="/supportVolonter/newVolonter"
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
