import { FormInputProps } from "@/types";

export const FormTextarea: React.FC<FormInputProps> = ({
  config,
  register,
  stylesForm,
}) => {
  const { name, label } = config;
  return (
    <>
      <label className="text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-main-color mb-1">
        {label}
      </label>
      <textarea
        className={`${stylesForm} bg-white/[0.05] pl-2 pr-2 text-[20px] not-italic font-extralight leading-6 text-main-color h-[196px]`}
        {...register(name)}
      />
    </>
  );
};
