import { projectsItem } from "@/app/types";
import { getData } from "../../../../../libs/getData";
import Title from "../../components/Title/Title";

import styles from "./projects.module.scss";
import Translator from "../../components/translator/Translator";

import ProjectsList from "../../components/ProjectsList/ProjectsList";

const ProjectsPage = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;

  const data: projectsItem[] = await getData("projects");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <div>
            <Title>
              <Translator>charityActionsFirst</Translator>
              <span className={styles.accentTitle}>
                <Translator>charityActionsSecond</Translator>
              </span>
            </Title>

            <ProjectsList data={data} locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
