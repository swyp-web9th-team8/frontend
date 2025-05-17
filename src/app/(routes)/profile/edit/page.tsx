"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/api/profile/getUserProfile";
import { useUserStore } from "@/stores/useUserStore";
import EditProfileTemplate from "@/components/templates/EditProfileTemplate";

export default function EditProfilePage() {
  const { setProfile } = useUserStore();

  const { data, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data, setProfile]);

  if (isLoading) return <p className="text-center">로딩 중...</p>;

  return <EditProfileTemplate />;
}
