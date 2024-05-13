import Image from "next/image";

import { projectsItem } from "@/app/types";
import { getDataId } from "../../../../../../libs/getData";

import Button from "@/app/[locale]/components/Button/Button";

import styles from "../projects.module.scss";
import Title from "@/app/[locale]/components/Title/Title";
import Translator from "@/app/[locale]/components/translator/Translator";

const ProjectDetails = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const { id, locale } = params;
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
        <Title>{locale === "uk" ? data.title : data.titleEn}</Title>
        <p className={styles.card__description}>
          {locale === "uk" ? data.description : data.descriptionEn}
        </p>
        <p className={styles.card__description}>
          <Translator>totalAmount</Translator>: <span> {data.total}</span>
        </p>
        <p className={styles.card__description}>
          <Translator>collected</Translator>: <span>{data.fundsRaised}</span>
        </p>
        <Button
          newStyles={styles.item__btn}
          isLink
          href="https://payhub.com.ua/#/service/98840"
        >
          <Translator>supportUs</Translator>
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
