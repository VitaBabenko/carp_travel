import data from "@/data/common.json";

import styles from "./Hero.module.css";

export const Hero = () => {
  const { spanHero, title, list, description, btnHero } = data.hero;

  return (
    <section className={`${styles.bg_section} h-full overflow-hidden`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-end">
          <div className="text-[37px] not-italic uppercase font-medium leading-[normal] text-main-color">
            <span>{spanHero.first}</span>
            <span className="font-thin tracking-[1.665px] mr-[6px]">
              {spanHero.second}
            </span>
          </div>
          <p className="text-[12px] not-italic uppercase font-light tracking-[9.48px] leading-[normal] text-main-color mb-[24px]">
            {spanHero.third}
          </p>
        </div>
        <h1 className="flex flex-col mb-[24px] text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color">
          <span className="font-medium">{title.firstTitle}</span>
          <span>{title.secondTitle}</span>
          <span>{title.thirdTitle}</span>
        </h1>
        <ul className="flex flex-wrap gap-[3px] w-[180px] mb-[24px]">
          {list.map(({ id, label }) => (
            <li
              key={id}
              className={`${styles.list_item} text-[10px] not-italic font-extralight leading-4 text-main-color`}
            >
              {label}
            </li>
          ))}
        </ul>
        <p className="text-[14px] not-italic font-extralight leading-[1.6] text-main-color text-justify mb-[26.5px]">
          {description}
        </p>
        <button
          className="text-[18px] not-italic font-bold leading-[2.7] text-main-color uppercase block w-[280px] mx-auto bg-white/[0.10] px-16 py-[18px] cursor-pointer hover:bg-white/[0.20] transition-all"
          type="button"
        >
          {btnHero}
        </button>
      </div>
    </section>
  );
};
