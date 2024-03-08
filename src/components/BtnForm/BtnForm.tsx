import { BtnFormProps } from "@/types";

export const BtnForm: React.FC<BtnFormProps> = ({ data }) => {
  return (
    <button
      type="submit"
      className="block cursor-pointer text-[30px] not-italic font-medium leading-[normal] uppercase text-main-color mr-0 ml-auto hover:underline focus:underline"
    >
      {data?.label}
    </button>
  );
};