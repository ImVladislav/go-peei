import Image from "next/image";

import { projectsItem } from "@/app/types";
import { getDataId } from "@/app/[locale]/components/getData";
// import Title from "@/app/[locale]/components/Title/Title";
import Button from "@/app/[locale]/components/Button/Button";

import styles from "../projects.module.scss";

const ProjectsDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const data: projectsItem = await getDataId("projects", id);
  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.card__img}>
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "10px",
            }}
            src={data.imageSrc}
            alt={data.title}
            width={1000}
            height={500}
          />
        </div>
        <Title> {data.title}</Title>
        <p className={styles.card__description}>{data.description}</p>
        <p className={styles.card__description}>
          Загальна сума збору: <span> {data.total}</span>
        </p>
        <p className={styles.card__description}>
          Зібрано: <span>{data.fundsRaised}</span>
        </p>
        <Button newStyles={styles.item__btn} isLink href="/financial">
          Підтримати нас
        </Button>
      </div>
    </div>
  );
};

export default ProjectsDetails;
