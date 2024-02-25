import Image from "next/image";
import styles from "./hero.module.scss";
import Button from "../../Button/Button";

const Hero = () => {
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
            <Button newStyles={styles.btn}>Підтримати нас</Button>
          </div>
          <Image
            src="/main/pic.png"
            alt="піктограма повторної переробки"
            width={421}
            height={397}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
