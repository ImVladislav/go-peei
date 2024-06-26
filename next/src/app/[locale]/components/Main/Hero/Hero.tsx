import Image from "next/image";
import Link from "next/link";

import Button from "../../Button/Button";
import Translator from "../../translator/Translator";

import styles from "./hero.module.scss";

import SupportUSBtnModal from "../../supportUSbtnModal/supportUSbtnModal";

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
                {/* <Button
                    newStyles={styles.btn}
                    isLink
                    href="https://payhub.com.ua/#/service/98840"
                  >
                    <Translator>supportUs</Translator>
                  </Button> */}
                <SupportUSBtnModal/>
                </div>
              </div>
              <div className={styles.img_wrap}>
                <Image
                  className={styles.img}
                  src="/main/recycling-symbol-green-nature-isolated-white-background-1.webp"
                  alt="піктограма повторної переробки"
                  fill
                  sizes="max-width: 562px"
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
        </div>
      </div>
      {/* <Link
        href="https://dsns.gov.ua/uk/abetka-bezpeki/diyi-naselennya-v-umovax-nadzvicainix-situacii-vojennogo-xarakteru"
        target="_blank"
        rel="noreferrer"
        className={styles.linkSecurity}
      >
        <Translator>safetyRulesDuringMartialLaw</Translator>
      </Link> */}
    </section>
  );
};

export default Hero;
