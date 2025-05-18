"use client";

import Nav from "@/components/organisms/Nav";
import ProfilePage from "@/components/templates/ProfilePage";

export default function Profile() {
  return (
    <div className="flex flex-1 flex-col">
      <ProfilePage />
      <Nav />
    </div>
  );
}
