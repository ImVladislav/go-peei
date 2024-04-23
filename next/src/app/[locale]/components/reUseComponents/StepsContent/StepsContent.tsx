import Image from "next/image";

import Translator from "../../translator/Translator";

import styles from "./stepsContent.module.scss";

import { reUseContentItem } from "@/app/types";

const StepsContent = ({
  imgSrc,
  title,
  subtitle,
  description,
}: reUseContentItem) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <Translator>{title}</Translator>
        </h2>
        <div>
          <div className={styles.imgContainer}>
            <div className={styles.imgInner}>
              <Image className={styles.img} src={imgSrc} alt={title} fill />
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textInner}>
              <h2 className={styles.title}>
                {subtitle && <Translator>{subtitle}</Translator>}
              </h2>
              <ul className={styles.list}>
                {description.map((item, index) => (
                  <li className={styles.item} key={index}>
                    <Image
                      className={styles.icon}
                      src="/about/leaf.svg"
                      alt="img"
                      width={13}
                      height={22}
                    />
                    <p className={styles.description}>
                      {item && <Translator>{item}</Translator>}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsContent;
