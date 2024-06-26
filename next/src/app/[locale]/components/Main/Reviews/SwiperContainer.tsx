"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

import { reviewsItem } from "@/app/types";
import SingleReview from "./SingleReview";

import styles from "./reviews.module.scss";

const SwiperContainer = ({ data }: { data: reviewsItem[] }) => {
  return (
    <Swiper
      slidesPerView={1.03}
      spaceBetween={12}
      grabCursor={true}
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 1600,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
        waitForTransition: true,
      }}
      speed={1600}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        425: {
          slidesPerView: 1.2,
        },
        500: {
          slidesPerView: 1.5,
        },
        600: {
          slidesPerView: 1.8,
        },
        768: {
          slidesPerView: 1.4,
          spaceBetween: 32,
        },
        900: {
          slidesPerView: 1.6,
        },

        1024: {
          slidesPerView: 1.9,
        },
        1100: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.2,
          spaceBetween: 56,
        },
        1300: {
          slidesPerView: 2.3,
        },
        1440: {
          slidesPerView: 2.5,
        },
      }}
      className={`mySwiperReviews`}
    >
      {data?.map((item) => (
        <SwiperSlide className={styles.swiper_slide} key={item._id}>
          <SingleReview review={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
