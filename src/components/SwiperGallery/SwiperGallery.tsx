"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";

import { SwiperGalleryProps } from "@/types";

import styles from "./SwiperGallery.module.css";

export const SwiperGallery: React.FC<SwiperGalleryProps> = ({ gallery }) => {
  return (
    <div className="mx-auto w-[100%]">
      <Swiper
        className="w-[100%] h-[609px] md:h-[306px]"
        modules={[Navigation, A11y]}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        a11y={{ enabled: true }}
        loop={true}
        //   navigation={{
        //     nextEl: ".button-next",
        //     prevEl: ".button-prev",
        //   }}
        breakpoints={{
          0: {
            enabled: false,
            direction: "vertical",
          },
          768: {
            enabled: true,
            direction: "horizontal",
            centeredSlides: true,
            grabCursor: true,
          },
        }}
      >
        {gallery.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <div
                className={`md:w-[458px] md:h-[187px] md:mx-auto lg:w-[606px] lg:h-[429px]
                    ${
                      !isActive
                        ? `md:relative md:h-[86px] ${styles.swiper_wrap}`
                        : "md:h-[87px] md:w-[121px] lg:h-[225px] lg:w-[313px]"
                    }  `}
              >
                <Image src={img} alt={alt} fill className="object-cover" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
