import {
  contactUsContentItem,
  listContentItem,
  reUseContentItem,
} from "@/app/types";
import Title from "../../components/Title/Title";
import FirstContent from "../../components/reUseComponents/FirstContent/FirstContent";
import ListContent from "../../components/reUseComponents/ListContent/ListContent";
import StepsContent from "../../components/reUseComponents/StepsContent/StepsContent";
import ContactUsContent from "../../components/reUseComponents/ContactUsContent/ContactUsContent";
import Translator from "../../components/translator/Translator";

import styles from "./partnership.module.scss";

const firstContentData: reUseContentItem = {
  imgSrc: "/partners/front-view-man-with-wooden-blocks.jpg",
  imgStyle: styles.imgFirstContent,
  title: "partners",
  list: [
    { description: "partnersDescFirst" },
    { description: "partnersDescSecond" },
  ],
};

const listContentData: listContentItem = {
  title: "howYouCanSupport",
  list: [
    {
      imgSrc: "/partners/car.png",
      imgStyle: styles.imgListContentFirst,
      title: "supportInTransport",
      description: "supportInTransportDesc",
    },
    {
      imgSrc: "/partners/woman-working-environment-projects-portrait.jpg",
      imgStyle: styles.imgListContentSecond,
      title: "expertSupport",
      description: "expertSupportDesc",
    },
    {
      imgSrc: "/partners/researchers-looking-alternative-energy-souces.jpg",
      title: "resourceExchange",
      description: "resourceExchangeDesc",
    },
  ],
};

const contactUsContentData: contactUsContentItem = {
  imgSrc: "/partners/tree.svg",
  imgAlt: "question",
  imgStyle: styles.imgContactUs,
  list: [
    {
      description: "memorandumFirst",
    },
    {
      description: "memorandumSecond",
      link: "memorandum",
      href: "/",
      descAfter: "memorandumAfter",
    },
  ],
};

const stepsContentData: reUseContentItem = {
  imgSrc: "/partners/people.png",
  imgStyle: styles.imgStepContent,
  title: "benefitsOfPartnership",
  list: [
    {
      title: "deepImpact",
      description: "deepImpactContinued",
    },
    {
      title: "exchangeOfExperience",
      description: "exchangeOfExperienceContinued",
    },
    {
      title: "raisingReputation",
      description: "raisingReputationContinued",
    },
  ],
};

const PartnershipPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <Title>
          <Translator>partnering</Translator>
        </Title>
        <div className={styles.wrap}>
          <FirstContent
            imgSrc={firstContentData.imgSrc}
            imgStyle={firstContentData.imgStyle}
            title={firstContentData.title}
            list={firstContentData.list}
          />
          <div className={styles.contentSecond}>
            <ListContent
              title={listContentData.title}
              list={listContentData.list}
            />
          </div>
          <StepsContent
            imgSrc={stepsContentData.imgSrc}
            imgStyle={stepsContentData.imgStyle}
            title={stepsContentData.title}
            subtitle={stepsContentData.subtitle}
            list={stepsContentData.list}
          />
          <div className={styles.contactUsWrap}>
            <ContactUsContent
              imgSrc={contactUsContentData.imgSrc}
              imgAlt={contactUsContentData.imgAlt}
              imgStyle={contactUsContentData.imgStyle}
              list={contactUsContentData.list}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
