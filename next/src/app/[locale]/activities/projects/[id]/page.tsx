import Image from "next/image";

import { projectsItem } from "@/app/types";
import { getDataId } from "../../../../../../libs/getData";

import Button from "@/app/[locale]/components/Button/Button";

import styles from "../projects.module.scss";
import Title from "@/app/[locale]/components/Title/Title";
import Translator from "@/app/[locale]/components/translator/Translator";
import Link from "next/link";
import PhotoSwiper from "@/app/[locale]/components/PhotoSwiper/PhotoSwiper";
import SupportUSBtnModal from "@/app/[locale]/components/supportUSbtnModal/supportUSbtnModal";

const ProjectDetails = async ({
  params,
}: {
  params: { id: string; locale: string };
}) => {
  const { id, locale } = params;

  const data: projectsItem = await getDataId("projects", id);
  const progress = (100 / data.total) * data.fundsRaised;

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
          <div className={styles.containerDonate}>
            <div>
              <Title>
                <Translator>projects</Translator>
                <span className={styles.accentTitle}>
                  "{locale === "uk" ? data.title : data.titleEn}"
                </span>
              </Title>

              <div className={styles.containerCard}>
                <div className={styles.imgContainer}>
                  <div className={styles.imgInner}>
                    <Image
                      className={styles.img}
                      src={data.imageSrc}
                      alt={data.title}
                      fill
                      sizes="max-width: 360px"
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.progres_bar}>
                    <div className={styles.progres_bar_box}>
                      <div
                        className={styles.progres_bar_fill}
                        style={{ width: `${progress}%`, background: "#0d490d" }}
                      ></div>
                    </div>
                    <div className={styles.progres_bar_text}>
                      <div className={styles.progres_bar_inner}>
                        <p className={styles.progres_bar_label}>
                          <Translator>collected</Translator>
                        </p>
                        <p className={styles.progres_bar_money}>
                          {formatPrice(data.fundsRaised)}
                          {locale === "uk" ? " грн" : " uah"}
                        </p>
                      </div>
                      <div className={styles.progres_bar_inner}>
                        <p className={styles.progres_bar_label}>
                          <Translator>totalAmount</Translator>
                        </p>
                        <p className={styles.progres_bar_money}>
                          {formatPrice(data.total)}
                          {locale === "uk" ? " грн" : " uah"}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <Button
                    newStyles={styles.btn}
                    isLink
                    href={data.link}
                    closed={data.closed}
                    disabled={data.closed}
                  >
                    <Translator>
                      {data.closed ? "donateСlosed" : "donate"}
                    </Translator>
                  </Button> */}
                  <SupportUSBtnModal
                    stylesBtn={styles.btn}
                    stylesBtnWrap={""}
                    btnText={
                      <Translator>
                        {data.closed ? "donateСlosed" : "donate"}
                      </Translator>
                    }
                    agreement={<Translator>agreementLite</Translator>}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.containerCol}> */}
          <div className={styles.container}>
            <h3 className={styles.title}>
              <Translator>aboutTheProject</Translator>
            </h3>
            <p className={styles.description}>
              "{locale === "uk" ? data.description : data.descriptionEn}"
            </p>
          </div>
          {data.report && (
            <div className={styles.container}>
              <div className={styles.reportWrap}>
                {/* {data.report && ( */}

                {/* <div className={styles.container}>
                  <h3 className={styles.title}>
                    <Translator>projectReporting</Translator>
                  </h3>
                </div>
                <div className={styles.container}>
                  <Link href={data.report} className={styles.report}>
                    <Translator>projectReport</Translator>
                  </Link>
                </div> */}
                {/* )} */}
              </div>
            </div>
          )}

          <div className={styles.containerBottom}>
            {/* {data.photoReport?.length !== 0 && (
              <div className={styles.containerPhoto}>
                <div className={styles.container}>
                  <h3 className={styles.title}>
                    <Translator>photoReport</Translator>
                  </h3>
                </div>

                {data.photoReport && <PhotoSwiper data={data.photoReport} />}
              </div>
            )} */}

            <div className={styles.box}>
              <Link className={styles.box__link} href="/activities/projects">
                <Translator>backToProjects</Translator>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
