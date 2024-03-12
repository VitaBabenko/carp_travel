"use client";

import { NavBar, CustomBtn } from "@/components";

import data from "@/data/common.json";

import { MenuProps } from "@/types";

import styles from "./MenuMobile.module.css";

export const MenuMobile: React.FC<MenuProps> = ({ onClickBtn }) => {
  const { btnMenu } = data.header;

  return (
    <div className="fixed top-0 left-0 z-50 w-[100%] h-[100%] bg-black/[0.5]">
      <div className={`${styles.modal}`}>
        <div className="px-[117px] py-[170px]">
          <CustomBtn
            label={btnMenu.close}
            type={"button"}
            onClick={onClickBtn}
            btnStyle="absolute top-[43px] right-[20px] font-normal leading-[normal] tracking-[1.4px] hover:underline focus:underline"
          />
          <NavBar onClickBtn={onClickBtn} />
        </div>
      </div>
    </div>
  );
};
