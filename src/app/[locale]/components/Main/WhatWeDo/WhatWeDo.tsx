import Image from "next/image";
import Link from "next/link";
import Title from "../../Title/Title";
import style from "./watWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <section className={style.section}>
      <div className="container">
        <Title title="Просуваємо такі ідеї:" width={355} />
        <div className={style.content}>
          <div className={style.img}>
            <Image src="/main/pic-2.png" alt="line" width={849} height={921} />
          </div>
          <ul className={style.list}>
            <li className={style.item}>
              <Image src="/main/one.svg" alt="line" width={92} height={93} />
              <div className={style.column}>
                <h3 className={style.subtitle}>Збереження довкілля </h3>
                <p className={style.desc}>
                  є ключовим завданням сучасності. Це включає зменшення викидів
                  та забруднення, охорону біорізноманіття та створення сталого
                  способу життя. Для досягнення цієї мети необхідні комплексні
                  заходи на рівні країни та глобально, інновації в переробці
                  вторинної сировини та підтримка сталого споживання.
                </p>
              </div>
            </li>
            <li className={style.item}>
              <Image src="/main/two.svg" alt="вітряк" width={80} height={114} />
              <div className={style.column}>
                <h3 className={style.subtitle}>
                  Впровадження інновацій в сфері відновлювальної енергетики
                </h3>
                <p className={style.desc}>
                  відіграє важливу роль у зменшенні залежності зменшенні
                  залежності від традиційних джерел енергії та впливу на
                  довкілля. Використання передових технологій допомагає
                  підвищити ефективність та надійність виробництва енергії з
                  відновлюваних джерел, сприяючи сталому розвитку та дотриманню
                  екологічних стандартів.
                </p>
              </div>
            </li>
            <li className={style.item}>
              <Image
                src="/main/three.svg"
                alt="переробка вторинної сировини"
                width={92}
                height={82}
              />
              <div className={style.column}>
                <h3 className={style.subtitle}>Переробка вторинної сировини</h3>
                <p className={style.desc}>
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
