"use client";

import { useFormContext, RegisterOptions } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  validationRules?: RegisterOptions;
}

const FormInput = ({
  name,
  label,
  placeholder,
  validationRules,
  type = "text",
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputBorderClass = errors[name]
    ? "border-[#EB4E2A] border-[1.2px] focus:outline-[#EB4E2A]"
    : "border-[#B0B0B0] border-[0.8px] focus:outline-[#3F8EFF]";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-grey-950 font-gsans-medium text-body1-medium"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        {...register(name, validationRules)}
        type={type}
        placeholder={placeholder}
        className={`placeholder:text-body2-medium placeholder:font-gsans-medium placeholder:text-grey-300 text-body2-medium font-gsans-medium h-12 rounded-full px-4 pt-5 pb-4 ${inputBorderClass}`}
      />
      {errors[name] && (
        <span className="text-[0.75rem] font-medium text-[#EB4E2A]">{`${errors[name]?.message}`}</span>
      )}
    </div>
  );
};

export default FormInput;
