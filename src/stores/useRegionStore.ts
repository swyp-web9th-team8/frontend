import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegionState {
  region: string | null;
  setRegion: (region: string) => void;
  clearRegion: () => void;
}

export const useRegionStore = create<RegionState>()(
  persist(
    (set) => ({
      region: null,
      setRegion: (region) => set({ region }),
      clearRegion: () => set({ region: null }),
    }),
    {
      name: "userRegion",
    },
  ),
);
