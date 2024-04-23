import Image from "next/image";
import Title from "../../components/Title/Title";
import Translator from "../../components/translator/Translator";

import { environmentalProtectionData } from "@/app/constants";

import styles from "./environmentalProtection.module.scss";

const EnvironmentalProtectionPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <Title>
          <Translator>protection</Translator>
          <span className={styles.accentTitle}>
            <Translator>surroundings</Translator>
          </span>
        </Title>
        <ul className={styles.list}>
          {environmentalProtectionData.map((item) => (
            <li className={styles.item}>
              <div className={styles.imgContent}>
                <div className={styles.wrapImg}>
                  <Image
                    className={styles.img}
                    src={item.imageSrc}
                    alt={item.title}
                    fill
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
  );
};

export default EnvironmentalProtectionPage;
