import React from "react";
import Title from "../components/Title/Title";
import Link from "next/link";
import s from "./officialDocuments.module.scss";
import style from "../../styles/utils/Container.module.scss";
import Translator from "../components/translator/Translator";

const OfficialDocuments = () => {
  return (
    <div className={style.container}>
      <section className={s.officialDocuments__section}>
        <div>
          <Title>
            <Translator>officialDocuments</Translator>
          </Title>
        </div>
        <ul>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="/officialDocuments/extract"
            >
              <Translator>extract</Translator>
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="/officialDocuments/statut"
            >
              <Translator>charter</Translator>
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="/officialDocuments/volunteerEngagement"
            >
              <Translator>volunteerRegulations</Translator>
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="/officialDocuments/offert_contract"
            >
              <Translator>offerAgreement</Translator>
            </Link>
          </li>
        </ul>
      </section>
      <section className={s.officialDocuments__section}>
        <div>
          <Title>
            <Translator>lawsOfUkraineRelatedToVolunteering</Translator>
          </Title>
        </div>
        <ul>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="https://zakon.rada.gov.ua/laws/main/3236-17#Text"
            >
              <Translator>volunteeringLaw</Translator>
            </Link>
          </li>
          <li className={s.officialDocuments__li_item_link}>
            <Link
              className={s.officialDocuments__link}
              href="https://zakon.rada.gov.ua/laws/main/5073-17#Text"
            >
              <Translator>charitableActivitiesLaw</Translator>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OfficialDocuments;
