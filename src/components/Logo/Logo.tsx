"use client";

import Image from "next/image";

import { Link } from "react-scroll";

import { LogoProps } from "@/types";

import data from "@/data/common.json";

export const Logo: React.FC<LogoProps> = ({ stylesFonts }) => {
  const { logo } = data.header;

  return (
    <Link
      to={logo.path}
      smooth={true}
      duration={500}
      className="cursor-pointer flex flex-col gap-[2px]"
    >
      <Image src={logo.icon} alt={logo.alt} width={61} height={22} />
      <p
        className={`${stylesFonts} text-[14px not-italic leading-[normal] tracking-[2.59px] text-main-color hover:underline`}
      >
        {logo.label}
      </p>
    </Link>
  );
};
