"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { projectsItem } from "@/app/types";

import styles from "./projects.module.scss";
import SingleProject from "./SingleProject";

const SwiperContainer = ({ data }: { data: projectsItem[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      navigation={{
        nextEl: ".s-button-next",
        prevEl: ".s-button-prev",
      }}
      // loop={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        425: {
          slidesPerView: 1.2,
        },
        500: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 2.5,
        },

        1024: {
          slidesPerView: 2.7,
        },
        1228: {
          slidesPerView: 2.7,
        },
        1440: {
          slidesPerView: 3,
        },
      }}
      className={`mySwiper ${styles.swiper}`}
    >
      {data?.slice(0, 3).map((item) => (
        <SwiperSlide className={styles.swiper_slide} key={item._id}>
          <SingleProject key={item._id} project={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
