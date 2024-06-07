"use client";
import Image from "next/image";
import Title from "../../components/Title/Title";
import Translator from "../../components/translator/Translator";

import { workWithChildrenData } from "@/app/constants";

import styles from "./workWithChildren.module.scss";
import { useTranslation } from "react-i18next";

const WorkWithChildrenPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.section}>
      <div className="container">
        <Title>
          <Translator>work</Translator>
          <span className={styles.accentTitle}>
            <Translator>withChildren</Translator>
          </span>
        </Title>
        <div className={styles.backgroundWrap}>
          <ul className={styles.list}>
            {workWithChildrenData.map((item) => (
              <li className={styles.item} key={item.title}>
                <div className={styles.imgContent}>
                  <div className={styles.wrapImg}>
                    <Image
                      className={styles.img}
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="max-width: 632px"
                    />
                  </div>
                </div>
                <div className={styles.textContent}>
                  <div className={styles.titleWrap}>
                    <div className={styles.wrapIcon}>
                      <Image
                        src="/about/leaf.svg"
                        alt={item.title}
                        width={13}
                        height={22}
                      />
                    </div>
                    <h2 className={styles.title}>
                      <Translator>{item.title}</Translator>
                    </h2>
                  </div>
                  <p className={styles.description}>
                    <Translator>{item.description}</Translator>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkWithChildrenPage;
