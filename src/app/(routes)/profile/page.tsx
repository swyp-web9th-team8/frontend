"use client";

import ProfilePage from "@/components/templates/ProfilePage";

export default function Profile() {
  return (
    <ProfilePage
      name="나리이"
      meetingCount={11}
      createdCount={3}
      recordCount={14}
    />
  );
}
