"use client";

import ProfilePage from "@/components/templates/ProfilePage";

export default function Profile() {
  return (
    <ProfilePage
      name="나리이"
      location="강남구 개포1동"
      meetingCount={11}
      createdCount={3}
      recordCount={14}
    />
  );
}
