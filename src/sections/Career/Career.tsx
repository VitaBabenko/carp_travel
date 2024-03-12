import { HeadLineSection, CareerForm } from "@/components";

import data from "@/data/common.json";

import styles from "./Career.module.css";

export const Career = () => {
  const {
    titleCareer,
    description,
    listTitle,
    list,
    titleFirstForm,
    titleSecondForm,
  } = data.career;

  return (
    <>
      <section
        id="career"
        className={`${styles.bg_section} h-full overflow-hidden`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 mb-9 md:flex-row md:justify-between md:mb-3 md:items-start lg:mb-8">
            <HeadLineSection
              stylesTitle=""
              label={titleCareer.label}
              labelSpan={titleCareer.labelSpan}
            />
            <p className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[179px] mr-0 ml-auto md:text-[13px] md:w-[221px] md:text-justify lg:text-[18px] lg:leading-6 lg:w-[293px]">
              {description}
            </p>
          </div>
          <div className="md:flex justify-between items-end md:gap-4 lg:gap-8 xl:items-start">
            <div className="md:w-[225px] lg:w-[100%]">
              <h3 className="text-[30px] not-italic font-extralight leading-[normal] text-main-color uppercase w-[179px] mr-0 ml-auto mb-9 md:mb-14 md:text-right lg:mb-[45px] lg:text-[36px] lg:leading-[1.1] lg:ml-20">
                {listTitle}
              </h3>
              <ul className="w-[181px] ml-0 mr-auto flex flex-col gap-4 md:w-[100%] md:gap-7 lg:gap-6">
                {list.map(({ id, label, description }) => (
                  <li
                    className="not-italic leading-5 text-main-color text-end lg:flex lg:gap-6"
                    key={id}
                  >
                    <h4 className="text-[14px] font-normal mb-2 md:text-[16px] lg:text-[18px] lg:leading-6 lg:w-[253px] lg:text-right">
                      {label}
                    </h4>
                    <p className="text-[12px] font-extralight lg:leading-6 lg:w-[220px] lg:text-left xl:w-[285px]">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block">
              <h3 className="text-[13px] not-italic leading-5 font-extralight text-main-color w-[179px] mr-auto ml-0 lg:text-[18px] lg:leading-6 lg:w-[240px]">
                {titleFirstForm}
              </h3>
              <h3 className="text-[13px] not-italic leading-5 font-extralight text-main-color w-[179px] mr-auto ml-0 mb-[22px] lg:text-[18px] lg:leading-6 lg:mb-[14px] lg:w-[240px]">
                {titleSecondForm}
              </h3>
              <CareerForm />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.bg_section} h-full overflow-hidden md:hidden`}
      >
        <div className="container mx-auto">
          <h3 className="text-[14px] not-italic leading-5 font-extralight text-main-color w-[179px] mr-0 ml-auto">
            {titleFirstForm}
          </h3>
          <h3 className="text-[14px] not-italic leading-5 font-extralight text-main-color mb-6 w-[179px] mr-0 ml-auto">
            {titleSecondForm}
          </h3>
          <CareerForm />
        </div>
      </section>
    </>
  );
};
