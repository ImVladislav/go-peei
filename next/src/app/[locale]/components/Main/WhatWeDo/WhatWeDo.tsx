import Image from "next/image";

import Title from "../../Title/Title";
import styles from "./watWeDo.module.scss";
import Translator from "../../translator/Translator";

const WhatWeDo = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <Title>
              <Translator>wePromoteSuchIdeas</Translator>
              <span className={styles.accentTitle}>
                <Translator>wePromoteSuchIdeasAccent</Translator>
              </span>
            </Title>

            <div className={styles.imgContent}>
              <div className={styles.img_container}>
                <Image
                  className={styles.img}
                  src="/main/front-view-wind-turbines-with-copy-space.webp"
                  alt="line"
                  fill
                  sizes="max-width: 849px"
                />
              </div>
            </div>
          </div>
          <div className={styles.text_container}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.subtitle_wrap}>
                  <div className={styles.icon_first}>
                    <Image
                      src="/main/svg/one.svg"
                      alt="icon"
                      fill
                      sizes="max-width: 92px"
                    />
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
                    <Image
                      src="/main/svg/two.svg"
                      alt="вітряк"
                      fill
                      sizes="max-width: 92px"
                    />
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
                      src="/main/svg/three.svg"
                      alt="переробка вторинної сировини"
                      fill
                      sizes="max-width: 92px"
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
                    <Translator>
                      recyclingOfSecondaryRawMaterialsDesc
                    </Translator>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
