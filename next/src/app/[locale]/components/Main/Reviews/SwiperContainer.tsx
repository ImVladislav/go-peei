"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/scss";

import { reviewsItem } from "@/app/types";
import SingleReview from "./SingleReview";

import styles from "./reviews.module.scss";

const SwiperContainer = ({ data }: { data: reviewsItem[] }) => {
  return (
    <Swiper
      slidesPerView={1.02}
      spaceBetween={12}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 500,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
        waitForTransition: true,
      }}
      speed={500}
      modules={[Autoplay]}
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
          slidesPerView: 2.1,
        },
        900: {
          slidesPerView: 2.5,
        },

        1024: {
          slidesPerView: 2.7,
        },
        1100: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
      }}
      className={`mySwiper ${styles.swiper}`}
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
