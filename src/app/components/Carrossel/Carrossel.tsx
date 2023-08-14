"use client";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import bicudoLogo from "../../assets/images/bicudo.png";
import torquartoLogo from "../../assets/images/torquarto.png";
import cla from "../../assets/images/cla.png";
import kids from "../../assets/images/kids.png";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const logo = [
  bicudoLogo,
  torquartoLogo,
  cla,
  kids,
  bicudoLogo,
  torquartoLogo,
  cla,
  kids,
  bicudoLogo,
  torquartoLogo,
  cla,
  kids,
];

export const Carrossel = () => {
  return (
    <div className="w-ful sm:h-80 h-40 bg-primary flex flex-col items-center justify-center">
      <div className=" w-full sm:px-20 px-4 ">
        <Swiper
          className="sm:h-[150px] flex justify-center items-center"
          loop
          autoplay
          grabCursor
          freeMode
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            1000: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            860: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[FreeMode, Autoplay]}
        >
          {logo.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt="parceiros"
                className="sm:w-[150px] w-[96px] transition-all duration-300 select-non grayscale hover:grayscale-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
