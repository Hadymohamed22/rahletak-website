"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ReviewsSwiper = ({ reviews }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/55 rounded-2xl shadow p-6">
            <div className="name-rate flex flex-col md:flex-row justify-between items-center text-lg md:text-xl font-semibold text-primary mb-2">
              <span className="name">{review.name}</span>
              <div className="text-yellow-400 text-xl">
                {"⭐".repeat(review.rating)}
              </div>
            </div>
            <p className="text-para text-center md:text-start">{review.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSwiper;
