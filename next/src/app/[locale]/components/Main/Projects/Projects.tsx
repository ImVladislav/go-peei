import Link from "next/link";

import { projectsItem } from "@/app/types";

import Title from "../../Title/Title";
import SingleProject from "./SingleProject";
import Translator from "../../translator/Translator";

import styles from "./projects.module.scss";

const Projects = ({
  data,
  locale,
}: {
  data: projectsItem[];
  locale: string;
}) => {
  const sortedData: projectsItem[] = [...data].sort((a, b) => {
    if (a.closed === b.closed) return 0;
    return a.closed ? 1 : -1;
  });
  return (
    <section className={styles.section}>
      <div className="container">
        <Title>
          <Translator>helpRaiseFunds</Translator>
          <span className={styles.accentTitle}>
            <Translator>helpRaiseFundsAccent</Translator>
          </span>
        </Title>

        <ul className={styles.list}>
          {sortedData.slice(0, 3).map((item) => (
            <SingleProject key={item._id} project={item} locale={locale} />
          ))}
        </ul>

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
