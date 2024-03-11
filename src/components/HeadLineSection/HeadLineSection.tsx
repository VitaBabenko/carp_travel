import { HeadLineSectionProps } from "@/types";

export const HeadLineSection: React.FC<HeadLineSectionProps> = ({
  label,
  labelSpan,
  stylesTitle,
}) => {
  return (
    <h2
      className={`${stylesTitle} text-[40px] not-italic uppercase font-thin leading-[1.4] tracking-[-1.6px] text-main-color md:text-[67px] md:leading-[normal] md:tracking-[-2.68px] lg:text-[98px] lg:tracking-[-3.92px]`}
    >
      {label}
      <span className="font-medium ml-3 md:ml-5 lg:ml-6">{labelSpan}</span>
    </h2>
  );
};
