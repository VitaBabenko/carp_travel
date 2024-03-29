import { HeadLineSection } from "@/components";

import data from "@/data/common.json";

import styles from "./About.module.css";

export const About = () => {
  const {
    titleAbout,
    firstDescription,
    secondDescription,
    littleTitle,
    thirdDescription,
  } = data.about;

  return (
    <section id="about" className={styles.bg_section}>
      <div className="container xs:max-w-full sm:w-[480px] md:w-[768px] lg:w-[1280px] xl:w-[1440px] md:relative">
        <div className="flex flex-col gap-2 md:flex-row md:gap-[70px] md:mb-16 lg:gap-6 lg:mb-[72px]">
          <HeadLineSection
            stylesTitle=""
            label={titleAbout.label}
            labelSpan={titleAbout.labelSpan}
          />
          <div className="mb-10 md:mb-0">
            <p className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[180px] mb-5 md:text-[16px] md:mb-4 md:w-[220px] lg:text-[18px] lg:leading-6 lg:w-[292px] lg:mb-6">
              <span className="font-normal mr-1">
                {firstDescription.labelSpan}
              </span>
              {firstDescription.label}
            </p>
            <p className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[180px] md:text-[16px] md:w-[220px] lg:w-[292px]">
              <span className="font-normal mr-1">
                {secondDescription.labelSpan}
              </span>
              {secondDescription.label}
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between">
          <h3 className="flex flex-col items-end text-[14px] not-italic leading-5 font-extralight text-main-color mb-10 md:text-[16px] md:absolute md:bottom-[64px] md:left-[32px] lg:static lg:text-[18px] lg:leading-6 lg:mb-0">
            <span className="font-normal uppercase mr-[44px] tracking-[-0.14px] md:tracking-[0.32px]">
              {littleTitle.firstTitle}
            </span>
            <span className="font-normal uppercase">
              {littleTitle.secondTitle}
            </span>
            {littleTitle.thirdTitle}
          </h3>
          <p className="text-[14px] not-italic leading-5 font-extralight text-main-color md:w-[463px] md:text-justify md:mr-0 md:ml-auto lg:text-[18px] lg:leading-6 lg:w-[605px] lg:ml-0">
            <span className="font-normal mr-1">
              {thirdDescription.labelSpan}
            </span>
            {thirdDescription.label}
          </p>
        </div>
      </div>
    </section>
  );
};
