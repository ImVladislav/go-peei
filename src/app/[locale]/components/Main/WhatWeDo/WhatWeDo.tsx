import Image from "next/image";
import Link from "next/link";
import Title from "../Title";

const WhatWeDo = () => {
  return (
    <section className="wat-we-do">
      <div className="container">
        <Title title="Просуваємо такі ідеї:" width={355} />
        <div style={{ position: "relative" }}>
          <div style={{ marginLeft: "-80px" }}>
            <Image src="/main/pic-2.png" alt="line" width={849} height={921} />
          </div>
          <ul className="wat-we-do__list">
            <li className="wat-we-do__item">
              <Image src="/main/one.svg" alt="line" width={92} height={93} />
              <div className="wat-we-do__column">
                <h3 className="wat-we-do__subtitle">Збереження довкілля </h3>
                <p className="wat-we-do__desc">
                  є ключовим завданням сучасності. Це включає зменшення викидів
                  та забруднення, охорону біорізноманіття та створення сталого
                  способу життя. Для досягнення цієї мети необхідні комплексні
                  заходи на рівні країни та глобально, інновації в переробці
                  вторинної сировини та підтримка сталого споживання.
                </p>
              </div>
            </li>
            <li className="wat-we-do__item">
              <Image src="/main/two.svg" alt="вітряк" width={80} height={114} />
              <div className="wat-we-do__column">
                <h3 className="wat-we-do__subtitle">
                  Впровадження інновацій в сфері відновлювальної енергетики
                </h3>
                <p className="wat-we-do__desc">
                  відіграє важливу роль у зменшенні залежності зменшенні
                  залежності від традиційних джерел енергії та впливу на
                  довкілля. Використання передових технологій допомагає
                  підвищити ефективність та надійність виробництва енергії з
                  відновлюваних джерел, сприяючи сталому розвитку та дотриманню
                  екологічних стандартів.
                </p>
              </div>
            </li>
            <li className="wat-we-do__item">
              <Image
                src="/main/three.svg"
                alt="переробка вторинної сировини"
                width={92}
                height={82}
              />
              <div className="wat-we-do__column">
                <h3 className="wat-we-do__subtitle">
                  Переробка вторинної сировини
                </h3>
                <p className="wat-we-do__desc">
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
