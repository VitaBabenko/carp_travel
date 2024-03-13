"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y } from "swiper/modules";
import Image from "next/image";

import { HeadLineSection, CustomBtn } from "@/components";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Services.module.css";

import dataServices from "@/data/services.json";
import listServices from "@/data/listServices.json";
import data from "@/data/common.json";

export const Services = () => {
  const { titleServices } = data.services;
  const [activeSl, setActiveSl] = useState<number>(0);
  const refSl = useRef<any>(null);

  const handleClickSl = (index: number) => {
    setActiveSl(index);

    if (refSl.current && refSl.current.slideTo && typeof index === "number") {
      refSl.current.slideTo(index);
    }
  };

  return (
    <section id="services">
      <Swiper
        modules={[EffectFade, A11y]}
        slidesPerView={1}
        initialSlide={0}
        effect={"fade"}
        onSwiper={(swiper) => {
          refSl.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveSl(swiper.realIndex);
        }}
      >
        {dataServices.map(
          ({ id, numberActive, number, img, alt, bgImg, description }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className="w-full h-full bg-cover pt-[54px] pb-[56px]"
                  style={{
                    backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%,
                     rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                    backgroundPositionX: "75%",
                  }}
                >
                  <div className="container mx-auto">
                    <HeadLineSection
                      stylesTitle="mb-[24px]"
                      label={titleServices.label}
                      labelSpan={titleServices.labelSpan}
                    />
                    <p className="text-end mb-[16px] text-[43px] text-main-color not-italic font-thin leading-[normal]">
                      {numberActive}
                      <span className="opacity-[0.2]">{number}</span>
                    </p>
                    <Image
                      src={img}
                      alt={alt}
                      width={607}
                      height={429}
                      className="block w-full min-h-[213px] h-full object-cover"
                    />
                    <div className="mt-[24px] flex flex-col justify-between h-[320px] md:h-[376px] md:justify-start lg:h-[429px] lg:flex-row lg:justify-normal">
                      <ul className="flex flex-col gap-4">
                        {listServices.map((label, index) => {
                          return (
                            <li key={index} className="relative">
                              <CustomBtn
                                type={"button"}
                                onClick={() => handleClickSl(index)}
                                label={label}
                                btnStyle={`text-[20px] not-italic leading-[0.85] uppercase text-main-color font-extralight hover:opacity-100 ${
                                  index === activeSl
                                    ? `ml-[14px] font-medium opacity-100 ${styles.list_item}`
                                    : "opacity-50"
                                }`}
                              />
                            </li>
                          );
                        })}
                      </ul>
                      <p className="text-[14px] not-italic font-extralight leading-5 text-main-color text-justify">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};
