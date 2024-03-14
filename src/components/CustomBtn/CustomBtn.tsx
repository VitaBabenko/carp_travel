"use client";

import { BtnProps } from "@/types";

export const CustomBtn: React.FC<BtnProps> = ({
  label,
  type,
  btnStyle,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${btnStyle} block text-[14px] not-italic text-main-color uppercase focus:outline-error-color`}
    >
      {label}
    </button>
  );
};
