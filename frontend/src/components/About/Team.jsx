import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import rogerImg from "../../assets/team.png";

const team = [
  { name: "Abdulrahman Ammar", role: "UI/UX Designer", img: rogerImg },
  { name: "Usama Bakkar", role: "Frontend Developer", img: rogerImg },
  { name: "Mohammed Alsheqih", role: "Backend Engineer", img: rogerImg },
  { name: "Riyadh", role: "Project Manager", img: rogerImg },
  { name: "Naif Alanezy", role: "Data Analyst", img: rogerImg },
];

export default function TeamSlider() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4" style={{ color: "#F97316" }}>
        Our Team
      </h2>{" "}
      <p className="max-w-xl mx-auto mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-12"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 text-left flex flex-col items-center" >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-green-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
