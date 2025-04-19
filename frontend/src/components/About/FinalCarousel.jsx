import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import HeroSection from "./HeroSection";
import Counter from "./Counter";
import SeconedHero from "./SeconedHero";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full h-screen"
    >
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <Counter />
      </SwiperSlide>
      <SwiperSlide>
        <SeconedHero />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
