import Image from "next/image";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className="container">
        <h1 className="visually-hidden">
          Екологічна безпека - енергетична незалежність
        </h1>
        <div className={style.inner}>
          <div className={style.column}>
            <div className={style.content}>
              <p className={style.slogan}>
                Екологічна <span>безпека -</span>
              </p>
              <p className={style.slogan}>
                <span>енергетична</span> незалежність
              </p>
            </div>
            <button className={`${style.btn} button`}>Підтримати нас</button>
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
