import ErrorFormIcon from "~/icons/error.svg";
import { FormInputProps } from "@/types";

export const FormInput: React.FC<FormInputProps> = ({
  config,
  errors,
  register,
  stylesForm,
}) => {
  const { name, label, placeholder, validation } = config;
  const isRequired = validation?.required;
  const isError = errors?.[name];

  return (
    <label
      className={`${stylesForm} relative flex flex-col text-[12px] not-italic font-extralight leading-6 tracking-[2.4px]`}
      style={{
        color: isError ? "#FF5757" : "#FFF",
      }}
    >
      {label}
      <input
        aria-required="true"
        aria-invalid={isError ? "true" : "false"}
        aria-describedby={isError ? "errorName" : undefined}
        className="bg-white/[0.05]  pl-2 pr-[50px] text-[20px] not-italic font-extralight leading-6 placeholder:text-[20px] placeholder:opacity-[0.2] md:h-6 focus:outline-error-color"
        style={{
          color: isError ? "#FF5757" : "#FFF",
        }}
        {...register(name, {
          ...validation,
          required: isRequired,
          pattern: {
            value: validation?.pattern
              ? new RegExp(validation.pattern.value)
              : new RegExp(""),
            message: validation?.pattern ? validation?.pattern?.message : "",
          },
        })}
        placeholder={placeholder}
        type="text"
      />
      {isError && (
        <div className="flex items-center gap-1 absolute right-0 top-full">
          <ErrorFormIcon aria-label="error" className="w-[18px] h-[18px]" />
          <span
            id={`errorName${name}`}
            className="text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-error-color"
          >
            {isError.message}
          </span>
        </div>
      )}
    </label>
  );
};
