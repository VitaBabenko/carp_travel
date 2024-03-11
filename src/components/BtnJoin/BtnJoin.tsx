"use client";

import { Link } from "react-scroll";

import { HeroBtnProps } from "@/types";

import styles from "./BtnJoin.module.css";

export const BtnJoin: React.FC<HeroBtnProps> = ({ label }) => {
  return (
    <Link to="contacts" smooth={true} duration={500}>
      <button
        className={`relative ${styles.btn_hero} text-[18px] not-italic font-bold leading-[2.7] text-main-color uppercase block mx-auto bg-white/[0.10] px-16 w-[280px] h-[53px] cursor-pointer hover:bg-white/[0.20] transition-all md:leading-[normal] md:h-[50px] md:w-[230px] lg:h-[71px] lg:w-[293px] lg:text-[32px]`}
        type="button"
      >
        {label}
      </button>
    </Link>
  );
};
