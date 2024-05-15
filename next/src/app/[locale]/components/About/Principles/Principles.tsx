"use client";

import Image from "next/image";
import { useState } from "react";
import Title from "../../Title/Title";
import Translator from "../../translator/Translator";
import { PRINCIPLES } from "./principles.data";
import styles from "./principles.module.scss";

const Principles = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggleShowMore = (): void => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <>
      {/* mobile */}
      <section className={`${styles.section} ${styles.mobile}`}>
        <div className="container">
          <Title>
            <Translator>ours</Translator>{" "}
            <span className={styles.accentTitle}>
              {" "}
              <Translator>principles</Translator>
            </span>
          </Title>
          <ul className={styles.list}>
            {PRINCIPLES.slice(0, showMore ? PRINCIPLES.length : 3).map(
              (item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.item__top_wrap}>
                    <Image
                      src={item.icon}
                      alt="checkmark"
                      width={24}
                      height={24}
                    />
                    <h3 className={styles.item__title}>
                      <Translator>{item.title}</Translator>
                    </h3>
                  </div>
                  <p className={styles.item__desc}>
                    <Translator>{item.desc}</Translator>
                  </p>
                </li>
              )
            )}
          </ul>
          {PRINCIPLES.length > 3 && (
            <button
              onClick={handleToggleShowMore}
              className={styles.showMoreBtn}
            >
              <Translator>
                {showMore ? "buttonHide" : "buttonShowMore"}
              </Translator>
            </button>
          )}
        </div>
      </section>

      {/* desktop */}
      <section className={`${styles.section} ${styles.desktop}`}>
        <div className="container">
          <Title>
            <Translator>ours</Translator>{" "}
            <span className={styles.accentTitle}>
              {" "}
              <Translator>principles</Translator>
            </span>
          </Title>
          <ul className={styles.list}>
            {PRINCIPLES.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.item__top_wrap}>
                  <Image
                    src={item.icon}
                    alt="checkmark"
                    width={24}
                    height={24}
                  />
                  <h3 className={styles.item__title}>
                    <Translator>{item.title}</Translator>
                  </h3>
                </div>
                <p className={styles.item__desc}>
                  <Translator>{item.desc}</Translator>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Principles;
