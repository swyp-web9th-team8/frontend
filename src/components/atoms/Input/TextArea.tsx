"use client";

import { RegisterOptions, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
  rows?: number;
}

export default function TextArea({
  name,
  placeholder = "",
  validationRules,
  rows = 1,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <textarea
      style={{ resize: "none" }}
      rows={rows}
      {...register(name, validationRules)}
      placeholder={placeholder}
      className={`textarea-base textarea-placeholder ${errors[name] ? "input-error" : "input-default"}`}
    />
  );
}
