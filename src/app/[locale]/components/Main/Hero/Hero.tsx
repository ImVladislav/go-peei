import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h1 className="hero__title visually-hidden">
          Екологічна безпека - енергетична незалежність
        </h1>
        <div className="hero__inner ">
          <div className="hero__column">
            <div className="hero__content">
              <p className="hero__slogan">
                Екологічна <span>безпека -</span>
              </p>
              <p className="hero__slogan">
                <span>енергетична</span> незалежність
              </p>
            </div>
            <button className="hero__btn button">Підтримати нас</button>
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
