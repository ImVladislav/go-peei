"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import styles from "./PhotoSwiper.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PhotoSwiperProps {
  data: string[];
}

const PhotoSwiper = ({ data }: PhotoSwiperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
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
              <Image className={styles.photo_img} src={item} alt="photo" fill />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} ref={modalRef}>
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
                  width={14}
                  height={14}
                />
              </button>
              <div className={styles.modalWrapImg}>
                <img
                  className={styles.modalImg}
                  src={data[currentImageIndex]}
                  alt="modal"
                  loading="lazy"
                />
              </div>
              <button className={styles.nextBtn} onClick={nextImage}>
                <Image
                  src="/main/icon-prev.svg"
                  alt="close"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoSwiper;
