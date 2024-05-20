import Image from "next/image";
import Link from "next/link";

import { reUseContentItem } from "@/app/types";
import Translator from "../../translator/Translator";

import styles from "./stepsContent.module.scss";

const StepsContent = ({
  imgSrc,
  imgStyle,
  title,
  subtitle,
  list,
}: reUseContentItem) => {
  const iconClass = imgStyle ? `${styles.img} ${imgStyle}` : styles.img;
  return (
    <div className={styles.inner}>
      <h2 className={styles.title}>
        <Translator>{title}</Translator>
      </h2>
      <div>
        <div className={styles.imgContainer}>
          <div className={styles.imgInner}>
            <Image className={iconClass} src={imgSrc} alt={title} fill />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textInner}>
            {subtitle && (
              <h2 className={styles.title}>
                <Translator>{subtitle}</Translator>
              </h2>
            )}
            <ul className={styles.list}>
              {list.map((item, index) => (
                <li className={styles.item} key={index}>
                  {subtitle ? (
                    <span className={styles.counter}>{index + 1}.</span>
                  ) : (
                    <Image
                      className={styles.icon}
                      src="/about/leaf.svg"
                      alt="img"
                      width={13}
                      height={22}
                    />
                  )}
                  <p className={styles.description}>
                    {item.title && (
                      <span className={styles.descTitle}>
                        <Translator>{item.title}</Translator>
                      </span>
                    )}
                    {item.descriptionBefore && (
                      <Translator>{item.descriptionBefore}</Translator>
                    )}
                    {item.description && (
                      <Translator>{item.description}</Translator>
                    )}

                    {item.href && (
                      <Link className={styles.link} href={item.href}>
                        {item.link && <Translator>{item.link}</Translator>}
                      </Link>
                    )}
                    {item.descriptionAfter && (
                      <Translator>{item.descriptionAfter}</Translator>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsContent;
