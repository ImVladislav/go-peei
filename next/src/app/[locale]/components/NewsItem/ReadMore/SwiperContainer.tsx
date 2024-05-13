"use client";
import { newsItem } from "@/app/types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import SingleNewsItem from "./SingleNewsItem";
import styles from "./readMore.module.scss";

interface swiperItemsNewsProps {
  data?: newsItem[];
  currentNewsItemId: string;
  locale: string;
}

const SwiperContainer = ({
  data,
  currentNewsItemId,
  locale,
}: swiperItemsNewsProps) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={24}
      navigation={{
        nextEl: ".s-button-next",
        prevEl: ".s-button-prev",
      }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 2.5,
        },

        1024: {
          slidesPerView: 2.5,
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
      {data?.map(
        (item) =>
          item._id !== currentNewsItemId && (
            <SwiperSlide className={styles.swiper_slide} key={item._id}>
              <SingleNewsItem key={item._id} newsItem={item} locale={locale} />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default SwiperContainer;
