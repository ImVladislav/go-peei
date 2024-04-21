import Title from "../../components/Title/Title";
import styles from "./workWithTeenagers.module.scss";
import Translator from "../../components/translator/Translator";
import Image from "next/image";
import Button from "../../components/Button/Button";

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
            <div className={styles.contentFirst}>
              <div className={styles.imgContent}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    src="/workWithTeenagers/environment-volunteer-teamwork-concept.jpg"
                    alt="img"
                    fill
                  />
                </div>
              </div>
              <div className={styles.textContent}>
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>
                    <Translator>hello</Translator>
                  </h2>
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

                  <Button newStyles={styles.btn} isLink href={`/`}>
                    <Translator>joinTheTeam</Translator>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentSecond}>
            <div className={styles.containerSecond}>
              <h2 className={styles.title}>
                <Translator>whatWeOffer</Translator>
              </h2>

              <ul className={styles.listSecond}>
                <li className={styles.itemSecond}>
                  <div className={styles.imgContainerSecond}>
                    <Image
                      className={styles.imgSecond}
                      src="/workWithTeenagers/group-businesspeople-stacking-their-hands-desk.jpg"
                      alt="img"
                      fill
                    />
                  </div>
                  <p className={styles.description}>
                    <Translator>whatWeOfferFirst</Translator>
                  </p>
                </li>
                <li className={styles.itemSecond}>
                  <div className={styles.imgContainerSecond}>
                    <Image
                      className={styles.imgSecond}
                      src="/workWithTeenagers/recycle-all-it-s-worth-poster.jpg"
                      alt="img"
                      fill
                    />
                  </div>
                  <p className={styles.description}>
                    <Translator>whatWeOfferSecond</Translator>
                  </p>
                </li>
              </ul>
            </div>

            <div className={styles.bgrSecond}>
              <div className={styles.bgrContainer}>
                <Image
                  className={styles.bgrImg}
                  src="/workWithTeenagers/question.svg"
                  alt="img"
                  width={36}
                  height={52}
                />

                <p className={styles.description}>
                  <Translator>whatWeOfferThird</Translator>
                </p>
                <Button newStyles={styles.btn} isLink href="/contacts">
                  <Translator>contactUsBtn</Translator>
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.contentThird}>
            <div className={styles.containerThird}>
              <h2 className={styles.title}>
                <Translator>stepsTitle</Translator>
              </h2>
              <div>
                <div className={styles.imgContentThird}>
                  <div className={styles.imgContainerThird}>
                    <Image
                      className={styles.imgThird}
                      src="/workWithTeenagers/young-friends-park.jpg"
                      alt="img"
                      fill
                    />
                  </div>
                </div>
                <div className={styles.textContentThird}>
                  <div className={styles.textContainerThird}>
                    <h2 className={styles.title}>
                      <Translator>steps</Translator>
                    </h2>
                    <ul className={styles.listThird}>
                      <li className={styles.itemThird}>
                        <Image
                          className={styles.icon}
                          src="/about/leaf.svg"
                          alt="img"
                          width={13}
                          height={22}
                        />
                        <p className={styles.description}>
                          <Translator>stepsDescFirst</Translator>
                        </p>
                      </li>

                      <li className={styles.itemThird}>
                        <Image
                          className={styles.icon}
                          src="/about/leaf.svg"
                          alt="img"
                          width={13}
                          height={22}
                        />
                        <p className={styles.description}>
                          <Translator>stepsDescSecond</Translator>
                        </p>
                      </li>
                      <li className={styles.itemThird}>
                        <Image
                          className={styles.icon}
                          src="/about/leaf.svg"
                          alt="img"
                          width={13}
                          height={22}
                        />
                        <p className={styles.description}>
                          <Translator>stepsDescThird</Translator>
                        </p>
                      </li>
                      <li className={styles.itemThird}>
                        <Image
                          className={styles.icon}
                          src="/about/leaf.svg"
                          alt="img"
                          width={13}
                          height={22}
                        />
                        <p className={styles.description}>
                          <Translator>stepsDescFourth</Translator>
                        </p>
                      </li>
                      <li className={styles.itemThird}>
                        <Image
                          className={styles.icon}
                          src="/about/leaf.svg"
                          alt="img"
                          width={13}
                          height={22}
                        />
                        <p className={styles.description}>
                          <Translator>stepsDescFifth</Translator>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithTeenagersPage;
