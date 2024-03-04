import data from "@/data/common.json";

import styles from "./Hero.module.css";

const { spanHero, title, list, description, btnHero } = data.hero;

export const Hero = () => {
  return (
    <section className={`${styles.bg_section} h-full w-full overflow-hidden`}>
      <div className="container mx-auto">
        <div>
          <span> {spanHero.first}</span>
          <span>{spanHero.second}</span>
        </div>
        <p>{spanHero.third}</p>
        <h1>
          <span>{title.firstTitle}</span>
          {title.secondTitle}
        </h1>
        <ul>
          {list.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ul>
        <p>{description}</p>
        <button type="button">{btnHero}</button>
      </div>
    </section>
  );
};
