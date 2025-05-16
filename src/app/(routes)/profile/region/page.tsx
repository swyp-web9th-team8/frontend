"use client";

import { useRouter } from "next/navigation";
import RegionPicker from "@/components/organisms/region/RegionPicker";
import { useRegionStore } from "@/stores/useRegionStore";
import Header from "@/components/organisms/Header";

export default function RegionSettingPage() {
  const router = useRouter();
  const setRegion = useRegionStore((state) => state.setRegion);

  const handleComplete = (gu: string, dong: string) => {
    setRegion(`${gu} ${dong}`);
    router.push("/profile");
  };

  return (
    <main className="h-full w-full">
      <Header title="지역 설정" backButton />
      <RegionPicker onComplete={handleComplete} className="px-0" />
    </main>
  );
}
