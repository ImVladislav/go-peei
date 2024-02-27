"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { initialReviews } from "@/app/constants/index";

import Review from "./Review";
import Title from "../../Title/Title";

import styles from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box_title}>
        <Title width={128}>Відгуки</Title>
      </div>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={56}
        // grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
          waitForTransition: true,
        }}
        speed={800}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {initialReviews.map((review) => (
          <SwiperSlide className={styles.swiper_slide} key={review.id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.box_link}>
        <Link className={styles.link} href="/">
          Залишити відгук
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
