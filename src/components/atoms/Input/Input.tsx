"use client";

import { RegisterOptions, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  validationRules?: RegisterOptions;
  readOnly?: boolean;
  max?: number; // type number
  min?: number; // type number
  onClick?: () => void;
}

const Input = ({
  name,
  placeholder,
  validationRules,
  type = "text",
  readOnly = false,
  max,
  min,
  onClick,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      id={name}
      {...register(name, validationRules)}
      type={type}
      placeholder={placeholder}
      className={`input-base input-placeholder ${errors[name] ? "input-error" : "input-default"}`}
      readOnly={readOnly}
      onClick={onClick}
      {...(type === "number" && { max, min })}
    />
  );
};

export default Input;
