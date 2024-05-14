import Image from "next/image";

import { projectsItem } from "@/app/types";
import { getDataId } from "../../../../../../libs/getData";

import Button from "@/app/[locale]/components/Button/Button";

import styles from "../projects.module.scss";
import Title from "@/app/[locale]/components/Title/Title";
import Translator from "@/app/[locale]/components/translator/Translator";
import Link from "next/link";

const ProjectDetails = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const { id, locale } = params;
  const data: projectsItem = await getDataId("projects", id);
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
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <Title>
            <Translator>charityActionsFirst</Translator>
            <span className={styles.accentTitle}>
              <Translator>charityActionsSecond</Translator>
            </span>
          </Title>

          <div className={styles.card}>
            <div className={styles.imgContainer}>
              <div className={styles.imgInner}>
                <Image
                  className={styles.img}
                  src={data.imageSrc}
                  alt={data.title}
                  fill
                />
              </div>
            </div>
            <h2>
              <Translator>projects</Translator>"
              {locale === "uk" ? data.title : data.titleEn}"
            </h2>
            <div className={styles.item__box}>
              <div className={styles.item__progres_bar}>
                <div
                  className={styles.item__progres_bar_fill}
                  style={{ width: `${data}%`, background: "#0d490d" }}
                ></div>
              </div>
              <div className={styles.item__progres_bar_text}>
                <div className={styles.item__progres_bar_inner}>
                  <p className={styles.item__progres_bar_label}>
                    <Translator>collected</Translator>
                  </p>
                  <p className={styles.item__progres_bar_money}>
                    {formatPrice(data.total)} грн
                  </p>
                </div>
                <div className={styles.item__progres_bar_inner}>
                  <p className={styles.item__progres_bar_label}>
                    <Translator>totalAmount</Translator>
                  </p>
                  <p className={styles.item__progres_bar_money}>
                    {formatPrice(data.fundsRaised)} грн
                  </p>
                </div>
              </div>
            </div>
            <Button
              newStyles={styles.item__btn}
              isLink
              href="https://payhub.com.ua/#/service/98840"
            >
              <Translator>supportUs</Translator>
            </Button>
            <h3>Про проєкт</h3>
            <p className={styles.card__description}>
              {locale === "uk" ? data.description : data.descriptionEn}
            </p>
            <h3>Звітність по проєкту</h3>
            <h3>фотозвіт</h3>

            <Link href="/activities/projects">Назад до проєктів</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
