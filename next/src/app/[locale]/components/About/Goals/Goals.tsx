"use client";

import { GoalsType } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import Title from "../../Title/Title";
import Translator from "../../translator/Translator";
import { GOALS } from "./goals.data";
import styles from "./goals.module.scss";

const Goals = () => {
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredTitle(Number(event.currentTarget.id));
  };

  return (
    <>
      {/* desktop */}
      <section className={`${styles.section} ${styles.desktop}`}>
        <div className="container">
          <Title>
            <Translator>goals</Translator>
            <span className={styles.accentTitle}>
              {" "}
              <Translator>organizations</Translator>
            </span>
          </Title>
          <div className={styles.content}>
            <ul className={styles.list}>
              {GOALS.map((item: GoalsType, index: number) => (
                <li key={index} className={styles.item}>
                  <div
                    id={index.toString()}
                    className={`${styles.item__title_wrap} ${
                      index === Number(hoveredTitle) ? `${styles.active}` : ""
                    }`}
                    onMouseEnter={handleMouseEnter}
                  >
                    <h3 className={styles.item__title}>
                      <Translator>{item.title}</Translator>
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.desc_wrap}>
              {GOALS.map((item: GoalsType, index: number) =>
                index === Number(hoveredTitle) ? (
                  <p key={index} className={styles.desc}>
                    <Translator>{item.desc}</Translator>
                  </p>
                ) : null
              )}
            </div>
          </div>
        </div>
      </section>
      {/* mobile */}
      <section className={`${styles.section} ${styles.mobile}`}>
        <div className="container">
          <Title>
            <Translator>goals</Translator>
            <span className={styles.accentTitle}>
              {" "}
              <Translator>organizations</Translator>
            </span>
          </Title>
          <ul className={styles.list}>
            {GOALS.map((item: GoalsType, index: number) => (
              <li key={index} className={styles.item}>
                <div
                  id={index.toString()}
                  className={`${styles.item__title_wrap} ${
                    index === Number(hoveredTitle) ? `${styles.active}` : ""
                  }`}
                  onMouseEnter={handleMouseEnter}
                >
                  <div className={styles.item__iconWrapper}>
                    <Image
                      src="/about/arrow-small.svg"
                      alt="arrow small"
                      width={24}
                      height={24}
                      className={styles.item__arrowSmall}
                    />
                    <h3 className={styles.item__title}>
                      <Translator>{item.title}</Translator>
                    </h3>
                  </div>
                  <p
                    className={`${styles.desc} ${
                      index === Number(hoveredTitle) ? `${styles.active}` : ""
                    }`}
                  >
                    <Translator>{item.desc}</Translator>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Goals;
