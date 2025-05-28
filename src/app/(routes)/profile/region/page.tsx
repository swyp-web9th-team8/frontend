"use client";

import { useUpdateRegion } from "@/hooks/mutations/useUpdateRegion";
import RegionPicker from "@/components/organisms/region/RegionPicker";
import Header from "@/components/organisms/Header";

export default function RegionSettingPage() {
  const { mutate: updateRegion } = useUpdateRegion();

  const handleComplete = (gu: string, dong: string) => {
    const fullRegion = `${gu} ${dong}`;
    updateRegion(fullRegion);
  };

  return (
    <main className="h-full w-full">
      <Header title="지역 설정" backButton />
      <RegionPicker
        onComplete={handleComplete}
        className="h-screen px-0 pb-5"
      />
    </main>
  );
}
