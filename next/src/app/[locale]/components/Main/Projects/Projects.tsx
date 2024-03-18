import Link from "next/link";

import { projectsItem } from "@/app/types";
import { getData } from "../../getData";
import Title from "../../Title/Title";
import Project from "./Project";

import styles from "./projects.module.scss";

const Projects = async () => {
  const data: projectsItem[] = await getData("projects");
  return (
    <section className={styles.section}>
      <Title width={462}>допоможіть зібрати кошти</Title>

      <div className={styles.inner}>
        <ul className={styles.list}>
          {data?.slice(0, 3).map((item) => (
            <Project key={item._id} project={item} />
          ))}
        </ul>

        <Link className={styles.link} href="activities/projects">
          Усі проєкти
        </Link>
      </div>
    </section>
  );
};

export default Projects;
