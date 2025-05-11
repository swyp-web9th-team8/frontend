"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import EditNicknameTemplate from "@/components/templates/EditNicknameTemplate";

export default function EditNicknamePage() {
  const router = useRouter();
  const methods = useForm({
    defaultValues: { nickname: "" },
    mode: "onChange",
  });

  const { handleSubmit, setValue, trigger } = methods;

  const handleClear = () => {
    setValue("nickname", "");
    trigger("nickname");
  };

  const onSubmit = async (data: { nickname: string }) => {
    console.log("닉네임 변경:", data.nickname);
    // TODO: 서버에 닉네임 변경 요청
    // await updateNickname(nickname);
    router.push("/profile/edit");
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
