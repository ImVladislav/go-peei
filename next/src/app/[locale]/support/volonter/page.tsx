import { contactUsContentItem, reUseContentItem } from "@/app/types";
import Title from "../../components/Title/Title";
import FirstContent from "../../components/reUseComponents/FirstContent/FirstContent";
import StepsContent from "../../components/reUseComponents/StepsContent/StepsContent";
import ContactUsContent from "../../components/reUseComponents/ContactUsContent/ContactUsContent";
import Translator from "../../components/translator/Translator";
import styles from "./volonter.module.scss";

const firstContentData: reUseContentItem = {
  imgSrc: "/volontersPage/photo_2024-04-22_17-32-44.jpg",
  title: "volunteers",
  imgStyle: styles.imgFirst,
  list: [
    { description: "volunteersFirst" },
    { description: "volunteersSecond" },
  ],
};
const stepsContentData: reUseContentItem = {
  imgSrc: "/volontersPage/people-cleaning-garbage-from-nature.png",
  title: "stepsTitle",
  subtitle: "steps",
  list: [
    {
      descriptionBefore: "volunteersStepFirstBefore",
      link: "volunteersStepFirstLink",
      href: "/officialDocuments/volunteerEngagement",
    },
    {
      descriptionBefore: "stepsDescFourthBefore",
      link: "stepsDescFourthLink",
      href: "/support/volonter/newVolonter",
    },
    {
      descriptionBefore: "stepsDescThirdBefore",
    },

    { description: "volunteersStepFourth" },
    {
      descriptionBefore: "volunteersStepFifthBefore",
      link: "volunteersStepFifthLink",
      href: "/support/volonter/contract",
    },
    { description: "volunteersStepSixth" },
  ],
};
const contactUsContentData: contactUsContentItem = {
  imgSrc: "/partners/tree.svg",
  imgAlt: "question",
  imgStyle: styles.imgContactUs,
  list: [
    {
      description: "treesDescFirst",
    },
    {
      description: "treesDescSecond",
    },
  ],
};

const VolonterPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <Title>
          <Translator>volunteerings</Translator>
        </Title>
        <div className={styles.wrap}>
          <FirstContent
            imgSrc={firstContentData.imgSrc}
            imgStyle={firstContentData.imgStyle}
            title={firstContentData.title}
            list={firstContentData.list}
          />
          <div className={styles.contentSecond}>
            <StepsContent
              imgSrc={stepsContentData.imgSrc}
              title={stepsContentData.title}
              subtitle={stepsContentData.subtitle}
              list={stepsContentData.list}
            />
          </div>
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

export default VolonterPage;
