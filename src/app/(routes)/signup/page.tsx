"use client";

import { FormProvider, useForm } from "react-hook-form";
import SignupForm from "@/components/organisms/SignupForm";
import { SignupFormValues } from "@/types/signup";

export default function SignupPage() {
  const methods = useForm<SignupFormValues>({ mode: "onChange" });

  return (
    <FormProvider {...methods}>
      <SignupForm />
    </FormProvider>
  );
}
