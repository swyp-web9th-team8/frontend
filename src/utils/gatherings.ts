import { IGatheringItem } from "@/types/gatherings";
import { formatDate } from "./day";

type GroupedGatherings = Record<string, IGatheringItem[]>;

export const groupGatheringsByDate = (
  gatherings: IGatheringItem[],
): IGatheringItem[][] => {
  gatherings.sort((a, b) => {
    return (
      new Date(a.meetingTime).getTime() - new Date(b.meetingTime).getTime()
    );
  });

  const groupGatheringObj = gatherings.reduce(
    (acc: GroupedGatherings, gathering) => {
      const dateKey = formatDate(gathering.meetingTime, "yyyy-MM-dd");

      return {
        ...acc,
        [dateKey]: [...(acc[dateKey] || []), gathering],
      };
    },
    {},
  );

  return Object.values(groupGatheringObj);
};
