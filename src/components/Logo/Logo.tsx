"use client";

import Image from "next/image";

import { Link } from "react-scroll";

import data from "@/data/common.json";

export const Logo = () => {
  const { logo } = data.header;

  return (
    <Link
      to={logo.path}
      href="#"
      smooth={true}
      duration={500}
      aria-label="logo"
      className="cursor-pointer flex flex-col gap-[2px] focus:outline-error-color hover"
    >
      <Image src={logo.icon1} alt={logo.alt} width={61} height={22} priority />
      <Image src={logo.icon2} alt={logo.alt} width={61} height={10} priority />
    </Link>
  );
};
