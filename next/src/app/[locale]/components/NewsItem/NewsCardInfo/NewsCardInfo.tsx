"use client";

import { newsItem } from "@/app/types";
import Image from "next/image";
import React, { useState } from "react";
import { formatDate } from "../../formatDate";
import Translator from "../../translator/Translator";
import InputLinkNews from "./InputLinkNews/InputLinkNews";
import SocialsNews from "./SocialsNews/SocialsNews";
import styles from "./newsCardInfo.module.scss";

const NewsCardInfo: React.FC<{ newsItem: newsItem }> = ({ newsItem }) => {
  const [pageLink, setPageLink] = useState(
    `http://localhost:3000/news/${newsItem._id}`
  );

  return (
    <div className={styles.section}>
      {/* card section */}
      <div className={styles.card}>
        <div className={styles.card__imgWrapper}>
          <Image
            src={newsItem.imageSrc}
            alt={newsItem.title}
            fill
            className={styles.card__img}
          />
        </div>
        <div className="container">
          <div className={styles.card__wrapDescription}>
            <h3 className={styles.card__title}>{newsItem.title}</h3>
            <p className={styles.card__description}>{newsItem.description}</p>
          </div>
          <div className={styles.bottomInfoWrap}>
            {/* box data */}
            <div className={styles.boxData}>
              <p className={styles.boxData__data}>
                <span className={styles.boxData__dataTitle}>
                  <Translator>publishedBy</Translator>:{" "}
                </span>
                {formatDate(newsItem.createdAt)}
              </p>
            </div>
            {/* social section */}
            <div className={styles.socialSection}>
              <div className={styles.socialSection__topWrap}>
                <h3 className={styles.socialSection__title}>
                  <Translator>toShare</Translator>:
                </h3>
                <SocialsNews />
              </div>
              <InputLinkNews pageLink={pageLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardInfo;
