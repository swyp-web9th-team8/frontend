"use client";

import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useUserStore } from "@/stores/useUserStore";
import ProfileImageUploader from "@/components/molecules/profile/ProfileImageUploader";
import NicknameField from "@/components/molecules/profile/NicknameField";
import { useLogout } from "@/hooks/mutations/useLogout";

interface EditProfileFormProps {
  onWithdraw: () => void;
}

export default function EditProfileForm({ onWithdraw }: EditProfileFormProps) {
  const { profile } = useUserStore();
  const { handleLogout } = useLogout();

  const methods = useForm({
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

  return (
    <FormProvider {...methods}>
      <form>
        <ProfileImageUploader
          profileImageUrl={profile?.profileImageUrl ?? ""}
        />
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
