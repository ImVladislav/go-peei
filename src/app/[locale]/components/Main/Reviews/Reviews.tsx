"use client";
import React, { useState } from "react";

import { initialReviews } from "@/app/constants/index";

import { reviewItem } from "@/app/types";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Review from "./Review";

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const admin = true;

  const handleAddReview = () => {
    const newReviews: reviewItem = {
      id: `Імя${reviews.length + 1}`,
      name: `Імя`,
      description: "Тут ваш новий відгук...",
      imageSrc: "/no-image.jpg",
    };

    setReviews([...reviews, newReviews]);
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title title">Відгуки</h2>
        <div className="line" />

        <Swiper
          // style={{
          //   "--swiper-navigation-color": "#000000",
          // }}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {admin && (
          <button
            className="reviews__add-button button-admin"
            onClick={handleAddReview}
          >
            Додати проект
          </button>
        )}
      </div>
    </section>
  );
};

export default Reviews;
