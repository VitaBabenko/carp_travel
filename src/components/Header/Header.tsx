"use client";

import { useState, useEffect } from "react";

import { useToggle } from "@/hook";

import { Logo, NavBar, CustomBtn, MenuMobile } from "@/components";

import { LogoProps } from "@/types";

import data from "@/data/common.json";

export const Header: React.FC<LogoProps> = ({ stylesFonts }) => {
  const { btnMenu } = data.header;
  const [isMobile, setIsMobile] = useState(false);
  const { isOpenMenu, openMenu, closeMenu } = useToggle(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenMenu]);

  return (
    <header className="absolute pt-[25px] w-[100%]">
      <div className="container mx-auto flex justify-between items-end">
        <Logo stylesFonts={stylesFonts} />
        {isMobile ? (
          <CustomBtn
            label={btnMenu.open}
            type={"button"}
            onClick={openMenu}
            btnStyle="font-normal leading-[normal] tracking-[1.4px] hover:underline focus:underline"
          />
        ) : (
          <NavBar />
        )}
        {isOpenMenu && <MenuMobile onClickBtn={closeMenu} />}
      </div>
    </header>
  );
};
