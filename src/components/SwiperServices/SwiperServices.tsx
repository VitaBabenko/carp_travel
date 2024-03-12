"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import data from "@/data/services.json";

export const SwiperServices = () => {
  const [activeSl, setActiveSl] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  //   const handleLinkClick = (id: number): void => {
  //     setActiveSl(id);

  //     if (swiperRef.current && swiperRef.current.slideTo) {
  //       swiperRef.current.slideTo(id);
  //     }
  //   };

  return (
    <Swiper
      modules={[EffectFade, A11y]}
      slidesPerView={1}
      initialSlide={0}
      effect={"fade"}
      onSlideChange={(swiper) => {
        setActiveSl(swiper.realIndex);
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map(({ id, label, img, alt, bgImg, description }, index) => {
        return (
          <SwiperSlide key={id}>
            {({ isActive }) => (
              <div
                className="w-full h-full bg-cover bg-bottom -z-10"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${data.length}`}
                style={{
                  backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%,
                     rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                  backgroundPositionX: "80%",
                }}
              >
                <div className="ui-container">
                  <div className="py-14 md:py-16 lg:py-20">
                    <div className="lg:p-6">
                      <div className="mb-4 md:flex md:mb-9 lg:mb-5">
                        <p
                          className="h-min text-43 font-thin text-right leading-[1.2] md:text-justify
                         md:text-67 md:leading-[1.16] lg:text-98 lg:leading-normal"
                        >
                          {`0${activeSl + 1}/`}
                          <span className="inline-block text-count-slide-dark text-left">
                            {data
                              ? `${data.length > 9 ? "" : 0}${data.length}`
                              : "XX"}
                          </span>
                        </p>
                      </div>

                      <div className="md:flex md:gap-5 md:items-center lg:items-stretch">
                        <div
                          className="mb-[12px] sm:w-[440px] sm:h-[311px]
                               md:w-[463px] md:h-[370px] md:mb-0 lg:w-[607px] lg:h-[429px] lg:m-0"
                        >
                          <Image
                            src={img}
                            alt={alt}
                            width={607}
                            height={429}
                            className="block w-full min-h-[213px] h-full object-cover"
                          />
                        </div>

                        <div className="md:w-[221px] lg:w-[605px]">
                          <div className="flex flex-col justify-between h-[320px] md:h-[376px] md:justify-start lg:h-[429px] lg:flex-row lg:justify-normal">
                            <div className="md:flex md:flex-col md:justify-between md:h-full lg:w-[293px] lg:ml-[60px] lg:justify-end">
                              <p
                                className="text-14 font-extralight leading-1.43 md:text-justify
                             md:text-13 md:leading-[1.54] lg:text-18 lg:leading-[1.33]"
                              >
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
