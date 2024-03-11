"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";

import { FormInput, FormTextarea, CheckboxForm, BtnForm } from "@/components";
import ErrorFormIcon from "~/icons/error.svg";

import { CareerFormInputs } from "@/types";

import dataCareerFrom from "@/data/form.json";

export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<CareerFormInputs>();

  useFormPersist("userCareerContact", { watch, setValue });

  const onSubmit: SubmitHandler<CareerFormInputs> = (data) => {
    toast.success(`${data.name}, your message has been sent!`, {
      duration: 5000,
      position: "top-center",
      style: {
        minWidth: "50%",
        fontSize: "18px",
      },
    });
    reset();
    setValue(phone.name, "");
  };

  const { phone, checkbox } = dataCareerFrom;
  const checkboxInput = watch(checkbox.name);
  const phoneInput = watch(phone.name);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:gap-4 lg:gap-6"
    >
      <div className="md:flex gap-5 lg:gap-6">
        <div>
          <FormInput
            register={register}
            errors={errors}
            config={dataCareerFrom.name}
            stylesForm="mb-4 md:w-[221px] lg:w-[260px] xl:w-[290px]"
          />

          <FormInput
            register={register}
            errors={errors}
            config={dataCareerFrom.email}
            stylesForm="mb-4 md:w-[221px] lg:w-[260px] xl:w-[290px]"
          />

          <FormInput
            register={register}
            errors={errors}
            config={dataCareerFrom.position}
            stylesForm="mb-4 md:w-[221px] lg:w-[260px] xl:w-[290px]"
          />

          <label
            className="relative flex flex-col gap-[4px] text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-main-color mb-4 md:mb-0"
            style={{
              color: errors.phone ? "#FF5757" : "#FFF",
            }}
          >
            {phone.label}
            <>
              <Controller
                control={control}
                name={phone.name}
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <PatternFormat
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      className="w-[100%] bg-white/[0.05]  pl-2 pr-[50px] text-[20px] not-italic font-extralight leading-6 placeholder:text-[20px] placeholder:opacity-[0.2] md:w-[221px] lg:w-[260px] xl:w-[290px]"
                      style={{
                        color: errors.phone ? "#FF5757" : "#FFF",
                      }}
                      format="+38 (###) ## ## ###"
                      onValueChange={(values: any) => {
                        onChange(values.value);
                      }}
                      value={value}
                      placeholder={phone.placeholder}
                    />
                    {!phoneInput && (
                      <span className="absolute left-[6px] top-7 text-[20px] not-italic font-extralight leading-6 text-main-color">
                        +38
                      </span>
                    )}
                  </>
                )}
              />
              {errors.phone && (
                <div className="flex items-center gap-1 absolute right-0 top-full">
                  <ErrorFormIcon className="w-[18px] h-[18px]" />
                  <span className="text-[12px] not-italic font-extralight leading-6 tracking-[2.4px] text-error-color">
                    {phone.validation.pattern.message}
                  </span>
                </div>
              )}
            </>
          </label>
        </div>

        <FormTextarea
          register={register}
          config={dataCareerFrom.message}
          stylesForm="mb-[18px] h-[196px] md:h-[228px] md:w-[219px] md:mb-0 md:h-[220px] lg:w-[259px] lg:h-[219px] xl:w-[292px]"
        />
      </div>

      <div className="md:flex justify-between items-start">
        <CheckboxForm
          register={register}
          config={dataCareerFrom.checkbox}
          errors={errors}
          checkboxInput={checkboxInput}
        />

        <BtnForm data={dataCareerFrom.btn} />
      </div>
      <Toaster />
    </form>
  );
};
