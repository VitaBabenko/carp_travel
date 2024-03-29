"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";

import { FormInput, FormTextarea, BtnForm } from "@/components";

import { CareerFormInputs } from "@/types";

import dataCareerFrom from "@/data/form.json";

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
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
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row md:gap-5 lg:flex-col lg:w-[607px]"
    >
      <div className="lg:flex lg:gap-[20px] lg:mb-10">
        <FormInput
          register={register}
          errors={errors}
          config={dataCareerFrom.name}
          stylesForm="mb-[25px] md:w-[221px] md:mb-[28px] lg:w-[293px] lg:mb-0"
        />

        <FormInput
          register={register}
          errors={errors}
          config={dataCareerFrom.email}
          stylesForm="mb-[24px] md:w-[221px] md:mb-0 lg:w-[293px]"
        />
      </div>

      <div>
        <FormTextarea
          register={register}
          config={dataCareerFrom.message}
          stylesForm="mb-[16px] md:w-[463px] md:h-[221px] lg:w-[100%] lg:mb-[24px]"
        />

        <BtnForm data={dataCareerFrom.btn} />
      </div>
      <Toaster />
    </form>
  );
};
