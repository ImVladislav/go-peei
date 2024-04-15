// "use client";
import Link from "next/link";

import { reviewsItem } from "@/app/types";

import { getData } from "../../../../../../libs/getData";

import Title from "../../Title/Title";
import SwiperContainer from "./SwiperContainer";

import styles from "./reviews.module.scss";
import Translator from "../../translator/Translator";

const Reviews = async () => {
  const data: reviewsItem[] = await getData("reviews");
  return (
    <section className={styles.section}>
      <div className="container">
        <Title>
          <Translator>reviews</Translator>
        </Title>

        <SwiperContainer data={data} />

        <div className={styles.box}>
          <Link className={styles.box__link} href="/contacts">
            <Translator>leaveAReview</Translator>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
