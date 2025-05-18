"use client";

import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import ProfileImageUploader from "@/components/molecules/profile/ProfileImageUploader";
import NicknameField from "@/components/molecules/profile/NicknameField";
import { useLogout } from "@/hooks/mutations/useLogout";
import { useImageUrl } from "@/utils/useImageUrl";
import { useUserProfile } from "@/hooks/queries/useUserProfile";
import { useUpdateProfileImage } from "@/hooks/mutations/useUpdateProfileImage";

interface EditProfileFormProps {
  onWithdraw: () => void;
}

interface FormValues {
  profileImage: File | string | null;
  nickname: string;
}

export default function EditProfileForm({ onWithdraw }: EditProfileFormProps) {
  const { data: profile } = useUserProfile();
  const { handleLogout } = useLogout();
  const { mutate: updateProfileImage } = useUpdateProfileImage();

  const methods = useForm<FormValues>({
    defaultValues: {
      profileImage: profile?.profileImageUrl ?? null,
      nickname: profile?.nickname ?? "",
    },
  });

  useEffect(() => {
    if (profile) {
      methods.reset({
        profileImage: profile.profileImageUrl,
        nickname: profile.nickname,
      });
    }
  }, [profile, methods]);

  const imageUrl = useImageUrl(profile?.profileImageUrl);

  // 프로필 이미지 변경 감지 및 업데이트
  useEffect(() => {
    const subscription = methods.watch((value, { name }) => {
      if (
        name === "profileImage" &&
        value.profileImage &&
        typeof value.profileImage !== "string"
      ) {
        updateProfileImage(value.profileImage);
      }
    });

    return () => subscription.unsubscribe();
  }, [methods.watch, updateProfileImage]);

  return (
    <FormProvider {...methods}>
      <form>
        <ProfileImageUploader profileImageUrl={imageUrl ?? ""} />
        <NicknameField />
        <div className="text-body2-medium font-gsans-medium text-grey-400 mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="border-r border-[#D9D9D9] pr-3"
            onClick={handleLogout}
          >
            로그아웃
          </button>
          <button type="button" onClick={onWithdraw}>
            회원탈퇴
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
