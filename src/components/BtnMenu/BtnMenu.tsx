import { BtnProps } from "@/types";

export const BtnMenu: React.FC<BtnProps> = ({
  btnStyle,
  label,
  onClickBtn,
}) => {
  return (
    <button
      type="button"
      onClick={onClickBtn}
      className={`${btnStyle} text-[14px] not-italic font-normal leading-[normal] tracking-[1.4px] text-main-color uppercase hover:underline focus:underline`}
    >
      {label}
    </button>
  );
};
