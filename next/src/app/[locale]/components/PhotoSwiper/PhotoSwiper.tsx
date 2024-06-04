"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import styles from "./PhotoSwiper.module.scss";
import { useState } from "react";
import Image from "next/image";

interface PhotoSwiperProps {
  data: string[];
}

const PhotoSwiper = ({ data }: PhotoSwiperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Swiper
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
          <SwiperSlide
            className={styles.photo_swiper_slide}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <div className={styles.photo_imgWrap}>
              <img
                className={styles.photo_img}
                src={item}
                alt="photo"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <Image
                src="/message/Close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className={styles.modalContent}>
            <button className={styles.prevBtn} onClick={prevImage}>
              <Image
                src="/main/icon-next.svg"
                alt="close"
                width={16}
                height={16}
              />
            </button>
            <img
              className={styles.modalImg}
              src={data[currentImageIndex]}
              alt="modal"
            />
            <button className={styles.nextBtn} onClick={nextImage}>
              <Image
                src="/main/icon-prev.svg"
                alt="close"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoSwiper;
