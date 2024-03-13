import { FormInputProps } from "@/types";

export const FormTextarea: React.FC<FormInputProps> = ({
  config,
  register,
  stylesForm,
}) => {
  const { name, label } = config;
  return (
    <div className="flex flex-col">
      <label className="text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-main-color mb-1 md:mb-0">
        {label}
      </label>
      <textarea
        className={`${stylesForm} resize-none bg-white/[0.05] pl-2 pr-2 text-[20px] not-italic font-extralight leading-6 text-main-color`}
        {...register(name)}
      />
    </div>
  );
};
