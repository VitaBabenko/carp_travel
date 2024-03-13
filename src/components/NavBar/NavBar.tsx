"use client";

import { Link } from "react-scroll";

import { MenuProps } from "@/types";

import data from "@/data/common.json";

export const NavBar: React.FC<MenuProps> = ({ onClickBtn }) => {
  const { navLinks } = data.header;

  return (
    <ul className="flex flex-col gap-12 items-center md:flex-row md:gap-6 lg:gap-14">
      {navLinks.map(({ id, path, label }) => (
        <li key={id}>
          <Link
            to={path}
            smooth={true}
            duration={500}
            onClick={onClickBtn}
            className="text-[18px] not-italic font-normal leading-[normal] tracking-[1.8px] md:tracking-[1.4px] text-main-color hover:underline focus:underline cursor-pointer md:text-[14px]"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
