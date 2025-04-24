"use client";

import { useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const FormInput = ({
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="h-12 rounded-full border-[0.8px] border-[#B0B0B0] px-4 py-4"
      />
      {errors[name] && (
        <span className="text-sm text-red-500">{`${errors[name]?.message}`}</span>
      )}
    </div>
  );
};

export default FormInput;
