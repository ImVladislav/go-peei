import Image from "next/image";

import { projectsItem } from "@/app/types";
import Button from "../../Button/Button";

import styles from "./projects.module.scss";
import Translator from "../../translator/Translator";
interface ProjectProps {
  project: projectsItem;
}

const SingleProject = async ({ project }: ProjectProps) => {
  const progress = (100 / project.total) * project.fundsRaised;
  const maxLength = 100;

  const formatPrice = (price: number) => {
    if (price && typeof price === "number") {
      const priceToString = price.toString();
      if (priceToString.length > 3) {
        return priceToString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
    }
    return price;
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__inner}>
        <div className={styles.item__image}>
          <Image
            style={{
              objectFit: "cover",
            }}
            src={project.imageSrc}
            alt={project.title}
            fill
          />
        </div>

        <h3 className={styles.item__title}>{project.title}</h3>

        <p className={styles.item__desc}>
          {project.description.slice(0, maxLength)}...
        </p>
      </div>
      <div className={styles.item__box}>
        <div className={styles.item__progres_bar}>
          <div
            className={styles.item__progres_bar_fill}
            style={{ width: `${progress}%`, background: "#0d490d" }}
          ></div>
        </div>
        <div className={styles.item__progres_bar_text}>
          <div className={styles.item__progres_bar_inner}>
            <p className={styles.item__progres_bar_label}>
              <Translator>collected</Translator>
            </p>
            <p className={styles.item__progres_bar_money}>
              {formatPrice(project.total)} грн
            </p>
          </div>
          <div className={styles.item__progres_bar_inner}>
            <p className={styles.item__progres_bar_label}>
              <Translator>totalAmount</Translator>
            </p>
            <p className={styles.item__progres_bar_money}>
              {formatPrice(project.fundsRaised)} грн
            </p>
          </div>
        </div>
      </div>
      <Button
        newStyles={styles.item__btn}
        isLink
        href={`/activities/projects/${project._id}`}
      >
        <Translator>supportUs</Translator>
      </Button>
    </li>
  );
};

export default SingleProject;
