import Title from "../../components/Title/Title";
import styles from "./workWithTeenagers.module.scss";
import Translator from "../../components/translator/Translator";
import Image from "next/image";
import Button from "../../components/Button/Button";

const WorkWithTeenagersPage = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <Title>
          <Translator>work</Translator>
          <span className={styles.accentTitle}>
            <Translator>withYoungPeople</Translator>
          </span>
        </Title>
        <div className={styles.contentTop}>
          <div className={styles.imgContent}>
            <div className={styles.wrapImg}>
              <Image
                className={styles.img}
                src="/workWithTeenagers/environment-volunteer-teamwork-concept.jpg"
                alt="img"
                fill
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.textContent}>
              <p className={styles.hello}>
                <Translator>hello</Translator>
              </p>
              <div>
                <p className={styles.description}>
                  <Translator>joinTheTeamDescFirst</Translator>
                </p>
                <p className={styles.description}>
                  <br />
                  <Translator>joinTheTeamDescSecond</Translator>
                </p>
                <p className={styles.description}>
                  <br />
                  <Translator>joinTheTeamDescThird</Translator>
                </p>
              </div>
              <Button>
                <Translator>joinTheTeam</Translator>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.contentCenter}></div>
        <div className={styles.contentBottom}></div>
      </div>
    </div>
  );
};

export default WorkWithTeenagersPage;
