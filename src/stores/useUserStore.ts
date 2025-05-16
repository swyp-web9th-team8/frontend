import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserProfile } from "@/types/userProfile";

interface UserStore {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;
  clearProfile: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: null }),
    }),
    {
      name: "UserStore",
    },
  ),
);
