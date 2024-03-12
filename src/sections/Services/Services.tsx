"use client";

// import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, A11y } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import { HeadLineSection } from "@/components";

import dataServices from "@/data/services.json";
// import listServices from "@/data/listServices.json";
import data from "@/data/common.json";

export const Services = () => {
  const { titleServices } = data.services;
  // const [activeSl, setActiveSl] = useState<number>(1);

  return (
    <Swiper
      modules={[EffectFade, A11y]}
      slidesPerView={1}
      initialSlide={0}
      effect={"fade"}
    >
      {dataServices.map(({ id, number, img, alt, bgImg, description }) => {
        return (
          <SwiperSlide key={id}>
            <section
              id="services"
              className="pt-[54px] pb-[56px]"
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
                <p>{number}</p>
                <Image
                  src={img}
                  alt={alt}
                  width={607}
                  height={429}
                  className="block w-full min-h-[213px] h-full object-cover"
                />
                {/* <ul>
                  {listServices.map((idList, label) => {
                    return (
                      <li key={idList}>
                        <button type="button">{label}</button>
                      </li>
                    );
                  })}
                </ul> */}
                <p>{description}</p>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
