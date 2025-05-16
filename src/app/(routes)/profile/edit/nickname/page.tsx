"use client";

import { useForm, FormProvider } from "react-hook-form";
import EditNicknameTemplate from "@/components/templates/EditNicknameTemplate";
import { useUpdateNickname } from "@/hooks/mutations/useUpdateNickname";

export default function EditNicknamePage() {
  const { mutate } = useUpdateNickname();
  const methods = useForm({
    defaultValues: { nickname: "" },
    mode: "onChange",
  });

  const { handleSubmit, setValue, trigger } = methods;

  const handleClear = () => {
    setValue("nickname", "");
    trigger("nickname");
  };

  const onSubmit = (data: { nickname: string }) => {
    mutate(data.nickname);
  };

  return (
    <FormProvider {...methods}>
      <EditNicknameTemplate
        onSubmit={handleSubmit(onSubmit)}
        onClear={handleClear}
      />
    </FormProvider>
  );
}
