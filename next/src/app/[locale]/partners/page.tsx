import React from "react";
import Title from "../components/Title/Title";
import Translator from "../components/translator/Translator";
import { formattedPartnerItems } from "./partnersItems";
import Image from "next/image";
import s from "./parthners.module.scss";
import Button from "../components/Button/Button";

const OurPartners = () => {
  return (
    <div className="container">
      <Title newStyles={s.title}>
        <Translator>ourPartners</Translator>
      </Title>
      <div className={s.container}>
        {formattedPartnerItems &&
          formattedPartnerItems.map((item, index) => (
            <div key={index} className={s.partnerItem}>
              <Image className={s.image} src={item.src} alt={item.partner} />
              <h3 className={s.partnerName}>{item.partner}</h3>
            </div>
          ))}
      </div>
      <div className={s.buttonContainer}>
        <Button isLink={true} href={"/"} newStyles={s.button}>
          Стати партнером
        </Button>
      </div>
    </div>
  );
};

export default OurPartners;
