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

export const firstContentData: reUseContentItem = {
  imgSrc: "/workWithTeenagers/environment-volunteer-teamwork-concept.jpg",
  title: "hello",
  description: [
    "joinTheTeamDescFirst",
    "joinTheTeamDescSecond",
    "joinTheTeamDescThird",
  ],
};

export const listContentData: listContentItem = {
  title: "whatWeOffer",
  list: [
    {
      imgSrc:
        "/workWithTeenagers/group-businesspeople-stacking-their-hands-desk.jpg",
      description: "whatWeOfferFirst",
    },
    {
      imgSrc: "/workWithTeenagers/recycle-all-it-s-worth-poster.jpg",
      description: "whatWeOfferSecond",
    },
  ],
};

export const contactUsContentData: contactUsContentItem = {
  imgSrc: "/workWithTeenagers/question.svg",
  imgAlt: "question",

  description: ["whatWeOfferThird"],
};

export const stepsContentData: reUseContentItem = {
  imgSrc: "/workWithTeenagers/young-friends-park.jpg",
  title: "stepsTitle",
  subtitle: "steps",
  description: [
    "stepsDescFirst",
    "stepsDescSecond",
    "stepsDescThird",
    "stepsDescFourth",
    "stepsDescFifth",
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
              title={firstContentData.title}
              description={firstContentData.description}
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
              description={contactUsContentData.description}
            />
          </div>
          <StepsContent
            imgSrc={stepsContentData.imgSrc}
            title={stepsContentData.title}
            subtitle={stepsContentData.subtitle}
            description={stepsContentData.description}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithTeenagersPage;
