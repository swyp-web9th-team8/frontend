"use client";

import { useEffect } from "react";
import { useUserStore } from "@/stores/useUserStore";
import EditProfileTemplate from "@/components/templates/EditProfileTemplate";
import { useUserProfile } from "@/hooks/queries/useUserProfile";

export default function EditProfilePage() {
  const { setProfile } = useUserStore();

  const { data, isLoading } = useUserProfile();

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data, setProfile]);

  if (isLoading) return <p className="text-center">로딩 중...</p>;

  return <EditProfileTemplate />;
}
