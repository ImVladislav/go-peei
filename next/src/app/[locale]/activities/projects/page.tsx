import Image from "next/image";

import { projectsItem } from "@/app/types";
import { getData } from "../../components/getData";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import styles from "./projects.module.scss";

const Projects = async () => {
  const data: projectsItem[] = await getData("projects");

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
    <div className="container">
      <section className={styles.section}>
        {/* <Title width={270}>Благодійні акції</Title> */}

        <div className={styles.inner}>
          <ul className={styles.list}>
            {data?.map((project) => (
              <li className={styles.item} key={project._id}>
                <div className={styles.item__inner}>
                  <div className={styles.item__image}>
                    <Image
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        height: "270px",
                      }}
                      src={project.imageSrc}
                      alt={project.title}
                      width={360}
                      height={270}
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
                      style={{
                        width: `${
                          (100 / project.total) * project.fundsRaised
                        }%`,
                        background: "#0d490d",
                      }}
                    ></div>
                  </div>
                  <div className={styles.item__progres_bar_inner}>
                    <div className={styles.item__progres_bar_label}>
                      Зібрано
                    </div>
                    <div className={styles.item__progres_bar_label}>
                      Загальна сума
                    </div>
                  </div>
                  <div className={styles.item__progres_bar_inner}>
                    <div className={styles.item__progres_bar_money}>
                      {formatPrice(project.fundsRaised)} грн
                    </div>
                    <div className={styles.item__progres_bar_money}>
                      {formatPrice(project.total)} грн
                    </div>
                  </div>
                </div>

                <Button
                  newStyles={styles.item__btn}
                  isLink
                  href={`/activities/projects/${project._id}`}
                >
                  Підтримати нас
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
