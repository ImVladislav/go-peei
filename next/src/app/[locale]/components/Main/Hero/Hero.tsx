"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "../../Button/Button";

import styles from "./hero.module.scss";

const Hero = () => {
  const router = useRouter();
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className="visually-hidden">
          Екологічна безпека - енергетична незалежність
        </h1>
        <div className={styles.inner}>
          <div className={styles.column}>
            <div className={styles.content}>
              <p className={styles.slogan}>
                Екологічна <span>безпека -</span>
              </p>
              <p className={styles.slogan}>
                <span>енергетична</span> незалежність
              </p>
            </div>

            <Button
              newStyles={styles.btn}
              onClick={() => router.push("/financial")}
            >
              Підтримати нас
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
            onClick={() => router.push("/financial")}
          >
            Підтримати нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
