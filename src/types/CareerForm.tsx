import { UseFormRegister, FieldErrors } from "react-hook-form";

export type CareerFormInputs = {
  [key: string]: string;
};

export type FormInputProps = {
  config: FormInputsConfig;
  register: UseFormRegister<CareerFormInputs>;
  errors?: FieldErrors<CareerFormInputs>;
  stylesForm?: string;
  checkboxInput?: string;
};

export type FormInputsConfig = {
  name: string;
  label: string;
  placeholder?: string;
  validation?: validationInput;
};

export type validationInput = {
  required?: validationRequired;
  pattern?: validationPattern;
};

export type validationRequired = {
  value: boolean;
  message: string;
};

export type validationPattern = {
  value: string;
  message: string;
};

export type BtnFormProps = {
  data?: FormInputsConfig;
};
