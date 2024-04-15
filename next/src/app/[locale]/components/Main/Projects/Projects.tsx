import Link from "next/link";

import { projectsItem } from "@/app/types";
import { getData } from "../../../../../../libs/getData";
import Title from "../../Title/Title";

import styles from "./projects.module.scss";
import SwiperContainer from "./SwiperContainer";
import Image from "next/image";
import Translator from "../../translator/Translator";

const Projects = async () => {
  const data: projectsItem[] = await getData("projects");
  return (
    <section className={styles.section}>
      <div className="container">
        <Title>
          <Translator>helpRaiseFunds</Translator>
        </Title>
        <div className={styles.btn_wrap}>
          <button className={`s-button-prev ${styles.btn}`}>
            <Image src="/main/icon-next.svg" alt="next" width={8} height={16} />
          </button>
          <button className={`s-button-next ${styles.btn}`}>
            <Image src="/main/icon-prev.svg" alt="prev" width={8} height={16} />
          </button>
        </div>

        <SwiperContainer data={data} />

        <div className={styles.box}>
          <Link className={styles.box__link} href="activities/projects">
            <Translator>allProjects</Translator>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
