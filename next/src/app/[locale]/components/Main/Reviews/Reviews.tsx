// "use client";
import Link from "next/link";

import { reviewsItem } from "@/app/types";

import Title from "../../Title/Title";
import SwiperContainer from "./SwiperContainer";

import styles from "./reviews.module.scss";
import Translator from "../../translator/Translator";

const Reviews = ({ data }: { data: reviewsItem[] }) => {
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
