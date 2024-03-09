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
    <section className={styles.bg_section}>
      <div className="container mx-auto">
        <h2 className="text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color mb-2">
          {titleAbout.label}
          <span className="font-medium ml-2">{titleAbout.labelSpan}</span>
        </h2>
        <p className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[180px] mb-5">
          <span className="font-normal mr-1">{firstDescription.labelSpan}</span>
          {firstDescription.label}
        </p>
        <p className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[180px] mb-10">
          <span className="font-normal mr-1">
            {secondDescription.labelSpan}
          </span>
          {secondDescription.label}
        </p>
        <h3 className="flex flex-col items-end text-[14px] not-italic leading-5 font-extralight text-main-color mb-10">
          <span className="font-normal uppercase mr-[44px]">
            {littleTitle.firstTitle}
          </span>
          <span className="font-normal uppercase">
            {littleTitle.secondTitle}
          </span>
          {littleTitle.thirdTitle}
        </h3>
        <p className="text-[14px] not-italic leading-5 font-extralight text-main-color">
          <span className="font-normal mr-1">{thirdDescription.labelSpan}</span>
          {thirdDescription.label}
        </p>
      </div>
    </section>
  );
};
