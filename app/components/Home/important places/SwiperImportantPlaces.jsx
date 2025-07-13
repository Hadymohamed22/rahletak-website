"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperItem from "./SwiperItem";

const SwiperImportantPlaces = ({ places }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={8}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {places.map((e) => (
        <SwiperSlide key={e.id}>
          <SwiperItem place={e} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImportantPlaces;
