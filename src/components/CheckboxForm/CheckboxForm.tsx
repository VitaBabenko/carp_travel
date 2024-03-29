import Checked from "~/icons/checked.svg";
import Unchecked from "~/icons/unchecked.svg";

import { FormInputProps } from "@/types";

export const CheckboxForm: React.FC<FormInputProps> = ({
  register,
  errors,
  config,
  checkboxInput,
}) => {
  const { name, label, validation } = config;
  return (
    <label className="relative cursor-pointer flex gap-[18px] text-[12px] not-italic font-extralight leading-[1.8] text-main-color mb-4 md:mb-0 md:w-[220px] lg:leading-6 lg:w-[290px]">
      <input
        className="invisible"
        aria-label="consent confirmation checkbox"
        type={name}
        {...register(name, {
          required: true,
        })}
      />
      {checkboxInput ? (
        <Checked
          aria-label="checked checkbox"
          className="absolute left-[1px] w-[22px] h-[22px]"
        />
      ) : (
        <Unchecked
          aria-label="unchecked checkbox"
          className="absolute left-[1px] w-[22px] h-[22px]"
        />
      )}
      {label}
      {errors?.checkbox && (
        <span className="absolute right-0 top-full text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-error-color">
          {validation?.required?.message}
        </span>
      )}
    </label>
  );
};
