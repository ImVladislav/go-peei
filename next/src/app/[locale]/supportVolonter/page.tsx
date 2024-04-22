import Link from "next/link";
import React from "react";
// import volontersFirst from "../../../../public/volontersPage/volonteringPageFirstPhoto.png";
import volontersFirstMobile from "../../../../public/volontersPage/volonteringPageFirstPhotoMobile.png";
import volontersSecound from "../../../../public/volontersPage/volonteringPageSecoundPhoto.png";
import Image from "next/image";
import s from "./supportVolonters.module.scss";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
const SupportVolonter = () => {
  return (
    <article className="container">
      <Title>Волонтерство</Title>
      <Image
        className={s.imageContainer}
        src={volontersFirstMobile}
        alt="Volunteer"
      />

      <section className={s.sections}>
        <h3 className={s.sections__title}>Волонтери!</h3>
        <p className={s.sections__paragraph}>
          Шукаєте можливість долучитися до команди людей, які прагнуть зробити
          світ кращим місцем для життя? Громадська Організація "Платформа
          еко-енергетичних ініціатив" потребує саме вас!
        </p>
        <p className={s.sections__paragraph}>
          Ми шукаємо волонтерів, які готові долучитися до наших ініціатив
          збереження природи, переробки вторинної сировини та впровадження
          відновлювальних джерел енергії.
        </p>
        <Button>
          <p className={s.button__text}>Долучитися до команди</p>
        </Button>
      </section>

      <h2 className={s.subTitle}>
        Для приєднання до нашої команди тобі залишилось декілька кроків:
      </h2>
      <Image
        className={s.imageContainer}
        src={volontersSecound}
        alt="Volunteer"
      />
      <section className={s.sections}>
        <ol>
          <li>Заповнити анкету</li>
          <li>Надати згоду на обробку особистої інформації</li>
          <li>
            Пройти співбесіду з керівником відділу по роботі з волонтерами
          </li>
          <li>Укласти договір</li>
          <li>Отримати посвідчення волонтера встановленого зразка.</li>
        </ol>
      </section>

      <Link href="/supportVolonter/newVolonter">
        Долучитися до волонтерської спільноти
      </Link>
    </article>
  );
};
export default SupportVolonter;
