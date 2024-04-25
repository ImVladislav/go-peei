import Image from "next/image";

import Button from "../../Button/Button";
import Translator from "../../translator/Translator";

import styles from "./hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div style={{ position: "relative" }}>
          <div>
            <h1 className="visually-hidden">
              <Translator>environmentalSecurityEnergyIndependence</Translator>
            </h1>
            <div className={styles.inner}>
              <div className={styles.column}>
                <div className={styles.sloganContainer}>
                  <div className={styles.sloganInner}>
                    <p className={styles.slogan}>
                      <Translator>environmental</Translator>
                    </p>
                    <p className={styles.slogan}>
                      <span>
                        <Translator>security</Translator> -
                      </span>
                    </p>
                  </div>
                  <div className={styles.sloganInner}>
                    <p className={styles.slogan}>
                      <span>
                        <Translator>energy</Translator>
                      </span>
                    </p>
                    <p className={styles.slogan}>
                      <Translator>independence</Translator>
                    </p>
                  </div>
                </div>
                <div className={styles.btnWrap}>
                  <Button
                    newStyles={styles.btn}
                    isLink
                    href="https://payhub.com.ua/#/service/98840"
                  >
                    <Translator>supportUs</Translator>
                  </Button>
                </div>
              </div>
              <div className={styles.img_wrap}>
                <Image
                  className={styles.img}
                  src="/main/recycling-symbol-green-nature-isolated-white-background.jpg"
                  alt="піктограма повторної переробки"
                  fill
                />
              </div>
              <div className={styles.btn_lastWrap}>
                <Button
                  newStyles={styles.btn_last}
                  isLink
                  href="https://payhub.com.ua/#/service/98840"
                >
                  <Translator>supportUs</Translator>
                </Button>
              </div>
            </div>
          </div>
          <Link href="/" className={styles.linkSecurity}>
            Правила безпеки під час воєнного стану
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
