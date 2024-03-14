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
          ({
            id,
            numberActive,
            number,
            callText,
            img,
            alt,
            bgImg,
            description,
          }) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className="w-full h-full bg-cover pt-[54px] pb-[56px] md:pt-[65px] md:pb-[64px] lg:pt-[104px] lg:pb-[104px]"
                  style={{
                    backgroundImage: `linear-gradient( rgba(2, 15, 8, 0.50) 0%,
                     rgba(2, 15, 8, 0.50) 100%), url(${bgImg})`,
                    backgroundPositionX: "75%",
                  }}
                >
                  <div className="container xs:max-w-full sm:w-[480px] md:w-[768px] lg:w-[1280px] xl:w-[1440px]">
                    <div className="md:flex md:justify-between md:mb-9 md:relative lg:mb-5">
                      <HeadLineSection
                        stylesTitle="mb-[24px] md:mb-0"
                        label={titleServices.label}
                        labelSpan={titleServices.labelSpan}
                      />
                      <p className="text-end mb-[16px] text-[43px] text-main-color not-italic font-thin leading-[normal] md:text-[67px] md:leading-[1.2] md:mb-0 lg:text-[98px]">
                        {numberActive}
                        <span className="opacity-[0.2]">{number}</span>
                      </p>
                    </div>
                    <div className="md:flex md:gap-[19px] md:h-[370px] lg:h-[400px] w-[100%] md:relative xl:h-[429px]">
                      <Image
                        src={img}
                        alt={alt}
                        width={607}
                        height={429}
                        priority
                        className="block w-full min-h-[213px] h-full object-cover md:w-[463px] xl:w-[607px]"
                      />
                      <p className="text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-main-color mt-3 text-end md:absolute md:top-[50%] md:left-[68.5%] lg:hidden">
                        {callText}
                      </p>
                      <div className="mt-[24px] flex flex-col justify-between h-[320px] md:h-[100%] md:justify-between md:mt-0 lg:flex-row lg:justify-normal lg:items-stretch">
                        <ul className="flex flex-col gap-4 w-[200px] lg:w-[280px]">
                          {listServices.map((label, index) => {
                            return (
                              <li key={index} className="relative">
                                <CustomBtn
                                  type={"button"}
                                  onClick={() => handleClickSl(index)}
                                  label={label}
                                  btnStyle={`text-[20px] not-italic leading-[0.85] uppercase text-left text-main-color font-extralight hover:opacity-100 hover:ml-[14px] transition-all md:text-[22px] lg:text-[28px] ${
                                    index === activeSl
                                      ? `ml-[14px] font-medium opacity-100 ${styles.list_item}`
                                      : "opacity-50"
                                  }`}
                                />
                                {activeSl === index && (
                                  <span className="hidden lg:block lg:absolute lg:top-0 lg:left-[100%] w-[200px] text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-main-color">
                                    {callText}
                                  </span>
                                )}
                              </li>
                            );
                          })}
                        </ul>

                        <p className="text-[14px] not-italic font-extralight leading-5 text-main-color md:text-[13px] lg:text-[18px] lg:leading-6 lg:w-[293px] lg:self-end">
                          {description}
                        </p>
                      </div>
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
