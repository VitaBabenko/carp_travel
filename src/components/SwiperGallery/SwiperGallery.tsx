"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCreative } from "swiper/modules";

import { SwiperGalleryProps } from "@/types/SwiperGallery";

import gallery from "@/data/gallery.json";

import "swiper/css";
import "swiper/css/effect-creative";

export const SwiperGallery: React.FC<SwiperGalleryProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <ul className="flex flex-col gap-6">
          {gallery.map(({ id, img, alt }) => (
            <li key={id}>
              <Image
                src={img}
                alt={alt}
                width={280}
                height={187}
                priority
                className="block w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
      ) : (
        <Swiper
          modules={[A11y, EffectCreative]}
          slidesPerView={1.5}
          loop
          centeredSlides
          speed={600}
          effect={"creative"}
          a11y={{ enabled: true }}
          style={{ position: "relative" }}
          grabCursor
          breakpoints={{
            0: {
              enabled: false,
              slidesPerView: -1,
            },
            768: {
              enabled: true,
              spaceBetween: 146,
              width: 703,
              height: 294,
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  scale: 0.29,
                  translate: ["-69.3%", 0, 0],
                },
                next: {
                  scale: 0.29,
                  translate: ["69.3%", 0, 0],
                },
              },
            },
            1280: {
              spaceBetween: 346,
              width: 900,
              height: 294,
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  scale: 0.39,
                  translate: ["-79.3%", 0, 0],
                },
                next: {
                  scale: 0.39,
                  translate: ["79.3%", 0, 0],
                },
              },
            },
            1440: {
              spaceBetween: 650,
              width: 1280,
              height: 450,
              creativeEffect: {
                limitProgress: 1,
                prev: {
                  scale: 0.52,
                  translate: ["-76%", 0, 0],
                },
                next: {
                  scale: 0.52,
                  translate: ["76%", 0, 0],
                },
              },
            },
          }}
        >
          {gallery.map(({ id, img, alt }) => (
            <SwiperSlide key={id}>
              {({ isActive }) => (
                <div
                  className={`w-[415px] h-[294px] md:mx-auto lg:w-[606px] lg:h-[429px] ${
                    !isActive
                      ? "md:relative md:after:absolute md:after:top-0 md:after:left-0 md:after:w-full md:after:h-full md:after:bg-bgc75"
                      : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={alt}
                    width={280}
                    height={187}
                    className="block w-full h-full object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
