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
    : "border-[#B0B0B0] border-[0.8px]";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-[1rem] font-medium text-[#1A1A1A]"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        {...register(name, validationRules)}
        type={type}
        placeholder={placeholder}
        className={`h-12 rounded-full px-4 py-4 text-sm font-medium placeholder:text-sm placeholder:font-medium placeholder:text-[#B0B0B0] ${inputBorderClass}`}
      />
      {errors[name] && (
        <span className="text-[0.75rem] font-medium text-[#EB4E2A]">{`${errors[name]?.message}`}</span>
      )}
    </div>
  );
};

export default FormInput;
