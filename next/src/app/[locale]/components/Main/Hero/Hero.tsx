"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "../../Button/Button";

import styles from "./hero.module.scss";
import Translator from "../../translator/Translator";

const Hero = () => {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className="visually-hidden">
          <Translator>environmentalSecurityEnergyIndependence</Translator>
        </h1>
        <div className={styles.inner}>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.slogan}>
                <Translator>environmental</Translator>
                <span>
                  <Translator>security</Translator> -
                </span>
              </p>
              <p className={styles.slogan}>
                <span>
                  <Translator>energy</Translator>
                </span>
                <Translator>independence</Translator>
              </p>
            </div>

            <Button
              newStyles={styles.btn}
              onClick={() =>
                router.push("https://payhub.com.ua/#/service/98840")
              }
            >
              <Translator>supportUs</Translator>
            </Button>
          </div>
          <div className={styles.img_wrap}>
            <Image
              className={styles.img}
              src="/main/pic.png"
              alt="піктограма повторної переробки"
              fill
            />
          </div>
          <Button
            newStyles={styles.btn_last}
            onClick={() => router.push("https://payhub.com.ua/#/service/98840")}
          >
            <Translator>supportUs</Translator>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
