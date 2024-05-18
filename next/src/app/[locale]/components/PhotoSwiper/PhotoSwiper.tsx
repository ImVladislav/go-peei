"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";

import Image from "next/image";

import styles from "./PhotoSwiper.module.scss";

interface PhotoSwiperProps {
  data: string[];
}

const PhotoSwiper = ({ data }: PhotoSwiperProps) => {
  return (
    <Swiper
      style={
        {
          "--swiper-theme-color": "#0d490d",
          "--swiper-pagination-bullet-size": "20px",
          "--swiper-pagination-bottom": "0px",
          // "--swiper-pagination-bullet-horizontal-gap": "16px",
        } as React.CSSProperties
      }
      slidesPerView={"auto"}
      spaceBetween={10}
      grabCursor={true}
      initialSlide={data.length > 2 ? 1 : 0}
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerGroupAuto={true}
      slidesPerGroup={1}
      centeredSlides={true}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        1024: {
          initialSlide: data.length > 2 ? 1 : 0,
          spaceBetween: 56,
          centeredSlides: data.length > 2 ? true : false,
        },
      }}
      className={`mySwiperProject`}
    >
      {data?.map((item, index) => (
        <SwiperSlide className={styles.photo_swiper_slide} key={index}>
          <div className={styles.photo_imgWrap}>
            <Image className={styles.photo_img} src={item} alt="photo" fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoSwiper;
