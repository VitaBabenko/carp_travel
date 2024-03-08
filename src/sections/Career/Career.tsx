import { CareerForm } from "@/components";

import data from "@/data/common.json";

import styles from "./Career.module.css";

const {
  titleCareer,
  description,
  listTitle,
  list,
  titleFirstForm,
  titleSecondForm,
} = data.career;

export const Career = () => {
  return (
    <>
      <section className={`${styles.bg_section} h-full overflow-hidden`}>
        <div className="container mx-auto">
          <h2 className="text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color mb-6">
            {titleCareer.label}
            <span className="font-medium ml-2">{titleCareer.labelSpan}</span>
          </h2>
          <p className="text-[14px] not-italic leading-5 font-extralight text-main-color mb-9 w-[179px] mr-0 ml-auto">
            {description}
          </p>
          <h3 className="text-[30px] not-italic font-extralight leading-[normal] text-main-color uppercase w-[179px] mr-0 ml-auto mb-9">
            {listTitle}
          </h3>
          <ul className="w-[181px] ml-0 mr-auto">
            {list.map(({ id, label, description }) => (
              <li
                className="not-italic leading-5 text-main-color text-end"
                key={id}
              >
                <h4 className="text-[14px] font-normal mb-2">{label}</h4>
                <p className="text-[12px] font-extralight mb-4">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={`${styles.bg_section} h-full overflow-hidden`}>
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
