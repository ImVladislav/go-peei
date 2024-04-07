import Image from "next/image";

import Title from "../../Title/Title";
import styles from "./watWeDo.module.scss";
import Translator from "../../translator/Translator";

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div>
          <Title>
            <Translator>wePromoteSuchIdeas</Translator>
          </Title>

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
                <h3 className={styles.subtitle}>
                  <Translator>preservingTheEnvironment</Translator>
                </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>
                  <Translator>preservingTheEnvironment</Translator>
                </h3>
                <p className={styles.desc}>
                  <Translator>preservingTheEnvironmentDesc</Translator>
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.subtitle_wrap}>
                <div className={styles.icon_second}>
                  <Image src="/main/two.svg" alt="вітряк" fill />
                </div>
                <h3 className={styles.subtitle}>
                  <Translator>
                    implementationOfInnovationsInTheFieldOfRenewableEnergy
                  </Translator>
                </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>
                  <Translator>
                    implementationOfInnovationsInTheFieldOfRenewableEnergy
                  </Translator>
                </h3>
                <p className={styles.desc}>
                  <Translator>
                    implementationOfInnovationsInTheFieldOfRenewableEnergyDesc
                  </Translator>
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
                  <Translator>recyclingOfSecondaryRawMaterials</Translator>
                </h3>
              </div>
              <div className={styles.desc_wrap}>
                <h3 className={styles.subtitle_desktop}>
                  <Translator>recyclingOfSecondaryRawMaterials</Translator>
                </h3>
                <p className={styles.desc}>
                  <Translator>recyclingOfSecondaryRawMaterialsDesc</Translator>
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
