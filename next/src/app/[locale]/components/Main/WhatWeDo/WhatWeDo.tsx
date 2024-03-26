"use client";
import Image from "next/image";

import Title from "../../Title/Title";
import styles from "./watWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div>
          <Title>Просуваємо такі ідеї:</Title>

          <div className={styles.img_container}>
            <Image
              className={styles.img}
              src="/main/photo-main.png"
              alt="line"
              fill
            />
          </div>
        </div>
        <div className={styles.text_container}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.subtitle_wrap}>
                <div className={styles.icon_first}>
                  <Image src="/main/one.svg" alt="icon" fill />
                </div>
                <h3 className={styles.subtitle}>Збереження довкілля </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>Збереження довкілля</h3>
                <p className={styles.desc}>
                  є ключовим завданням сучасності. Це включає зменшення викидів
                  та забруднення, охорону біорізноманіття та створення сталого
                  способу життя. Для досягнення цієї мети необхідні комплексні
                  заходи на рівні країни та глобально, інновації в переробці
                  вторинної сировини та підтримка сталого споживання.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.subtitle_wrap}>
                <div className={styles.icon_second}>
                  <Image src="/main/two.svg" alt="вітряк" fill />
                </div>
                <h3 className={styles.subtitle}>
                  Впровадження інновацій в сфері відновлювальної енергетики
                </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>
                  Впровадження інновацій в сфері відновлювальної енергетики
                </h3>
                <p className={styles.desc}>
                  відіграє важливу роль у зменшенні залежності зменшенні
                  залежності від традиційних джерел енергії та впливу на
                  довкілля. Використання передових технологій допомагає
                  підвищити ефективність та надійність виробництва енергії з
                  відновлюваних джерел, сприяючи сталому розвитку та дотриманню
                  екологічних стандартів.
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.subtitle_wrap}>
                <div className={styles.icon_third}>
                  <Image
                    src="/main/three.svg"
                    alt="переробка вторинної сировини"
                    fill
                  />
                </div>
                <h3 className={styles.subtitle}>
                  Переробка вторинної сировини
                </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>
                  Переробка вторинної сировини
                </h3>
                <p className={styles.desc}>
                  Сучасні технології дозволяють ефективно використовувати
                  вторинну сировину для виробництва нових продуктів, що сприяє
                  зменшенню негативного впливу на навколишнє середовище.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
