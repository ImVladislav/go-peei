"use client";

import Image from "next/image";
import Title from "../../Title/Title";
import Translator from "../../translator/Translator";
import { VALUES } from "./values.data";
import styles from "./values.module.scss";

const Values = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapper}>
        <div className="container">
          <Title>
            <Translator>ours</Translator>
            <span className={styles.accentTitle}>
              {" "}
              <Translator>values</Translator>
            </span>
          </Title>
        </div>
        <div className={styles.parallax}>
          <ul className={styles.list}>
            {VALUES.map((item, index) => (
              <li key={index} className={styles.item}>
                <div className={styles.item__iconWrap}>
                  <Image src={item.icon} alt="icon" fill />
                </div>
                <p className={styles.item__desc}>
                  <Translator>{item.desc}</Translator>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Values;
