import {
  contactUsContentItem,
  reUseContentItem,
  listContentItem,
} from "@/app/types";

import Title from "../../components/Title/Title";
import Translator from "../../components/translator/Translator";
import FirstContent from "../../components/reUseComponents/FirstContent/FirstContent";
import ListContent from "../../components/reUseComponents/ListContent/ListContent";
import ContactUsContent from "../../components/reUseComponents/ContactUsContent/ContactUsContent";
import StepsContent from "../../components/reUseComponents/StepsContent/StepsContent";

import styles from "./workWithTeenagers.module.scss";

const firstContentData: reUseContentItem = {
  imgSrc: "/workWithTeenagers/environment-volunteer-teamwork-concept.jpg",
  imgStyle: styles.img,
  title: "hello",
  list: [
    { description: "joinTheTeamDescFirst" },
    { description: "joinTheTeamDescSecond" },
    { description: "joinTheTeamDescThird" },
  ],
};

const listContentData: listContentItem = {
  title: "whatWeOffer",
  list: [
    {
      imgSrc:
        "/workWithTeenagers/group-businesspeople-stacking-their-hands-desk.jpg",
      description: "whatWeOfferFirst",
    },
    {
      imgSrc: "/workWithTeenagers/recycle-all-it-s-worth-poster.jpg",
      imgStyle: styles.imgSecond,
      description: "whatWeOfferSecond",
    },
  ],
};

const contactUsContentData: contactUsContentItem = {
  imgSrc: "/workWithTeenagers/question.svg",
  imgAlt: "question",
  list: [{ description: "whatWeOfferThird" }],
};

const stepsContentData: reUseContentItem = {
  imgSrc: "/workWithTeenagers/young-friends-park.jpg",
  imgStyle: styles.imgStep,
  title: "stepsTitle",
  subtitle: "steps",

  list: [
    {
      descriptionBefore: "stepsDescFirstBefore",
      link: "stepsDescFirstLink",
      href: "/",
    },
    {
      descriptionBefore: "stepsDescSecondBefore",
      link: "stepsDescSecondLink",
      href: "/",
      descriptionAfter: "stepsDescSecondAfter",
    },
    {
      descriptionBefore: "stepsDescThirdBefore",
      link: "stepsDescThirdLink",
      href: "/",
      descriptionAfter: "stepsDescThirdAfter",
    },
    {
      descriptionBefore: "stepsDescSecondBefore",
      link: "stepsDescFourthLink",
      href: "/",
    },
    { description: "stepsDescFifth" },
  ],
};

const WorkWithTeenagersPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div>
            <Title>
              <Translator>work</Translator>
              <span className={styles.accentTitle}>
                <Translator>withYoungPeople</Translator>
              </span>
            </Title>
            <FirstContent
              imgSrc={firstContentData.imgSrc}
              imgStyle={firstContentData.imgStyle}
              title={firstContentData.title}
              list={firstContentData.list}
            />
          </div>
          <div className={styles.contentSecond}>
            <ListContent
              title={listContentData.title}
              list={listContentData.list}
            />

            <ContactUsContent
              imgSrc={contactUsContentData.imgSrc}
              imgAlt={contactUsContentData.imgAlt}
              imgStyle={contactUsContentData.imgStyle}
              list={contactUsContentData.list}
            />
          </div>
          <StepsContent
            imgSrc={stepsContentData.imgSrc}
            imgStyle={stepsContentData.imgStyle}
            title={stepsContentData.title}
            subtitle={stepsContentData.subtitle}
            list={stepsContentData.list}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithTeenagersPage;
