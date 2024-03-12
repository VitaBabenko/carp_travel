import { BtnJoin } from "@/components";

import data from "@/data/common.json";

import styles from "./Hero.module.css";

export const Hero = () => {
  const { spanHero, title, list, description, btnHero } = data.hero;

  return (
    <section
      id="hero"
      className={`${styles.bg_section} h-full overflow-hidden`}
    >
      <div className="container mx-auto">
        <div className="md:flex flex-row-reverse justify-between md:mb-[68px] lg:mb-[95px]">
          <div className="flex flex-col items-end">
            <div className="text-[37px] not-italic uppercase font-medium leading-[normal] text-main-color md:text-[67px] lg:text-[98px]">
              <span>{spanHero.first}</span>
              <span className="font-thin tracking-[1.665px] mr-[6px] md:tracking-[8.71px]">
                {spanHero.second}
              </span>
            </div>
            <p className="text-[12px] not-italic uppercase font-light tracking-[9.48px] leading-[normal] text-main-color mb-[24px] md:text-[14px] md:tracking-[25.9px] lg:text-[16px] lg:tracking-[36.48px]">
              {spanHero.third}
            </p>
          </div>
          <h1 className="flex flex-col mb-[24px] text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color md:text-[67px] md:leading-[normal] md:tracking-[-2.68px] md:mb-0 lg:text-[98px] lg:tracking-[-3.92px]">
            <span className="font-medium">{title.firstTitle}</span>
            <span>{title.secondTitle}</span>
            <span>{title.thirdTitle}</span>
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-between items-end md:relative">
          <ul className="flex flex-wrap gap-[3px] w-[180px] md:w-[265px] lg:w-[608px] lg:gap-1">
            {list.map(({ id, label }) => (
              <li
                key={id}
                className={`${styles.list_item} text-[10px] not-italic font-extralight leading-4 text-main-color md:text-[14px] md:tracking-[1.26px] lg:text-[16px] lg:leading-6 lg:tracking-[1.44px]`}
              >
                {label}
              </li>
            ))}
          </ul>
          <p className="text-[14px] not-italic font-extralight leading-[1.6] text-main-color text-justify md:text-[16px] md:absolute md:w-[230px] md:bottom-[75px] md:right-0 lg:text-[18px] lg:w-[294px] lg:bottom-[105px]">
            {description}
          </p>
          <BtnJoin label={btnHero} />
        </div>
      </div>
    </section>
  );
};
