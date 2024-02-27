import { initialProjects } from "@/app/constants/index";
import Link from "next/link";

import Title from "../../Title/Title";
import Project from "./Project";

import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.section}>
      <Title width={462}>допоможіть зібрать кошти</Title>

      <div className={styles.inner}>
        <ul className={styles.list}>
          {initialProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>

        <Link className={styles.link} href="/">
          Усі проєкти
        </Link>
      </div>
    </section>
  );
};

export default Projects;
